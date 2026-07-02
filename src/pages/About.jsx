import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import StatsStrip from '../components/StatsStrip'

const values = [
  { icon: 'bi-lightbulb', title: 'Integrity', text: 'We uphold honesty and transparency in everything we do.' },
  { icon: 'bi-people-fill', title: 'Inclusion', text: 'We believe opportunity should reach every community, equally.' },
  { icon: 'bi-graph-up-arrow', title: 'Impact', text: 'We measure success by the real change we create on ground.' },
  { icon: 'bi-hand-thumbs-up', title: 'Collaboration', text: 'We partner with people and organizations who share our vision.' },
]

const team = [
  { name: 'Anil Kumar', role: 'Founder & Chairman', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=60' },
  { name: 'Priya Nair', role: 'Director, Programs', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=60' },
  { name: 'Rahul Verma', role: 'Head, Community Outreach', img: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=400&q=60' },
]

function About() {
  return (
    <>
      <PageHero title="About Us" crumb="About Us" />

      {/* Intro */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=70"
                  alt="Volunteers working together"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="eyebrow mb-2">WHO WE ARE</div>
              <h2 className="section-title mb-3" style={{ fontSize: '2rem' }}>
                Building a <span className="text-gold">Better Tomorrow</span> Together
              </h2>
              <p className="text-muted">
                APN GLOBAL Foundation is a non-profit organization dedicated to
                fostering educational excellence, social welfare, research,
                innovation, skill development, and sustainable community
                empowerment.
              </p>
              <p className="text-muted">
                Since our founding, we have worked to bridge the gap between
                learning, opportunity and societal needs while promoting equal
                opportunities for all, reaching thousands of beneficiaries
                across India.
              </p>
              <div className="row g-3 mt-2">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-warning"></i>
                    <span className="small fw-semibold">Registered Non-Profit</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-warning"></i>
                    <span className="small fw-semibold">10+ Years of Service</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-warning"></i>
                    <span className="small fw-semibold">Pan-India Presence</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-warning"></i>
                    <span className="small fw-semibold">Transparent Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Vision Mission */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="card-clean">
                <div className="feature-icon mb-3" style={{ background: 'var(--card-blue)', color: '#2f6fed' }}>
                  <i className="bi bi-eye"></i>
                </div>
                <h4 className="section-title mb-2" style={{ fontSize: '1.3rem' }}>Our Vision</h4>
                <p className="text-muted mb-0">
                  To be a globally recognized organization that empowers
                  individuals, strengthens communities and creates lasting
                  social impact through education, research, innovation and
                  humanitarian service.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-clean">
                <div className="feature-icon mb-3" style={{ background: 'var(--card-gold)', color: '#e0a400' }}>
                  <i className="bi bi-bullseye"></i>
                </div>
                <h4 className="section-title mb-2" style={{ fontSize: '1.3rem' }}>Our Mission</h4>
                <p className="text-muted mb-0">
                  To promote education, research, healthcare awareness, skill
                  development, environmental sustainability and social welfare
                  for inclusive and sustainable nation building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">WHAT DRIVES US</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              Our Core <span className="text-gold">Values</span>
            </h2>
          </div>
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-6 col-lg-3" key={v.title}>
                <div className="feature-card text-center" style={{ background: 'var(--bg-soft)' }}>
                  <div className="feature-icon mx-auto" style={{ background: '#fff', color: 'var(--gold-dark)' }}>
                    <i className={`bi ${v.icon}`}></i>
                  </div>
                  <h5>{v.title}</h5>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">OUR PEOPLE</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              Meet Our <span className="text-gold">Leadership</span>
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((t) => (
              <div className="col-12 col-sm-6 col-lg-4" key={t.name}>
                <div className="team-card bg-white rounded-4 overflow-hidden shadow-sm h-100">
                  <img src={t.img} alt={t.name} />
                  <div className="p-3 text-center">
                    <h6 className="fw-bold mb-0" style={{ color: 'var(--navy)' }}>{t.name}</h6>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad text-center">
        <div className="container">
          <h3 className="section-title mb-3">Want to be part of our journey?</h3>
          <p className="text-muted mb-4">Join hands with APN GLOBAL Foundation to create real, lasting change.</p>
          <Link to="/contact" className="btn-navy">
            Get Involved <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
