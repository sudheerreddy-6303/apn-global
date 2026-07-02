import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/initiatives', label: 'Our Initiatives' },
  { to: '/events', label: 'Events & News' },
  { to: '/contact', label: 'Contact Us' },
]

function Navbar() {
  return (
    <header>
      <div className="top-strip d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <a href="mailto:info@apnglobalfoundation.org">
              <i className="bi bi-envelope me-2"></i>info@apnglobalfoundation.org
            </a>
            <a href="tel:8868855677">
              <i className="bi bi-telephone me-2"></i>8868855677
            </a>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Follow Us :</span>
            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg main-nav sticky-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <div className="brand-logo">APN<span>|</span>GLOBAL</div>
            <div className="brand-sub">— FOUNDATION</div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/contact" className="btn-gold">
              <i className="bi bi-heart-fill"></i> Donate Now
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
