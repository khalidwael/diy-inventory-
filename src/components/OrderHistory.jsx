import React, { useState, useEffect } from 'react';
import { getOrders, isConfigured } from '../lib/supabase';

function formatPrice(n) {
  return n?.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) ?? '0';
}

export default function OrderHistory({ onClose }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!isConfigured()) {
      setError('Supabase is not configured. Open Settings to add your credentials.');
      setLoading(false);
      return;
    }
    async function load() {
      try {
        const data = await getOrders();
        setOrders(data || []);
      } catch (err) {
        setError(err.message || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel fade-in" style={{ padding: '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Order History</h2>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Last 50 finalized orders</div>
          </div>
          <button
            id="btn-close-history"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '22px', lineHeight: 1 }}
          >×</button>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px', animation: 'spin 1.2s linear infinite', display: 'inline-block' }}>⟳</div>
            <div>Loading orders...</div>
          </div>
        )}

        {error && (
          <div style={{
            padding: '16px', background: 'rgba(255,71,87,0.08)', border: '1px solid rgba(255,71,87,0.2)',
            borderRadius: '10px', color: 'var(--danger)', fontSize: '0.875rem',
          }}>
            ⚠ {error}
          </div>
        )}

        {!loading && !error && orders.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px', opacity: 0.4 }}>📋</div>
            <div>No finalized orders yet.</div>
          </div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '60vh', overflowY: 'auto' }}>
            {orders.map((order) => (
              <div
                key={order.id}
                style={{
                  background: 'var(--bg-secondary)',
                  border: `1px solid ${expanded === order.id ? 'rgba(0,229,255,0.3)' : 'var(--border-color)'}`,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Order Header */}
                <button
                  onClick={() => setExpanded(expanded === order.id ? null : order.id)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    textAlign: 'left', gap: '8px',
                  }}
                >
                  <div>
                    <span className="neon-badge" style={{ marginRight: '8px' }}>{order.invoice_id}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', marginRight: '8px', fontWeight: 600 }}>{order.customer_name || 'Walk-in'}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{order.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      {formatPrice(order.grand_total)} EGP
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px', transition: 'transform 0.2s', transform: expanded === order.id ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span>
                  </div>
                </button>

                {/* Expanded Details */}
                {expanded === order.id && (
                  <div className="fade-in" style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ paddingTop: '12px' }}>
                      {(order.items || []).map((item, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: '0.82rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>{item.name} ({formatPrice(item.price)} EGP) × {item.quantity}</span>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>
                            {formatPrice(item.price * item.quantity)} EGP
                          </span>
                        </div>
                      ))}
                      <div className="glow-divider" style={{ margin: '10px 0 6px' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                        <span style={{ color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono' }}>{order.shipping_label}</span>
                      </div>
                      {order.discount > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Discount</span>
                          <span style={{ color: 'var(--success)', fontFamily: 'JetBrains Mono' }}>-{formatPrice(order.discount)} EGP</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
