import {Link, withRouter} from 'react-router-dom'
import {BsBagFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
          alt="website logo"
        />
      </Link>
      <div className="nav-content">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="logout-desktop-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>

      <div className="mobile-icons">
        <ul className="mobile-nav-menu">
          <li className="mobile-li-logo">
            <Link to="/" className="nav-link">
              <AiFillHome className="nav-icons" />
            </Link>
          </li>
          <li className="mobile-li-logo">
            <Link to="/jobs" className="nav-link">
              <BsBagFill className="nav-icons" />
            </Link>
          </li>
          <li className="mobile-li-logo">
            <FiLogOut className="nav-icons" onClick={onClickLogout} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
