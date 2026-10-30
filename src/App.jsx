import React, { useState } from 'react';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import InvoiceTable from './components/InvoiceTable';
import InvoiceSummary from './components/InvoiceSummary';
import SettingsModal from './components/SettingsModal';
import OrderHistory from './components/OrderHistory';
import ImportInvoiceModal from './components/ImportInvoiceModal';
import { useInvoice } from './hooks/useInvoice';

export default function App() {
  const invoice = useInvoice();
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showImport, setShowImport] = useState(false);

  function handleLoadOrder(order) {
    invoice.loadOrder(order);
    setShowHistory(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleImport(parsed) {
    invoice.importOrder(parsed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isEditing = !!invoice.editingRowId;

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <Header
        invoiceId={invoice.invoiceId}
        date={invoice.date}
        onSettingsOpen={() => setShowSettings(true)}
        onHistoryOpen={() => setShowHistory(true)}
        onImportOpen={() => setShowImport(true)}
        isEditing={isEditing}
      />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 16px 80px' }}>
        {/* Page Title */}
        <div style={{ marginBottom: '24px', paddingTop: '8px' }}>
          {isEditing ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Editing Invoice
                </h1>
                <span style={{
                  background: 'linear-gradient(135deg, rgba(255,193,7,0.15), rgba(255,152,0,0.15))',
                  border: '1px solid rgba(255,193,7,0.4)',
                  color: '#ffc107',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  ✏ Edit Mode
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                You&apos;re editing <strong style={{ color: 'var(--accent-cyan)' }}>{invoice.invoiceId}</strong>.
                Add or remove products, then click <strong>Update Order</strong> to save changes.
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                New Invoice
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Add products, set shipping, and export or save your invoice.{' '}
                <button
                  onClick={() => setShowImport(true)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600,
                    textDecoration: 'underline', padding: 0,
                  }}
                >
                  أو استورد فاتورة قديمة →
                </button>
              </p>
            </>
          )}
        </div>

        {/* Main Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="main-grid">
          {/* Left: Product Entry + Items */}
          <div className="main-left">
            <ProductSearch onAddItem={invoice.addItem} />
            <InvoiceTable
              items={invoice.items}
              onRemove={invoice.removeItem}
              onUpdateQuantity={invoice.updateQuantity}
            />
          </div>

          {/* Right: Summary */}
          <div className="main-right">
            <InvoiceSummary invoice={invoice} onReset={invoice.reset} />
          </div>
        </div>
      </main>

      {/* Modals */}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
      {showHistory && (
        <OrderHistory
          onClose={() => setShowHistory(false)}
          onLoadOrder={handleLoadOrder}
        />
      )}
      {showImport && (
        <ImportInvoiceModal
          onClose={() => setShowImport(false)}
          onImport={handleImport}
        />
      )}

      <style>{`
        @media (min-width: 900px) {
          .main-grid {
            grid-template-columns: 1fr 360px !important;
          }
        }
        @media (min-width: 1100px) {
          .main-grid {
            grid-template-columns: 1fr 400px !important;
          }
        }
      `}</style>
    </div>
  );
}
