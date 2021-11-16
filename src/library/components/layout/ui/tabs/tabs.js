import React from 'react'
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'

const Tabs = ({ tabs = [] }) => {
  return (
    <ChakraTabs variant="unstyled">
      <TabList>
        {tabs.map((t) => (
          <Tab key={t.title}>{t.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((t) => (
          <TabPanel key={t.title}>{t.content}</TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  )
}

export default Tabs
