import { useState } from 'react'
import PageHero from '../components/PageHero'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title="Contact Us" crumb="Contact Us" />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-4">
              <div className="info-card text-center h-100">
                <div className="feature-icon mx-auto mb-3" style={{ background: 'var(--card-blue)', color: '#2f6fed' }}>
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h6 style={{ textTransform: 'none' }} className="fw-bold">Our Address</h6>
                <p className="text-muted small mb-0">
                  NLV-907, Shri Radha Aqua Garden, Plot No. GH-05a,
                  Sector 16 B, Greater Noida West 201301, Uttar Pradesh, India
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="info-card text-center h-100">
                <div className="feature-icon mx-auto mb-3" style={{ background: 'var(--card-gold)', color: '#e0a400' }}>
                  <i className="bi bi-telephone"></i>
                </div>
                <h6 style={{ textTransform: 'none' }} className="fw-bold">Call Us</h6>
                <p className="text-muted small mb-0">8868855677</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="info-card text-center h-100">
                <div className="feature-icon mx-auto mb-3" style={{ background: 'var(--card-green)', color: '#26a65b' }}>
                  <i className="bi bi-envelope"></i>
                </div>
                <h6 style={{ textTransform: 'none' }} className="fw-bold">Email Us</h6>
                <p className="text-muted small mb-0">info@apnglobalfoundation.org</p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="eyebrow mb-2">GET IN TOUCH</div>
              <h2 className="section-title mb-3" style={{ fontSize: '1.9rem' }}>
                Send Us a <span className="text-gold">Message</span>
              </h2>

              {submitted ? (
                <div className="alert alert-success">
                  Thank you for reaching out! Our team will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-semibold">Full Name</label>
                      <input type="text" className="form-control form-control-clean" placeholder="Your name" required />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-semibold">Phone Number</label>
                      <input type="tel" className="form-control form-control-clean" placeholder="Your phone" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Email Address</label>
                      <input type="email" className="form-control form-control-clean" placeholder="Your email" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Subject</label>
                      <input type="text" className="form-control form-control-clean" placeholder="How can we help?" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Message</label>
                      <textarea className="form-control form-control-clean" rows="4" placeholder="Write your message..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-navy w-100 w-sm-auto justify-content-center">
                        Send Message <i className="bi bi-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="col-12 col-lg-6">
              <div className="map-wrap h-100" style={{ minHeight: 380 }}>
                <iframe
                  title="APN Global Foundation Location"
                  src="https://maps.google.com/maps?q=Greater%20Noida%20West%2C%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 380 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
