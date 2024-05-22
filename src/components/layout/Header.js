import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '../../app/App'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [imgLang, setImgLang] = useState('en')
  const [checked, setChecked] = useState(true);
  const [t, i18n] = useTranslation('lang')

  const switchLanguage = (e) => {

    setChecked(e.target.checked)

    if(checked) {
      setImgLang('id')
      i18n.changeLanguage('id')
    } else {
      setImgLang('en')
      i18n.changeLanguage('en')
    }
    
  }

  return (
    <header className="fixed-top">
      <Navbar expand="lg" className="bg-body-tertiary fixed-top shadow-none">
      <Container>
        <Navbar.Brand href="/" className="d-flex gap-2 align-items-center">
          <img src='img/favicon.ico' alt='logo' width={25} height={25}/>
          <h4 className="my-1">React JS</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler-icon">
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto"> 
            <NavLink className="pe-5 py-2 navlink fw-bold" to={appRoutes.HOME}>Home</NavLink>
            <NavLink className="pe-5 py-2 navlink fw-bold"  to={appRoutes.ABOUT}>About</NavLink>
            <NavLink className="pe-5 py-2 navlink fw-bold"  to={appRoutes.CONTACT}>Contact</NavLink>
            <div className="pe-5 py-2 navlink fw-bold d-lg-block form-check switch-lang form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switch-lang"
                checked={checked}
                onChange={switchLanguage}
              />
              <label
                className="form-check-label"
                htmlFor="switch-lang"
              ><img width={28} src={`img/${imgLang}.png`} alt=""/></label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
