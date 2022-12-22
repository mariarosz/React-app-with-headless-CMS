import './TopNavbar.css'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg'
import APIService from '../../services/APIservice'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TopNavbar() {
  let [links, setLinks] = useState([])

  useEffect(() => {
    APIService.getPages().then((result) => setLinks(result))
  }, [])

  function capitalizeLinkName(string) {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  return (
    <div className="navbar">
      <div>
        <nav>
          {links.map((link) =>
            link === links[0] ? (
              <Link key={link.id} to={link.url}>
                <ReactLogo />
              </Link>
            ) : (
              <Link key={link.id} to={link.url}>
                <p className="nav-link">{capitalizeLinkName(link.url)}</p>
              </Link>
            ),
          )}
        </nav>
      </div>

      <button>Contact us</button>
    </div>
  )
}

export default TopNavbar
