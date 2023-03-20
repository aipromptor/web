import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export function PromptScopeTopNavTabs() {
    return (
        <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    )
}