import React from 'react';

function formatPrice(n) {
  return n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export default function InvoiceTable({ items, onRemove, onUpdateQuantity }) {
  if (items.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '48px 20px', textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '12px', opacity: 0.3 }}>📦</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No items added yet</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>Search for a product above to get started</div>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ marginBottom: '16px', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '14px 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <path d="M9 7h6M9 12h6M9 17h4"/>
        </svg>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Invoice Items
        </span>
        <span className="neon-badge" style={{ marginLeft: 'auto' }}>{items.length} item{items.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Desktop Table */}
      <div style={{ display: 'block' }} className="desktop-table">
        <table className="invoice-table" style={{ marginTop: '12px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th style={{ textAlign: 'right' }}>Unit Price</th>
              <th style={{ textAlign: 'center' }}>Qty</th>
              <th style={{ textAlign: 'right' }}>Subtotal</th>
              <th style={{ textAlign: 'center' }}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const subtotal = item.price * item.quantity;
              return (
                <tr key={item.id} className="fade-in">
                  <td style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    {idx + 1}
                  </td>
                  <td>
                    <div style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{item.name}</div>
                    <span className="category-tag">{item.category}</span>
                  </td>
                  <td style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                    {formatPrice(item.price)} EGP
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input
                      type="number"
                      className="qty-input"
                      min="1"
                      value={item.quantity}
                      onChange={e => onUpdateQuantity(item.id, e.target.value)}
                      id={`qty-${item.id}`}
                    />
                  </td>
                  <td style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-cyan)', whiteSpace: 'nowrap' }}>
                    {formatPrice(subtotal)} EGP
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className="btn-danger"
                      onClick={() => onRemove(item.id)}
                      id={`remove-${item.id}`}
                      style={{ padding: '5px 10px', fontSize: '0.75rem' }}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (shown via CSS media query) */}
      <div className="mobile-cards" style={{ padding: '12px', display: 'none' }}>
        {items.map((item, idx) => {
          const subtotal = item.price * item.quantity;
          return (
            <div key={item.id} className="item-card fade-in">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ flex: 1, paddingRight: '8px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '2px' }}>#{idx + 1}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>{item.name}</div>
                  <span className="category-tag" style={{ marginTop: '4px', display: 'inline-block' }}>{item.category}</span>
                </div>
                <button
                  className="btn-danger"
                  onClick={() => onRemove(item.id)}
                  id={`mob-remove-${item.id}`}
                  style={{ padding: '4px 10px', fontSize: '0.7rem', flexShrink: 0 }}
                >✕</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{formatPrice(item.price)} × </span>
                  <input
                    type="number"
                    className="qty-input"
                    min="1"
                    value={item.quantity}
                    onChange={e => onUpdateQuantity(item.id, e.target.value)}
                    id={`mob-qty-${item.id}`}
                    style={{ width: '55px' }}
                  />
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                  {formatPrice(subtotal)} EGP
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .desktop-table { display: none !important; }
          .mobile-cards { display: block !important; }
        }
      `}</style>
    </div>
  );
}
