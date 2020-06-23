import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => (
  <footer>
    <p>
      UTONIUM
      <i style={{color: '#F77F00'}} className="material-icons">
        copyright
      </i>
      2020
    </p>
    <p>Low Skrull Prices. High Quality Standards. Forever.</p>
    <Link to="/alchemlogin">Alchemists</Link>
  </footer>
)
