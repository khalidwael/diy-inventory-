import React from 'react';

export default function Header({ invoiceId, date, onSettingsOpen, onHistoryOpen }) {
  return (
    <header style={{
      background: 'linear-gradient(180deg, rgba(0,229,255,0.06) 0%, transparent 100%)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00e5ff, #0096a8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: '900', fontSize: '14px', color: '#000',
              boxShadow: '0 0 20px rgba(0,229,255,0.4)',
              flexShrink: 0,
            }}>DL</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span className="logo-text" style={{ fontSize: '1.1rem' }}>Diy Lab</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 400 }}>
                  Electronics
                </span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1px' }}>
                Invoice Manager
              </div>
            </div>
          </div>

          {/* Invoice Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div className="neon-badge">{invoiceId}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{date}</div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                id="btn-history"
                onClick={onHistoryOpen}
                className="btn-outline"
                title="Order History"
                style={{ padding: '7px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span style={{ display: 'none' }} className="sm-show">History</span>
              </button>

              <button
                id="btn-settings"
                onClick={onSettingsOpen}
                className="btn-outline"
                title="Settings"
                style={{ padding: '7px 12px', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
