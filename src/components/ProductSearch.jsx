import React, { useState, useRef, useEffect } from 'react';
import { searchProducts } from '../data/products';

export default function ProductSearch({ onAddItem }) {
  // ── Tab state ──────────────────────────────────────────────
  const [tab, setTab] = useState('search'); // 'search' | 'custom'

  // ── Search tab state ───────────────────────────────────────
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // ── Custom tab state ───────────────────────────────────────
  const [customName, setCustomName] = useState('');
  const [customPrice, setCustomPrice] = useState('');
  const [customQty, setCustomQty] = useState(1);

  useEffect(() => {
    setResults(searchProducts(query));
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // ── Search handlers ────────────────────────────────────────
  function handleSelect(product) {
    setSelected(product);
    setQuery(product.name);
    setIsOpen(false);
    setQuantity(1);
  }

  function handleAdd() {
    if (!selected) return;
    onAddItem(selected, Math.max(1, parseInt(quantity) || 1));
    setSelected(null);
    setQuery('');
    setQuantity(1);
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && selected) handleAdd();
    if (e.key === 'Escape') setIsOpen(false);
  }

  // ── Custom item handler ────────────────────────────────────
  function handleAddCustom() {
    const name = customName.trim();
    const price = parseFloat(customPrice);
    const qty = Math.max(1, parseInt(customQty) || 1);
    if (!name || isNaN(price) || price < 0) return;

    const customProduct = {
      id: `custom-${Date.now()}`,
      name,
      price,
      category: 'Custom',
    };
    onAddItem(customProduct, qty);
    setCustomName('');
    setCustomPrice('');
    setCustomQty(1);
  }

  function handleCustomKeyDown(e) {
    if (e.key === 'Enter') handleAddCustom();
  }

  const customValid = customName.trim() && customPrice !== '' && !isNaN(parseFloat(customPrice));

  const displayResults = results.slice(0, 50);
  const grouped = displayResults.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div className="glass-card" style={{ padding: '20px', marginBottom: '16px', overflow: 'visible', zIndex: 10 }}>

      {/* ── Header ── */}
      <h2 style={{
        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--text-muted)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add Product
      </h2>

      {/* ── Tabs ── */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
        <button
          onClick={() => setTab('search')}
          style={{
            flex: 1, padding: '8px 12px', borderRadius: '8px', border: 'none',
            fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
            background: tab === 'search' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
            color: tab === 'search' ? '#000' : 'var(--text-secondary)',
            boxShadow: tab === 'search' ? '0 0 12px rgba(0,229,255,0.3)' : 'none',
          }}
        >
          🔍 Search Products
        </button>
        <button
          onClick={() => setTab('custom')}
          style={{
            flex: 1, padding: '8px 12px', borderRadius: '8px', border: 'none',
            fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
            background: tab === 'custom' ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
            color: tab === 'custom' ? '#000' : 'var(--text-secondary)',
            boxShadow: tab === 'custom' ? '0 0 12px rgba(0,229,255,0.3)' : 'none',
          }}
        >
          ✏️ Custom Item
        </button>
      </div>

      {/* ══════════════════════════════════════════
          TAB: SEARCH
      ══════════════════════════════════════════ */}
      {tab === 'search' && (
        <>
          {/* Search Dropdown */}
          <div style={{ position: 'relative', marginBottom: '12px' }}>
            <div style={{ position: 'relative' }}>
              <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                ref={inputRef}
                id="product-search-input"
                type="text"
                className="input-dark"
                placeholder="Search products..."
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelected(null);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onKeyDown={handleKeyDown}
                style={{ width: '100%', padding: '10px 12px 10px 38px', fontSize: '0.875rem' }}
                autoComplete="off"
              />
              {query && (
                <button
                  onClick={() => { setQuery(''); setSelected(null); inputRef.current?.focus(); }}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                    fontSize: '18px', lineHeight: 1,
                  }}
                >×</button>
              )}
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div
                ref={dropdownRef}
                className="dropdown-menu slide-down"
                style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 200 }}
              >
                {Object.keys(grouped).length === 0 ? (
                  <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    No products found
                  </div>
                ) : (
                  Object.entries(grouped).map(([cat, prods]) => (
                    <div key={cat}>
                      <div style={{
                        padding: '6px 14px 4px',
                        fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'var(--accent-cyan)',
                        borderBottom: '1px solid var(--border-color)',
                      }}>{cat}</div>
                      {prods.map(p => (
                        <div
                          key={p.id}
                          className="dropdown-item"
                          onClick={() => handleSelect(p)}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        >
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{p.name}</span>
                          <span style={{
                            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)',
                            fontFamily: 'JetBrains Mono, monospace', flexShrink: 0, marginLeft: '12px',
                          }}>
                            {p.price === 0 ? 'FREE' : `${p.price.toLocaleString()} EGP`}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Selected product preview */}
          {selected && (
            <div className="fade-in" style={{
              marginBottom: '12px', padding: '10px 14px',
              background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)',
              borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: '8px',
            }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{selected.name}</div>
                <span className="category-tag" style={{ marginTop: '4px', display: 'inline-block' }}>{selected.category}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {selected.price.toLocaleString()} EGP × {parseInt(quantity) || 1}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'JetBrains Mono, monospace' }}>
                  = {(selected.price * (parseInt(quantity) || 1)).toLocaleString()} EGP
                </div>
              </div>
            </div>
          )}

          {/* Quantity and Add */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <input
              id="quantity-input"
              type="number"
              className="input-dark"
              min="1"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Qty"
              style={{ width: '80px', padding: '10px 12px', fontSize: '0.875rem', textAlign: 'center' }}
            />
            <button
              id="btn-add-item"
              className="btn-cyan"
              onClick={handleAdd}
              disabled={!selected}
              style={{
                padding: '10px 20px', fontSize: '0.875rem',
                display: 'flex', alignItems: 'center', gap: '6px',
                opacity: selected ? 1 : 0.4,
                cursor: selected ? 'pointer' : 'not-allowed',
                flexShrink: 0
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Item
            </button>
          </div>
        </>
      )}

      {/* ══════════════════════════════════════════
          TAB: CUSTOM ITEM
      ══════════════════════════════════════════ */}
      {tab === 'custom' && (
        <div className="fade-in">
          {/* Info hint */}
          <div style={{
            padding: '8px 12px', marginBottom: '14px',
            background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.15)',
            borderRadius: '8px', fontSize: '0.78rem', color: 'var(--text-secondary)',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ fontSize: '1rem' }}>💡</span>
            اكتب اسم المنتج وسعره وعدده وهيتضاف للفاتورة مؤقتاً
          </div>

          {/* Item Name */}
          <div style={{ marginBottom: '10px' }}>
            <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Item Name
            </label>
            <input
              id="custom-item-name"
              type="text"
              className="input-dark"
              placeholder="e.g. Special Order Battery"
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              onKeyDown={handleCustomKeyDown}
              style={{ width: '100%', padding: '10px 14px', fontSize: '0.9rem' }}
              autoComplete="off"
            />
          </div>

          {/* Price + Qty row */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Price (EGP)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="custom-item-price"
                  type="number"
                  className="input-dark"
                  placeholder="0.00"
                  min="0"
                  step="0.5"
                  value={customPrice}
                  onChange={e => setCustomPrice(e.target.value)}
                  onKeyDown={handleCustomKeyDown}
                  style={{ width: '100%', padding: '10px 46px 10px 14px', fontSize: '0.9rem' }}
                />
                <span style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--text-muted)', fontSize: '0.75rem', pointerEvents: 'none'
                }}>EGP</span>
              </div>
            </div>

            <div style={{ width: '90px' }}>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Qty
              </label>
              <input
                id="custom-item-qty"
                type="number"
                className="input-dark"
                min="1"
                value={customQty}
                onChange={e => setCustomQty(e.target.value)}
                onKeyDown={handleCustomKeyDown}
                placeholder="1"
                style={{ width: '100%', padding: '10px 12px', fontSize: '0.9rem', textAlign: 'center' }}
              />
            </div>
          </div>

          {/* Live preview */}
          {customValid && (
            <div className="fade-in" style={{
              marginBottom: '14px', padding: '10px 14px',
              background: 'rgba(255,165,0,0.06)', border: '1px solid rgba(255,165,0,0.25)',
              borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: '8px',
            }}>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {customName || '—'}
                </div>
                <span style={{
                  display: 'inline-block', marginTop: '4px', padding: '2px 8px',
                  borderRadius: '4px', fontSize: '0.68rem', fontWeight: 700,
                  background: 'rgba(255,165,0,0.15)', color: '#FFA500', letterSpacing: '0.05em',
                }}>CUSTOM</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {parseFloat(customPrice).toLocaleString()} EGP × {parseInt(customQty) || 1}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFA500', fontFamily: 'JetBrains Mono, monospace' }}>
                  = {(parseFloat(customPrice) * (parseInt(customQty) || 1)).toLocaleString()} EGP
                </div>
              </div>
            </div>
          )}

          {/* Add button */}
          <button
            id="btn-add-custom-item"
            onClick={handleAddCustom}
            disabled={!customValid}
            style={{
              width: '100%', padding: '12px 16px',
              borderRadius: '10px', border: 'none',
              fontSize: '0.875rem', fontWeight: 700, cursor: customValid ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 0.2s',
              background: customValid
                ? 'linear-gradient(135deg, #FFA500, #FF8C00)'
                : 'rgba(255,255,255,0.05)',
              color: customValid ? '#000' : 'var(--text-muted)',
              opacity: customValid ? 1 : 0.5,
              boxShadow: customValid ? '0 0 16px rgba(255,165,0,0.3)' : 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Custom Item to Invoice
          </button>
        </div>
      )}
    </div>
  );
}
