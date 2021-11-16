import React from 'react'
import { SettingsPageTitle } from '../../../../library/components/typography/typography'
import { Button, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Col, Row } from 'react-grid-system'
import CampCard from '../../../../library/components/layout/listItems/campCard/CampCard'
import PostedCampCard from '../../../../library/components/layout/listItems/campCard/postedCampCard'
import { CAMP_CREATE } from '../../../../library/constants/routes'

const PostedCamps = () => {
  return (
    <>
      <Flex
        width={'full'}
        alignItems={'center'}
        justifyContent={'space-between'}
        className={'mb-24'}
      >
        <SettingsPageTitle>Posted Camps</SettingsPageTitle>
        <Link as={RouterLink} to={CAMP_CREATE} size={'m'} variant={'action'}>
          + Create New Camp
        </Link>
      </Flex>
      <Row>
        <Col md={4}>
          <PostedCampCard />
        </Col>
        <Col md={4}>
          <PostedCampCard />
        </Col>
        <Col md={4}>
          <PostedCampCard />
        </Col>
        <Col md={4}>
          <PostedCampCard />
        </Col>
      </Row>
    </>
  )
}

export default PostedCamps
