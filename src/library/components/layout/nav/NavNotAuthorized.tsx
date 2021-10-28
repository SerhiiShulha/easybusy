import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Hidden } from 'react-grid-system'
import NavContainer, { MobileNavLink } from './NavContainer'
import logo from '../../../../assets/images/logo.svg'
import { HiX } from 'react-icons/hi'
import { useLocation } from 'react-router'

const MobileMenuItems = () => {
  return (
    <>
      <MobileNavLink to={'/sign-in'}>Sign In</MobileNavLink>
      <MobileNavLink to={'/sign-up'}>Sign Up</MobileNavLink>
    </>
  )
}

const NavNotAuthorized = () => {
  const location = useLocation()

  const composeContent = () => {
    switch (location.pathname) {
      case '/':
        return (
          <div className={'flex items-center space-x-4'}>
            <Link as={RouterLink} size={'m'} to={'/sign-up'}>
              Sign Up
            </Link>
            <Link
              as={RouterLink}
              variant={'outline'}
              size={'m'}
              to={'/sign-in'}
              colorScheme={location.pathname === '/' ? 'white' : undefined}
            >
              Sign In
            </Link>
            {/*<Link as={RouterLink} size={'m'} to={'/user'}>*/}
            {/*  User Page*/}
            {/*</Link>*/}
          </div>
        )

      case '/sign-in':
        return (
          <div className={'flex items-center space-x-4'}>
            <span className={'mr-6'} style={{ fontSize: '1.4rem' }}>
              Don’t have an account yet?
            </span>
            <Link
              as={RouterLink}
              variant={'outline'}
              size={'m'}
              to={'/sign-up'}
            >
              Sign Up
            </Link>
          </div>
        )

      case '/sign-up':
        return (
          <div className={'flex items-center space-x-4'}>
            <span className={'mr-6'} style={{ fontSize: '1.4rem' }}>
              Already have an account?
            </span>
            <Link
              as={RouterLink}
              variant={'outline'}
              size={'m'}
              to={'/sign-in'}
            >
              Sign In
            </Link>
          </div>
        )

      default:
        return null
    }
  }
  return (
    <NavContainer mobileMenu={<MobileMenuItems />}>
      {!!composeContent() && <Hidden xs>{composeContent()}</Hidden>}
    </NavContainer>
  )
}

export default NavNotAuthorized
