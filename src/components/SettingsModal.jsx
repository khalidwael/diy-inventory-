import React, { useState } from 'react';
import { saveCredentials, getStoredCredentials } from '../lib/supabase';

export default function SettingsModal({ onClose }) {
  const stored = getStoredCredentials();
  const [url, setUrl] = useState(stored.url);
  const [key, setKey] = useState(stored.key);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    saveCredentials(url.trim(), key.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel fade-in" style={{ padding: '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Settings</h2>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>Configure Supabase database connection</div>
          </div>
          <button
            id="btn-close-settings"
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '22px', lineHeight: 1 }}
          >×</button>
        </div>

        {/* Info Box */}
        <div style={{
          padding: '12px 16px', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)',
          borderRadius: '10px', marginBottom: '24px', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6,
        }}>
          <strong style={{ color: 'var(--accent-cyan)' }}>Supabase Setup:</strong> Go to{' '}
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>supabase.com</a>,
          create a free project, go to <em>Settings → API</em>, copy the <strong>Project URL</strong> and <strong>anon/public key</strong>.
          <br /><br />
          Then create a table named <strong style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>orders</strong> with columns:
          <code style={{ display: 'block', marginTop: '6px', padding: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '0.75rem', lineHeight: 1.8 }}>
            invoice_id (text), date (text), items (jsonb),<br/>
            subtotal (numeric), shipping_cost (numeric),<br/>
            shipping_label (text), discount (numeric),<br/>
            grand_total (numeric), created_at (timestamptz)
          </code>
        </div>

        {/* Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              Supabase Project URL
            </label>
            <input
              id="settings-supabase-url"
              type="url"
              className="input-dark"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://xxxxxxxxxxxx.supabase.co"
              style={{ width: '100%', padding: '10px 14px', fontSize: '0.875rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              Supabase Anon/Public Key
            </label>
            <input
              id="settings-supabase-key"
              type="password"
              className="input-dark"
              value={key}
              onChange={e => setKey(e.target.value)}
              placeholder="eyJhbGciOi..."
              style={{ width: '100%', padding: '10px 14px', fontSize: '0.875rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            id="btn-save-settings"
            onClick={handleSave}
            className="btn-cyan"
            style={{ flex: 1, padding: '12px', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {saved ? (
              <>✓ Saved!</>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                  <polyline points="17 21 17 13 7 13 7 21"/>
                </svg>
                Save Credentials
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="btn-outline"
            style={{ padding: '12px 20px', fontSize: '0.9rem' }}
          >Cancel</button>
        </div>
      </div>
    </div>
  );
}
