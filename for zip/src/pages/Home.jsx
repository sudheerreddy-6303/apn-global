import { Link } from 'react-router-dom'
import StatsStrip from '../components/StatsStrip'

const aboutFeatures = [
  { icon: 'bi-book-half', title: 'Education & Skill Development', text: 'Promoting quality education and practical skills for a better future.', bg: '#eaf2ff', color: '#2f6fed' },
  { icon: 'bi-heart-pulse', title: 'Healthcare Awareness', text: 'Improving community health through awareness, prevention and care.', bg: '#eafaf0', color: '#26a65b' },
  { icon: 'bi-eyedropper', title: 'Research & Innovation', text: 'Encouraging research, innovation and knowledge sharing for progress.', bg: '#fff6e6', color: '#e0a400' },
  { icon: 'bi-person-arms-up', title: 'Women & Youth Empowerment', text: 'Empowering women and youth to become leaders and changemakers.', bg: '#fdeef2', color: '#e0567c' },
  { icon: 'bi-leaf', title: 'Environment Sustainability', text: 'Working towards a greener and more sustainable tomorrow.', bg: '#e8fbf7', color: '#1fae8e' },
  { icon: 'bi-people', title: 'Community Welfare', text: 'Uplifting communities and supporting the underprivileged.', bg: '#f1eeff', color: '#7a5cf0' },
]

const focusAreas = [
  { title: 'Quality Education', text: 'Supporting schools, colleges and learners for academic excellence.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhvyfjbufDU850u3nsxJvWPNzbs9LxPWXHtrQdgrbDQ&s=10', icon: 'bi-mortarboard-fill', color: '#2f6fed' },
  { title: 'Skill Development', text: 'Building employable skills and promoting vocational training.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=60', icon: 'bi-tools', color: '#e0a400' },
  { title: 'Healthcare Awareness', text: 'Organizing health camps and promoting wellness in communities.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=60', icon: 'bi-heart-pulse-fill', color: '#e0567c' },
  { title: 'Environment Sustainability', text: 'Encouraging eco-friendly practices and environmental conservation.', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=60', icon: 'bi-tree-fill', color: '#1fae8e' },
  { title: 'Youth & Women Empowerment', text: 'Creating opportunities for leadership, growth and independence.', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=500&q=60', icon: 'bi-person-arms-up', color: '#7a5cf0' },
]

const newsItems = [
  { title: 'APN GLOBAL launches rural education initiative', date: 'May 10, 2026', img: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=100&q=60' },
  { title: 'Health awareness camp successfully conducted', date: 'April 28, 2026', img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=100&q=60' },
  { title: 'Youth leadership workshop empowers future leaders', date: 'April 15, 2026', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=100&q=60' },
]

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className="eyebrow mb-2">APN GLOBAL FOUNDATION</div>
              <h1 className="hero-title mb-3">
                Empowering Youth.<br />
                Building <span className="text-gold">Tomorrow.</span>
              </h1>
              <p className="text-muted mb-4" style={{ maxWidth: 460 }}>
                Creating opportunities through education, innovation, skill
                development and community empowerment.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/initiatives" className="btn-navy">
                  Explore Our Initiatives <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/about" className="btn-outline-navy">
                  Learn More About Us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=70"
                  alt="Youth empowered through education"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* ABOUT */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <div className="eyebrow mb-2">ABOUT US</div>
              <h2 className="section-title mb-3" style={{ fontSize: '2rem' }}>
                About APN GLOBAL <span className="text-gold">Foundation</span>
              </h2>
              <p className="text-muted">
                APN GLOBAL Foundation is a non-profit organization dedicated to
                fostering educational excellence, social welfare, research,
                innovation, skill development, and sustainable community
                empowerment.
              </p>
              <p className="text-muted">
                We work to bridge the gap between learning, opportunity and
                societal needs while promoting equal opportunities for all.
              </p>
              <Link to="/about" className="btn-navy mt-2">
                Know More About Us <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row g-4">
                {aboutFeatures.map((f) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={f.title}>
                    <div className="feature-card" style={{ background: f.bg }}>
                      <div className="feature-icon" style={{ background: '#fff', color: f.color }}>
                        <i className={`bi ${f.icon}`}></i>
                      </div>
                      <h5>{f.title}</h5>
                      <p>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            <h2 className="section-title text-center w-100" style={{ fontSize: '1.8rem' }}>
              OUR <span className="text-gold">FOCUS AREAS</span>
            </h2>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="scroll-arrow d-none d-md-inline-flex flex-shrink-0" aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="row g-4 flex-grow-1">
              {focusAreas.map((f) => (
                <div className="col-12 col-sm-6 col-lg-3" key={f.title}>
                  <div className="focus-card">
                    <img src={f.img} alt={f.title} />
                    <div className="focus-badge" style={{ color: f.color }}>
                      <i className={`bi ${f.icon}`}></i>
                    </div>
                    <div className="focus-body">
                      <h6>{f.title}</h6>
                      <p>{f.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-arrow d-none d-md-inline-flex flex-shrink-0" aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="pt-4">
        <StatsStrip />
      </div>

      {/* EVENT / NEWS / VISION */}
      <section className="section-pad pt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="info-card">
                <h6><i className="bi bi-calendar-event me-2 text-warning"></i>Upcoming Event</h6>
                <div className="d-flex gap-3 mt-3">
                  <div className="date-box">
                    <div className="day">15</div>
                    <div className="mon">Jun</div>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ textTransform: 'none' }}>
                      National Education &amp; Skill Development Seminar
                    </h6>
                    <small className="text-muted">
                      <i className="bi bi-geo-alt me-1"></i>Greater Noida, Uttar Pradesh
                    </small>
                  </div>
                </div>
                <Link to="/events" className="btn-outline-navy mt-4 w-100 justify-content-center">
                  View All Events <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="info-card">
                <h6><i className="bi bi-newspaper me-2 text-warning"></i>Latest News</h6>
                <div className="d-flex flex-column gap-3 mt-3">
                  {newsItems.map((n) => (
                    <div className="d-flex gap-3 news-item" key={n.title}>
                      <img src={n.img} alt={n.title} />
                      <div>
                        <h6>{n.title}</h6>
                        <small>{n.date}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/events" className="btn-outline-navy mt-4 w-100 justify-content-center">
                  View All News <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="info-card">
                <h6 className="mb-3"><i className="bi bi-eye me-2 text-warning"></i>Our Vision</h6>
                <p className="text-muted small">
                  To be a globally recognized organization that empowers
                  individuals, strengthens communities and creates lasting
                  social impact through education, research, innovation and
                  humanitarian service.
                </p>
                <h6 className="mb-3 mt-4"><i className="bi bi-bullseye me-2 text-warning"></i>Our Mission</h6>
                <p className="text-muted small mb-0">
                  To promote education, research, healthcare awareness,
                  skill development, environmental sustainability and social
                  welfare for inclusive and sustainable nation building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
