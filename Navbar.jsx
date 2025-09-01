import PropTypes from 'prop-types'
import './Navbar.css'

export default function Navbar({setPage}) {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My app</h1>
      <div className="navbar-links">
        <button type="button" onClick={() => setPage('about')}>
          About
        </button>
        <button type="button" onClick={() => setPage('services')}>
          Services
        </button>
        <button type="button" onClick={() => setPage('contact')}>
          Contact
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
}
