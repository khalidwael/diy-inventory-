import React, { useState } from 'react';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch';
import InvoiceTable from './components/InvoiceTable';
import InvoiceSummary from './components/InvoiceSummary';
import SettingsModal from './components/SettingsModal';
import OrderHistory from './components/OrderHistory';
import { useInvoice } from './hooks/useInvoice';

export default function App() {
  const invoice = useInvoice();
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <Header
        invoiceId={invoice.invoiceId}
        date={invoice.date}
        onSettingsOpen={() => setShowSettings(true)}
        onHistoryOpen={() => setShowHistory(true)}
      />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 16px 80px' }}>
        {/* Page Title */}
        <div style={{ marginBottom: '24px', paddingTop: '8px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
            New Invoice
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Add products, set shipping, and export or save your invoice.
          </p>
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
      {showHistory && <OrderHistory onClose={() => setShowHistory(false)} />}

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
