import React from 'react'
import Tabs from '../../../../library/components/layout/ui/tabs/tabs'
import { Text } from '../../../../library/components/typography/typography'
import { colors } from '../../../../library/constants/styles'
import CampOverview from './components/campOverview/campOverview'
import CampAttachments from './components/campAttachments/campAttachments'
import CampReviews from './components/campReviews/campReviews'

const CampTabsInfo = () => {
  return (
    <Tabs
      tabs={[
        {
          title: 'Overview',
          content: <CampOverview />,
        },
        {
          title: 'Attachments',
          content: <CampAttachments />,
        },
        {
          title: 'Reviews',
          content: <CampReviews />,
        },
      ]}
    />
  )
}

export default CampTabsInfo
