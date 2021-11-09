import React from 'react'
import { SettingsPageTitle } from '../../../../library/components/typography/typography'
import { Button, Flex } from '@chakra-ui/react'
import { Col, Row } from 'react-grid-system'
import CampCard from '../../../../library/components/layout/listItems/campCard/CampCard'
import PostedCampCard from '../../../../library/components/layout/listItems/campCard/postedCampCard'

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
        <Button
          size={'m'}
          variant={'action'}
          onClick={() => alert('create camp')}
        >
          + Create New Camp
        </Button>
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
