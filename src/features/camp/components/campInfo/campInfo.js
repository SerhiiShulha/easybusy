import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../ui/campUiComponents'
import { Container, Col, Row } from 'react-grid-system'
import { CampRating } from '../../../../library/components/layout/listItems/campCard/CampCard'
import { Text } from '../../../../library/components/typography/typography'
import { colors } from '../../../../library/constants/styles'
import { Flex } from '@chakra-ui/react'
import locationIcon from '../../../../assets/images/icons/location.svg'
import phoneIcon from '../../../../assets/images/icons/phone.svg'
import emailIcon from '../../../../assets/images/icons/email.svg'

const OnlineLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #3264e8;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
`

const CampInfo = () => {
  return (
    <Box p={'3.5rem 0'} m={'0 0 3rem'}>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={5} offset={{ md: 1 }}>
              <Flex direction={'column'} align={'flex-start'}>
                <CampRating />
                <Text
                  as={'h1'}
                  size={'3rem'}
                  lineHeight={'3.6rem'}
                  weight={600}
                  mt={'0.5rem'}
                  mb={'0.5rem'}
                >
                  Friends Summer Camp
                </Text>
                <Text color={colors.text50} mb={'1.5rem'}>
                  Mont-Tremblant, Qc
                </Text>
                <OnlineLabel>
                  <span>online</span>
                </OnlineLabel>
              </Flex>
            </Col>
            <Col md={4} offset={{ md: 1 }}>
              <Flex align={'flex-start'} mb={10}>
                <img src={locationIcon} alt={'Location'} className={'mr-8'} />
                <div>
                  <Text>1288 Av. des Canadiens-de-Montréal #3212</Text>
                  <Text>Montréal (Ville-Marie), Quebec H3B3B3</Text>
                </div>
              </Flex>
              <Flex align={'flex-start'} mb={10}>
                <img src={phoneIcon} alt={'Location'} className={'mr-8'} />
                <div>
                  <Text>514-941-7878</Text>
                  <Text>514-941-7878</Text>
                </div>
              </Flex>
              <Flex align={'flex-start'}>
                <img src={emailIcon} alt={'Location'} className={'mr-8'} />
                <div>
                  <Text>friends@camp.com</Text>
                </div>
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </Box>
  )
}

export default CampInfo
