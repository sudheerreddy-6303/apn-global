import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container pb-4">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="brand-logo mb-2">APN<span>|</span>GLOBAL</div>
            <div className="brand-sub mb-3">— FOUNDATION</div>
            <p className="text-muted small">
              Empowering individuals, strengthening communities and creating a
              progressive nation through education, research and social welfare.
            </p>
            <div className="d-flex mt-3">
              <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-twitter"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h6>Quick Links</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/initiatives">Our Initiatives</Link></li>
              <li><Link to="/events">Programs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <h6>Our Initiatives</h6>
            <ul>
              <li><Link to="/initiatives">Education &amp; Skill Development</Link></li>
              <li><Link to="/initiatives">Healthcare Awareness</Link></li>
              <li><Link to="/initiatives">Research &amp; Innovation</Link></li>
              <li><Link to="/initiatives">Women &amp; Youth Empowerment</Link></li>
              <li><Link to="/initiatives">Environment Sustainability</Link></li>
              <li><Link to="/initiatives">Community Welfare</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6>Contact Us</h6>
            <ul>
              <li className="d-flex gap-2">
                <i className="bi bi-geo-alt text-warning"></i>
                <span>NLV- 907, Shri Radha Aqua Garden, Plot No. GH-05a, Sector 16 B, Greater Noida West 201301, Uttar Pradesh, India</span>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-telephone text-warning"></i>
                <span>8868855677</span>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-envelope text-warning"></i>
                <span>info@apnglobalfoundation.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center">
          <span>© 2026 APN GLOBAL FOUNDATION. All Rights Reserved.</span>
          <span>
            <a href="#" className="text-light-emphasis me-3">Privacy Policy</a>
            <a href="#" className="text-light-emphasis">Terms &amp; Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
