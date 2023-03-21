import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { RootState, AppThunk, store } from '../../../app/store';

import {
  switchTab,
  scopeNavs,
  selectedScope,
  fetchScopesAsync,
} from './promptScopeSlice';

store.dispatch(fetchScopesAsync())

export function PromptScopeTopNavTabs() {

  const dispatch = useAppDispatch();
  const tabs = useAppSelector(scopeNavs);
  const selectedTab = useAppSelector(selectedScope);

  return (
    <Tabs variant='soft-rounded' colorScheme='blue'>
      <TabList>
        {tabs.map(t => (<Tab key={t.id}>{t.text}</Tab>))}
      </TabList>
      <TabPanels>
        {selectedTab && selectedTab.prompts && selectedTab.prompts.length ? (
          selectedTab.prompts.map(p => (<TabPanel key={p.id}>{p.title}</TabPanel>))
        ) : null}
      </TabPanels>
    </Tabs>
  )
}