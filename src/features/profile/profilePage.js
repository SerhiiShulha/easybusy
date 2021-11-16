import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import SidebarNav from './components/sidebarNav/sidebarNav'
import { Route, Switch } from 'react-router-dom'
import {
  CALENDAR,
  CHILDREN_ENROLLMENT,
  CHILDREN_LIST,
  POSTED_CAMPS,
  PROFILE_SETTINGS,
  SUPPORT,
} from '../../library/constants/routes'
import styled from '@emotion/styled'
import ProfileSettings from './subpages/profileSettings/profileSettings'
import PostedCamps from './subpages/postedCamps/postedCamps'
import Calendar from './subpages/calendar/calendar'

const PageContainer = styled.div`
  width: 100%;
  padding-top: 7rem;
  margin-bottom: 15rem;
`

const ProfilePage = () => {
  return (
    <PageContainer>
      <Container>
        <Row>
          <Col md={3}>
            <SidebarNav />
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path={PROFILE_SETTINGS}>
                <ProfileSettings />
              </Route>
              <Route exact path={POSTED_CAMPS}>
                <PostedCamps />
              </Route>
              <Route exact path={CHILDREN_LIST}>
                <p>children</p>
              </Route>
              <Route exact path={CHILDREN_ENROLLMENT}>
                <p>children enrollment</p>
              </Route>
              <Route exact path={CALENDAR}>
                <Calendar />
              </Route>
              <Route exact path={SUPPORT}>
                <p>support</p>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  )
}

export default ProfilePage
