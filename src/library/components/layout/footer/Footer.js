import styled from '@emotion/styled'
import React from 'react'
import { colors, mq } from '../../../constants/styles'
import { Container } from 'react-grid-system'
import logo from '../../../../assets/images/logo-light.svg'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { css } from '@emotion/css'

const FooterContainer = styled.footer`
  padding: 6rem 0;
  background-color: ${colors.text};
  color: #fff;

  ${mq.xs} {
    padding: 5rem 5rem 8.5rem;
  }
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;

  ${mq.xs} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Logo = styled.img`
  margin-right: 10.5rem;

  ${mq.xs} {
    max-height: 2rem;
    margin-right: 0;
    margin-bottom: 4rem;
  }
`

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  transition: 0.3s all;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &:hover {
    color: ${colors.accent};
  }
`

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  ${mq.xs} {
    margin-top: 4rem;
    width: 100%;
    justify-content: space-between;
  }
`

const SocialLink = styled.a`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.3s all;

  &:not(:last-child) {
    ${mq.sm} {
      margin-right: 4rem;
    }
  }

  &:hover {
    color: ${colors.accent};
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <Logo src={logo} alt={'EasyBusy'} />
          <div
            className={css`
              ${mq.xs} {
                margin-bottom: 1.5rem;
              }

              ${mq.sm} {
                margin-right: 7rem;
              }
            `}
          >
            <FooterLink to={'#'}>Find a Camp</FooterLink>
            <FooterLink to={'#'}>Become an Organizer</FooterLink>
            <FooterLink to={'#'}>About Us</FooterLink>
          </div>
          <div>
            <FooterLink to={'#'}>Contact</FooterLink>
            <FooterLink to={'#'}>FAQ</FooterLink>
            <FooterLink to={'#'}>Privacy Policy</FooterLink>
          </div>
          <SocialLinksContainer>
            <SocialLink href={'#'} target={'_blank'}>
              <FaLinkedinIn />
            </SocialLink>
            <SocialLink href={'#'} target={'_blank'}>
              <FaFacebookF />
            </SocialLink>
            <SocialLink href={'#'} target={'_blank'}>
              <FaInstagram />
            </SocialLink>
            <SocialLink href={'#'} target={'_blank'}>
              <FaTwitter />
            </SocialLink>
            <SocialLink href={'#'} target={'_blank'}>
              <FaYoutube />
            </SocialLink>
          </SocialLinksContainer>
        </FooterContent>
      </Container>
    </FooterContainer>
  )
}

export default Footer
