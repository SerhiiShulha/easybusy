import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import logoLight from '../../../../assets/images/logo-light.svg'
import logo from '../../../../assets/images/logo.svg'
import { useLocation, useRouteMatch } from 'react-router'
import { Container, Hidden, Visible } from 'react-grid-system'
import { Link as RouterLink } from 'react-router-dom'
import { Flex, Link, Slide, useDisclosure } from '@chakra-ui/react'
import { colors, mq } from '../../../constants/styles'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 100;
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  max-height: 3.5rem;

  ${mq.xs} {
    max-height: 2rem;
  }
`

const MenuButton = styled.button<{ menuIsOpen?: boolean }>`
  all: unset;
  display: flex;
  padding: 0 15px;
  font-size: 22px;
  color: ${(props) => (props.menuIsOpen ? colors.text : '#fff')};
`

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 2rem 1.5rem;
  background-color: #fff;
`

export const MobileNavLink = styled(RouterLink)`
  display: block;
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`

const MobileMenu: React.FC<{
  setIsOpen: () => void
  content: React.ReactNode
}> = ({ content, setIsOpen }) => {
  return (
    <MobileMenuContainer>
      <Flex justify={'space-between'} className={'mb-28'}>
        <Logo src={logo} title={'EasyBusy'} />
        <MenuButton menuIsOpen onClick={setIsOpen}>
          <HiX />
        </MenuButton>
      </Flex>
      {content}
    </MobileMenuContainer>
  )
}

const NavContainer: React.FC<{ mobileMenu: React.ReactNode }> = ({
  mobileMenu,
  children,
}) => {
  const { isOpen, onToggle } = useDisclosure()

  const location = useLocation()

  const toggleMenu = () => {
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'
    return onToggle()
  }

  useEffect(() => {
    if (isOpen) toggleMenu()
  }, [location.pathname])

  return (
    <Nav>
      <Container>
        <NavContent>
          <RouterLink to={'/'}>
            <Logo
              src={location.pathname === '/' ? logoLight : logo}
              title={'EasyBusy'}
            />
          </RouterLink>
          {children}
          <Visible xs>
            <MenuButton onClick={toggleMenu}>
              <HiOutlineMenuAlt4 />
            </MenuButton>
          </Visible>
        </NavContent>
      </Container>
      <Visible xs>
        <Slide direction="top" in={isOpen} style={{ zIndex: 1000 }}>
          <MobileMenu content={mobileMenu} setIsOpen={toggleMenu} />
        </Slide>
      </Visible>
    </Nav>
  )
}

export default NavContainer
