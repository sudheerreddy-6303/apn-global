import PageHero from '../components/PageHero'

const upcomingEvents = [
  {
    day: '15', mon: 'Jun',
    title: 'National Education & Skill Development Seminar',
    place: 'Greater Noida, Uttar Pradesh',
    time: '10:00 AM - 4:00 PM',
  },
  {
    day: '02', mon: 'Jul',
    title: 'Free Health Checkup Camp',
    place: 'Community Hall, Sector 16B',
    time: '9:00 AM - 1:00 PM',
  },
  {
    day: '20', mon: 'Jul',
    title: 'Youth Leadership Bootcamp',
    place: 'APN Foundation Campus',
    time: '11:00 AM - 5:00 PM',
  },
]

const newsList = [
  {
    title: 'APN GLOBAL launches rural education initiative',
    date: 'May 10, 2026',
    excerpt: 'A new program bringing digital classrooms and scholarships to rural schools across Uttar Pradesh.',
    img: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=500&q=65',
  },
  {
    title: 'Health awareness camp successfully conducted',
    date: 'April 28, 2026',
    excerpt: 'Over 800 residents received free health screenings and consultations at our latest community camp.',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=500&q=65',
  },
  {
    title: 'Youth leadership workshop empowers future leaders',
    date: 'April 15, 2026',
    excerpt: 'Fifty young changemakers completed our two-day leadership and public-speaking workshop.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=65',
  },
  {
    title: 'Tree plantation drive greens 5 neighborhoods',
    date: 'March 22, 2026',
    excerpt: 'Volunteers and residents came together to plant over 1,000 saplings this Earth Day.',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=65',
  },
]

function Events() {
  return (
    <>
      <PageHero title="Events & News" crumb="Events & News" />

      {/* Upcoming Events */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">MARK YOUR CALENDAR</div>
            <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
              Upcoming <span className="text-gold">Events</span>
            </h2>
          </div>
          <div className="row g-4">
            {upcomingEvents.map((e) => (
              <div className="col-12 col-md-6 col-lg-4" key={e.title}>
                <div className="info-card h-100">
                  <div className="d-flex gap-3">
                    <div className="date-box">
                      <div className="day">{e.day}</div>
                      <div className="mon">{e.mon}</div>
                    </div>
                    <div>
                      <h6 className="mb-2" style={{ textTransform: 'none', color: 'var(--navy)' }}>{e.title}</h6>
                      <small className="text-muted d-block mb-1">
                        <i className="bi bi-geo-alt me-1"></i>{e.place}
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-clock me-1"></i>{e.time}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">STAY UPDATED</div>
            <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
              Latest <span className="text-gold">News</span>
            </h2>
          </div>
          <div className="row g-4">
            {newsList.map((n) => (
              <div className="col-12 col-md-6" key={n.title}>
                <div className="card-clean d-flex flex-column flex-sm-row gap-3">
                  <img
                    src={n.img}
                    alt={n.title}
                    style={{ width: '100%', maxWidth: 160, height: 120, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }}
                  />
                  <div>
                    <small className="text-muted">{n.date}</small>
                    <h6 className="fw-bold mt-1 mb-2" style={{ color: 'var(--navy)' }}>{n.title}</h6>
                    <p className="text-muted small mb-0">{n.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
