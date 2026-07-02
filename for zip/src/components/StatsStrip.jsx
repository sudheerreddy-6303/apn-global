const stats = [
  { icon: 'bi-people-fill', num: '50+', label: 'Initiatives', bg: '#eaf2ff', color: '#2f6fed' },
  { icon: 'bi-person-check-fill', num: '5000+', label: 'Beneficiaries', bg: '#eafaf0', color: '#26a65b' },
  { icon: 'bi-hand-thumbs-up-fill', num: '25+', label: 'Partners', bg: '#fff6e6', color: '#e0a400' },
  { icon: 'bi-calendar-event-fill', num: '100+', label: 'Events & Workshops', bg: '#f1eeff', color: '#7a5cf0' },
  { icon: 'bi-award-fill', num: '10+', label: 'Years of Impact', bg: '#fdeef2', color: '#e0567c' },
]

function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="row g-4 justify-content-between">
          {stats.map((s) => (
            <div className="col-6 col-md-4 col-lg-2" key={s.label}>
              <div className="stat-item">
                <div className="stat-icon" style={{ background: s.bg, color: s.color }}>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <div>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsStrip
