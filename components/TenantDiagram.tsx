/** How Doc CRM keeps each shop's data separate. */
export function TenantDiagram() {
  return (
    <div className="arch" role="img" aria-label="Flutter app reads live data through a provider from 31 Firestore collections under one tenant path, guarded by security rules">
      <svg viewBox="0 0 640 150" fontFamily="Inter, sans-serif" fontSize="12">
        <defs>
          <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0L10 5L0 10z" fill="var(--muted)" />
          </marker>
        </defs>
        <rect x="8" y="40" width="150" height="70" rx="10" fill="var(--flutter-soft)" stroke="var(--flutter)" />
        <text x="83" y="70" textAnchor="middle" fontWeight="600" fill="var(--ink)">Flutter app</text>
        <text x="83" y="88" textAnchor="middle" fill="var(--muted)" fontSize="11">Web · Windows · Android</text>
        <rect x="230" y="40" width="150" height="70" rx="10" fill="var(--surface)" stroke="var(--line)" />
        <text x="305" y="70" textAnchor="middle" fontWeight="600" fill="var(--ink)">DataProvider</text>
        <text x="305" y="88" textAnchor="middle" fill="var(--muted)" fontSize="11">live listeners, writes</text>
        <rect x="452" y="20" width="180" height="110" rx="10" fill="var(--saas-soft)" stroke="var(--saas)" />
        <text x="542" y="48" textAnchor="middle" fontWeight="600" fill="var(--ink)">Cloud Firestore</text>
        <text x="542" y="70" textAnchor="middle" fill="var(--muted)" fontSize="11">tenants/{"{shop}"}/…</text>
        <text x="542" y="88" textAnchor="middle" fill="var(--muted)" fontSize="11">31 collections</text>
        <text x="542" y="112" textAnchor="middle" fill="var(--saas)" fontSize="11" fontWeight="600">rules: one tenant per user</text>
        <path d="M158 75H226" stroke="var(--muted)" markerEnd="url(#ar)" />
        <path d="M380 75H448" stroke="var(--muted)" markerEnd="url(#ar)" />
      </svg>
    </div>
  );
}
