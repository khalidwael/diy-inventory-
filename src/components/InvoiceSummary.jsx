import React, { useState } from 'react';
import { saveOrder, updateOrder } from '../lib/supabase';

function formatPrice(n) {
  return n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function buildWhatsAppMessage(invoice) {
  const { invoiceId, date, items, subtotal, shippingLabel, discountAmount, grandTotal, customerName } = invoice;
  let msg = `*Diy Lab - Your Order Details*\n`;
  msg += `*Invoice ID:* ${invoiceId}\n`;
  msg += `*Date:* ${date}\n`;
  if (customerName) {
    msg += `*Customer:* ${customerName}\n`;
  }
  msg += `───────────────────────\n`;
  items.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}*\n`;
    msg += `   └ Qty: ${item.quantity} × EGP ${formatPrice(item.price)}\n`;
    msg += `   └ Total: *EGP ${formatPrice(item.price * item.quantity)}*\n`;
    msg += `───────────────────────\n`;
  });
  msg += `Subtotal: ${formatPrice(subtotal)} EGP\n`;
  msg += `Shipping: ${shippingLabel}\n`;
  if (discountAmount > 0) {
    msg += `Discount: -${formatPrice(discountAmount)} EGP\n`;
  }
  msg += `\n*Grand Total: ${formatPrice(grandTotal)} EGP*\n\n`;
  msg += `Thank you for choosing Diy Lab! ✨`;
  return msg;
}

export default function InvoiceSummary({ invoice, onReset }) {
  const {
    shipping, setShipping,
    discount, setDiscount,
    customerName, setCustomerName,
    subtotal, shippingCost, discountAmount, grandTotal, shippingLabel,
    invoiceId, date, items,
    editingRowId,
  } = invoice;

  const isEditing = !!editingRowId;

  const [saveStatus, setSaveStatus] = useState('idle'); // idle | loading | success | error
  const [saveError, setSaveError] = useState('');
  const [copyStatus, setCopyStatus] = useState('idle');
  const [updateStatus, setUpdateStatus] = useState('idle'); // idle | loading | success | error
  const [updateError, setUpdateError] = useState('');

  async function handleFinalize() {
    if (items.length === 0) return;
    setSaveStatus('loading');
    setSaveError('');
    try {
      await saveOrder({ invoiceId, customerName, date, items, subtotal, shippingCost, shippingLabel, discountAmount, grandTotal });
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (err) {
      setSaveError(err.message || 'Failed to save');
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 5000);
    }
  }

  async function handleUpdate() {
    if (items.length === 0) return;
    setUpdateStatus('loading');
    setUpdateError('');
    try {
      await updateOrder(editingRowId, { invoiceId, customerName, date, items, subtotal, shippingCost, shippingLabel, discountAmount, grandTotal });
      setUpdateStatus('success');
      setTimeout(() => setUpdateStatus('idle'), 3000);
    } catch (err) {
      setUpdateError(err.message || 'Failed to update');
      setUpdateStatus('error');
      setTimeout(() => setUpdateStatus('idle'), 5000);
    }
  }

  async function handleCopy() {
    const msg = buildWhatsAppMessage({ invoiceId, customerName, date, items, subtotal, shippingCost, shippingLabel, discountAmount, grandTotal });
    try {
      await navigator.clipboard.writeText(msg);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = msg;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  }

  const isEmpty = items.length === 0;

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <h2 style={{
        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
        Invoice Summary
      </h2>

      {/* Customer Name */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
          Customer Name
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="customer-name-input"
            type="text"
            className="input-dark"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            placeholder="e.g. Ahmed Ali (Walk-in if empty)"
            style={{ width: '100%', padding: '10px 14px', fontSize: '0.9rem' }}
          />
        </div>
      </div>

      {/* Shipping */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>
          Shipping Method
        </div>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <label
            className={`radio-option ${shipping === 'standard' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="radio"
              name="shipping"
              value="standard"
              checked={shipping === 'standard'}
              onChange={() => setShipping('standard')}
              style={{ display: 'none' }}
              id="radio-standard"
            />
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${shipping === 'standard' ? 'var(--accent-cyan)' : 'var(--text-muted)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {shipping === 'standard' && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Standard Shipping</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Cairo & Delta</div>
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: shipping === 'standard' ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
              80 EGP
            </span>
          </label>

          <label
            className={`radio-option ${shipping === 'upper' ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="radio"
              name="shipping"
              value="upper"
              checked={shipping === 'upper'}
              onChange={() => setShipping('upper')}
              style={{ display: 'none' }}
              id="radio-upper"
            />
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${shipping === 'upper' ? 'var(--accent-cyan)' : 'var(--text-muted)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {shipping === 'upper' && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Upper Egypt</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Upper Egypt regions</div>
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: shipping === 'upper' ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
              100 EGP
            </span>
          </label>
        </div>
      </div>

      {/* Discount */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
          Discount Amount (EGP)
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="discount-input"
            type="number"
            className="input-dark"
            min="0"
            value={discount}
            onChange={e => setDiscount(e.target.value)}
            placeholder="0"
            style={{ width: '100%', padding: '10px 50px 10px 14px', fontSize: '0.9rem' }}
          />
          <span style={{
            position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
            color: 'var(--text-muted)', fontSize: '0.8rem', pointerEvents: 'none'
          }}>EGP</span>
        </div>
      </div>

      <div className="glow-divider" />

      {/* Totals */}
      <div style={{ marginBottom: '16px' }}>
        <div className="stat-row">
          <span className="stat-label">Subtotal</span>
          <span className="stat-value">{formatPrice(subtotal)} EGP</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Shipping</span>
          <span className="stat-value">+ {formatPrice(shippingCost)} EGP</span>
        </div>
        {discountAmount > 0 && (
          <div className="stat-row">
            <span className="stat-label" style={{ color: 'var(--success)' }}>Discount</span>
            <span className="stat-value" style={{ color: 'var(--success)' }}>- {formatPrice(discountAmount)} EGP</span>
          </div>
        )}

        {/* Grand Total */}
        <div className="total-highlight" style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Grand Total</span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--accent-cyan)',
              textShadow: '0 0 20px rgba(0,229,255,0.5)',
            }}>
              {formatPrice(grandTotal)} <span style={{ fontSize: '0.9rem' }}>EGP</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Copy for WhatsApp */}
        <button
          id="btn-copy-whatsapp"
          onClick={handleCopy}
          className={copyStatus === 'success' ? 'btn-cyan' : 'btn-outline'}
          disabled={isEmpty}
          style={{
            padding: '13px 16px',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontWeight: 700,
            width: '100%',
            opacity: isEmpty ? 0.4 : 1,
            cursor: isEmpty ? 'not-allowed' : 'pointer',
          }}
        >
          {copyStatus === 'success' ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              Copy for WhatsApp / Messenger
            </>
          )}
        </button>

        {/* Finalize & Save */}
        <button
          id="btn-finalize"
          onClick={handleFinalize}
          className="btn-cyan"
          disabled={isEmpty || saveStatus === 'loading'}
          style={{
            padding: '13px 16px',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontWeight: 700,
            width: '100%',
            opacity: isEmpty ? 0.4 : 1,
            cursor: isEmpty ? 'not-allowed' : 'pointer',
          }}
        >
          {saveStatus === 'loading' ? (
            <>
              <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', fontSize: '14px' }}>⟳</span>
              Saving...
            </>
          ) : saveStatus === 'success' ? (
            <>✓ Saved to Database!</>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                <polyline points="17 21 17 13 7 13 7 21"/>
                <polyline points="7 3 7 8 15 8"/>
              </svg>
              Finalize & Save to Database
            </>
          )}
        </button>

        {saveStatus === 'error' && (
          <div style={{ fontSize: '0.78rem', color: 'var(--danger)', padding: '8px 12px', background: 'rgba(255,71,87,0.08)', borderRadius: '6px', border: '1px solid rgba(255,71,87,0.2)' }}>
            ⚠ {saveError}
          </div>
        )}

        {/* Update Order (Edit Mode) */}
        {isEditing && (
          <>
            <button
              id="btn-update-order"
              onClick={handleUpdate}
              disabled={items.length === 0 || updateStatus === 'loading'}
              style={{
                padding: '13px 16px',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                width: '100%',
                background: updateStatus === 'success'
                  ? 'linear-gradient(135deg, #00c851, #007e33)'
                  : 'linear-gradient(135deg, #ffc107, #ff8f00)',
                border: 'none',
                borderRadius: '10px',
                color: '#000',
                cursor: items.length === 0 ? 'not-allowed' : 'pointer',
                opacity: items.length === 0 ? 0.4 : 1,
                boxShadow: updateStatus === 'success' ? '0 0 20px rgba(0,200,81,0.3)' : '0 0 20px rgba(255,193,7,0.25)',
                transition: 'all 0.2s',
              }}
            >
              {updateStatus === 'loading' ? (
                <><span style={{ display: 'inline-block', animation: 'spin 1s linear infinite', fontSize: '14px' }}>⟳</span>Updating...</>
              ) : updateStatus === 'success' ? (
                <>✓ Order Updated!</>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                    <polyline points="17 21 17 13 7 13 7 21"/>
                    <polyline points="7 3 7 8 15 8"/>
                  </svg>
                  Update &amp; Save Order
                </>
              )}
            </button>
            {updateStatus === 'error' && (
              <div style={{ fontSize: '0.78rem', color: 'var(--danger)', padding: '8px 12px', background: 'rgba(255,71,87,0.08)', borderRadius: '6px', border: '1px solid rgba(255,71,87,0.2)' }}>
                ⚠ {updateError}
              </div>
            )}
          </>
        )}

        {/* Start New Invoice */}
        <button
          id="btn-new-invoice"
          onClick={onReset}
          className="btn-danger"
          style={{ padding: '11px 16px', fontSize: '0.85rem', fontWeight: 600, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
          </svg>
          {isEditing ? 'Discard Edits & New Invoice' : 'Start New Invoice'}
        </button>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
