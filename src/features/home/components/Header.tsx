import React from 'react'
import styled from '@emotion/styled'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import headerBg from '../../../assets/images/pages/home/header-bg@2x.png'
import InlineSearchForm from '../../../library/components/inlineSearchForm/inlineSearchForm'
import { mq } from '../../../library/constants/styles'
import { css } from '@emotion/css'

const HeaderContainer = styled.header`
  width: 100vw;
  height: 60rem;
  background-image: url(${headerBg});
  background-size: cover;
  background-position: center;

  ${mq.xs} {
    height: auto;
    min-height: 100vh;
  }
`

const Title = styled.h1`
  margin-top: 20rem;
  margin-bottom: 3.5rem;
  color: #fff;
  font-size: 6rem;
  line-height: 1;
  text-align: center;
  font-weight: 800;

  ${mq.xs} {
    margin-top: 10rem;
    font-size: 3.5rem;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container
      // className={css`
      //   ${mq.xs} {
      //     padding: 0;
      //   }
      // `}
      >
        <Row>
          <Col
            md={8}
            offset={{ md: 2 }}
            className={css`
              ${mq.xs} {
                padding: 0 !important;
              }
            `}
          >
            <Title>
              Summer and winter camps organized{' '}
              <Visible xs>
                <br />
              </Visible>{' '}
              for children
            </Title>
          </Col>
        </Row>
        <Hidden xs>
          <InlineSearchForm />
        </Hidden>
      </Container>
    </HeaderContainer>
  )
}

export default Header
