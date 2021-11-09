import React from 'react'
import styled from '@emotion/styled'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import headerBg from '../../../assets/images/pages/home/header-bg@2x.png'
import InlineSearchForm from '../../../library/components/searchForm/inlineSearchForm'
import { mq } from '../../../library/constants/styles'
import { css } from '@emotion/css'
import sunIcon from '../../../assets/images/pages/home/sun.svg'

const HeaderContainer = styled.header`
  min-height: 60rem;
  padding-bottom: 5rem;
  background-image: url(${headerBg});
  background-size: cover;
  background-position: center;

  ${mq.xs} {
    height: auto;
    //min-height: 100vh;
    padding-bottom: 5rem;
  }
`

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
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

const SunIcon = styled.img`
  position: absolute;
  transform: translate(-80%, -80%);
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
            <TitleContainer>
              <Hidden sm xs>
                <SunIcon src={sunIcon} title={''} />
              </Hidden>
              <Title>
                Summer and winter camps organized{' '}
                <Visible xs>
                  <br />
                </Visible>{' '}
                for children
              </Title>
            </TitleContainer>
          </Col>
        </Row>
        {/*<Hidden xs>*/}
        <InlineSearchForm />
        {/*</Hidden>*/}
      </Container>
    </HeaderContainer>
  )
}

export default Header
