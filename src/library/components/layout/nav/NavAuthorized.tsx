import React from 'react'
import NavContainer, { MobileNavLink } from './NavContainer'
import { Hidden } from 'react-grid-system'

const MobileMenuItems = () => {
  return (
    <>
      <MobileNavLink to={'/sign-in'}>Sign In</MobileNavLink>
      <MobileNavLink to={'/sign-up'}>Sign Up</MobileNavLink>
    </>
  )
}

const NavAuthorized: React.FC = () => {
  return (
    <NavContainer mobileMenu={<MobileMenuItems />}>nav content</NavContainer>
  )
}

export default NavAuthorized
