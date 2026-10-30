import React, { useState } from 'react';

// ── Parser: WhatsApp message → invoice fields ──────────────────────────────
function parseWhatsAppInvoice(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  let invoiceId = '';
  let date = '';
  let customerName = '';
  let shipping = 'standard';
  let discount = 0;
  const items = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Strip markdown bold markers (*text*)
    const clean = line.replace(/\*/g, '').trim();

    // Invoice ID: "*Invoice ID:* #DL-XXXX"
    if (clean.startsWith('Invoice ID:')) {
      invoiceId = clean.replace('Invoice ID:', '').trim();
    }

    // Date: "*Date:* 30 October 2026"
    else if (clean.startsWith('Date:')) {
      date = clean.replace('Date:', '').trim();
    }

    // Customer: "*Customer:* Ahmed Ali"
    else if (clean.startsWith('Customer:')) {
      customerName = clean.replace('Customer:', '').trim();
    }

    // Shipping line: "Shipping: Upper Egypt (100 EGP)"
    else if (clean.startsWith('Shipping:')) {
      const shippingText = clean.replace('Shipping:', '').trim().toLowerCase();
      shipping = shippingText.includes('upper') ? 'upper' : 'standard';
    }

    // Discount line: "Discount: -50 EGP"
    else if (clean.startsWith('Discount:')) {
      const discMatch = clean.match(/[\d,.]+/);
      if (discMatch) discount = parseFloat(discMatch[0].replace(',', '')) || 0;
    }

    // Item name line: "1. *ARDUINO NANO DRIVER CH340G*"
    else if (/^\d+\.\s/.test(line)) {
      const itemName = clean.replace(/^\d+\.\s*/, '').trim();
      // Next lines: "└ Qty: 2 × EGP 150" and "└ Total: *EGP 300*"
      let quantity = 1;
      let price = 0;

      const nextLine1 = lines[i + 1] ? lines[i + 1].replace(/\*/g, '').trim() : '';
      const nextLine2 = lines[i + 2] ? lines[i + 2].replace(/\*/g, '').trim() : '';

      // Parse "└ Qty: 2 × EGP 150"
      const qtyMatch = nextLine1.match(/Qty:\s*([\d,]+)\s*[×x]\s*EGP\s*([\d,.]+)/i);
      if (qtyMatch) {
        quantity = parseInt(qtyMatch[1].replace(',', '')) || 1;
        price = parseFloat(qtyMatch[2].replace(',', '')) || 0;
        i += 2; // skip the two sub-lines
      }
      // Fallback: parse "└ Total: *EGP 300*" without qty line
      else {
        const totalMatch = nextLine2.match(/Total:\s*EGP\s*([\d,.]+)/i);
        if (totalMatch && quantity > 0) {
          const total = parseFloat(totalMatch[0].replace(',', '')) || 0;
          price = quantity > 0 ? total / quantity : total;
        }
      }

      if (itemName && price > 0) {
        // Build a stable id from the name
        const id = 'imp-' + itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30);
        items.push({ id, name: itemName, category: 'Imported', price, quantity });
      }
    }

    i++;
  }

  return { invoiceId, date, customerName, shipping, discount, items };
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ImportInvoiceModal({ onClose, onImport }) {
  const [text, setText] = useState('');
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [step, setStep] = useState('paste'); // 'paste' | 'preview'

  function handleParse() {
    setError('');
    if (!text.trim()) {
      setError('الصق نص الفاتورة أولاً.');
      return;
    }
    const result = parseWhatsAppInvoice(text);
    if (result.items.length === 0) {
      setError('مش قادر أقرأ أي منتجات من النص ده. تأكد إنه نسخ بالفورمات الصح من زرار "Copy for WhatsApp".');
      return;
    }
    setPreview(result);
    setStep('preview');
  }

  function handleConfirm() {
    onImport(preview);
    onClose();
  }

  const formatP = (n) =>
    (n ?? 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  return (
    <div
      className="modal-overlay"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel fade-in" style={{ padding: '24px', maxWidth: '560px', width: '100%' }}>
        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
              📋 Import Invoice
            </h2>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              الصق نص الفاتورة القديمة (من زرار Copy for WhatsApp)
            </div>
          </div>
          <button
            id="btn-close-import"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '22px', lineHeight: 1, flexShrink: 0 }}
          >×</button>
        </div>

        {/* ── Step 1: Paste ── */}
        {step === 'paste' && (
          <>
            <textarea
              id="import-text-area"
              value={text}
              onChange={e => { setText(e.target.value); setError(''); }}
              placeholder={`الصق النص هنا، مثال:\n*Diy Lab - Your Order Details*\n*Invoice ID:* #DL-XXXX\n*Date:* 30 October 2026\n───────────────────────\n1. *ARDUINO NANO DRIVER CH340G*\n   └ Qty: 2 × EGP 150\n   └ Total: *EGP 300*\n...`}
              style={{
                width: '100%',
                minHeight: '220px',
                background: 'rgba(0,0,0,0.3)',
                border: `1px solid ${error ? 'rgba(255,71,87,0.5)' : 'var(--border-color)'}`,
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                padding: '14px',
                lineHeight: 1.6,
                resize: 'vertical',
                fontFamily: 'JetBrains Mono, monospace',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(0,229,255,0.4)'; }}
              onBlur={e => { e.target.style.borderColor = error ? 'rgba(255,71,87,0.5)' : 'var(--border-color)'; }}
            />

            {error && (
              <div style={{
                marginTop: '10px', padding: '10px 14px',
                background: 'rgba(255,71,87,0.08)', border: '1px solid rgba(255,71,87,0.2)',
                borderRadius: '8px', color: 'var(--danger)', fontSize: '0.8rem',
              }}>
                ⚠ {error}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button
                id="btn-parse-invoice"
                onClick={handleParse}
                disabled={!text.trim()}
                className="btn-cyan"
                style={{
                  flex: 1, padding: '12px 16px', fontWeight: 700, fontSize: '0.9rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  opacity: !text.trim() ? 0.4 : 1, cursor: !text.trim() ? 'not-allowed' : 'pointer',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
                قراءة الفاتورة
              </button>
              <button onClick={onClose} className="btn-outline" style={{ padding: '12px 18px', fontSize: '0.9rem' }}>
                إلغاء
              </button>
            </div>
          </>
        )}

        {/* ── Step 2: Preview & Confirm ── */}
        {step === 'preview' && preview && (
          <>
            {/* Meta info */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px',
              background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)',
              borderRadius: '10px', padding: '14px',
            }}>
              {[
                ['Invoice ID', preview.invoiceId || '—'],
                ['Date', preview.date || '—'],
                ['Customer', preview.customerName || 'Walk-in'],
                ['Shipping', preview.shipping === 'upper' ? 'Upper Egypt (100)' : 'Standard (80)'],
                ['Discount', preview.discount > 0 ? `${formatP(preview.discount)} EGP` : '—'],
                ['Items', `${preview.items.length} منتج`],
              ].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '2px' }}>{label}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Items preview */}
            <div style={{ maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
              {preview.items.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'var(--bg-secondary)', borderRadius: '8px', padding: '8px 12px',
                  fontSize: '0.8rem',
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', marginRight: '6px', fontFamily: 'JetBrains Mono' }}>
                      {idx + 1}.
                    </span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>× {item.quantity}</span>
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    {formatP(item.price)} EGP
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                id="btn-confirm-import"
                onClick={handleConfirm}
                className="btn-cyan"
                style={{
                  flex: 1, padding: '12px 16px', fontWeight: 700, fontSize: '0.9rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                تحميل وتعديل الفاتورة
              </button>
              <button
                onClick={() => { setStep('paste'); setPreview(null); }}
                className="btn-outline"
                style={{ padding: '12px 16px', fontSize: '0.85rem' }}
              >
                ← رجوع
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
