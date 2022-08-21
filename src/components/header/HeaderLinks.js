import React from 'react'
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div>
        <div className="header-links">
        <Link className="header-link" to="#">
          about
        </Link>
        <Link className="header-link" to="#">
          services
        </Link>
        <Link className="header-link" to="#">
          works
        </Link>
        <Link className="header-link" to="#">
          contact us
        </Link>
      </div>
    </div>
  )
}

export default HeaderLinks