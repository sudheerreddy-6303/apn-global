import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const initiatives = [
  {
    title: 'Education & Skill Development',
    text: 'We support schools, colleges and learners with scholarships, digital classrooms and vocational training that build employable, real-world skills.',
    icon: 'bi-book-half',
    color: '#2f6fed',
    bg: 'var(--card-blue)',
    img: 'https://www.shutterstock.com/image-photo/this-image-showcases-collaborative-training-260nw-2765927389.jpg',
  },
  {
    title: 'Healthcare Awareness',
    text: 'Free health camps, screening drives and awareness programs bring preventive care and wellness knowledge to underserved communities.',
    icon: 'bi-heart-pulse',
    color: '#e0567c',
    bg: 'var(--card-pink)',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=65',
  },
  {
    title: 'Research & Innovation',
    text: 'We fund and mentor grassroots research and innovation projects that solve real problems in education, health and sustainability.',
    icon: 'bi-eyedropper',
    color: '#e0a400',
    bg: 'var(--card-gold)',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=65',
  },
  {
    title: 'Women & Youth Empowerment',
    text: 'Leadership training, mentorship circles and livelihood support help women and young people become confident changemakers.',
    icon: 'bi-person-arms-up',
    color: '#7a5cf0',
    bg: 'var(--card-purple)',
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=65',
  },
  {
    title: 'Environment Sustainability',
    text: 'Tree plantation drives, waste management awareness and clean energy pilots work towards a greener, more resilient tomorrow.',
    icon: 'bi-tree',
    color: '#1fae8e',
    bg: 'var(--card-teal)',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=700&q=65',
  },
  {
    title: 'Community Welfare',
    text: 'From ration drives to shelter support, we stand with vulnerable communities in moments of need and in the everyday.',
    icon: 'bi-people',
    color: '#26a65b',
    bg: 'var(--card-green)',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=65',
  },
]

function Initiatives() {
  return (
    <>
      <PageHero title="Our Initiatives" crumb="Our Initiatives" />

      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <div className="eyebrow mb-2">WHERE WE FOCUS</div>
            <h2 className="section-title" style={{ fontSize: '1.9rem' }}>
              Programs Driving <span className="text-gold">Real Change</span>
            </h2>
          </div>

          <div className="d-flex flex-column gap-4">
            {initiatives.map((item, idx) => (
              <div className="row g-4 align-items-center" key={item.title}>
                <div className={`col-12 col-lg-5 ${idx % 2 === 1 ? 'order-lg-2' : ''}`}>
                  <div className="hero-img-wrap">
                    <img src={item.img} alt={item.title} style={{ height: 260 }} />
                  </div>
                </div>
                <div className={`col-12 col-lg-7 ${idx % 2 === 1 ? 'order-lg-1' : ''}`}>
                  <div className="feature-card" style={{ background: item.bg }}>
                    <div className="feature-icon mb-3" style={{ background: '#fff', color: item.color }}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h4 className="section-title mb-2" style={{ fontSize: '1.3rem' }}>{item.title}</h4>
                    <p className="text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad text-center" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <h3 className="fw-bold text-white mb-3">Partner with us on an initiative</h3>
          <p className="mb-4" style={{ color: '#cfd7ec' }}>
            Whether as a donor, volunteer or partner organization, there is a place for you in our work.
          </p>
          <Link to="/contact" className="btn-gold">
            Get In Touch <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Initiatives
