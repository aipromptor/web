import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack } from '@chakra-ui/react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { RootState, AppThunk, store } from '../../../app/store';
import { useEffect } from 'react';

import {
  switchTab,
  scopeNavs,
  selectedIndex,
  selectedTab,
  fetchScopesAsync,
  fetchPromptsBySelectTab
} from './promptScopeSlice';


export function PromptScopeTopNavTabs() {

  const dispatch = useAppDispatch();

  const tabs = useAppSelector(scopeNavs);
  const tabIndex = useAppSelector(selectedIndex);
  const currentTab = useAppSelector(selectedTab);

  useEffect(() => { dispatch(fetchScopesAsync()) }, [dispatch]);
  useEffect(() => { dispatch(fetchPromptsBySelectTab(tabIndex)) }, [dispatch, tabIndex]);

  return (
    <Tabs onChange={(e) => dispatch(switchTab(e))} variant='soft-rounded' colorScheme='blue'>
      <TabList>
        {tabs.map(t => (<Tab key={t.id} id={t.id}>{t.text}</Tab>))}
      </TabList>
      <TabPanels>
        {tabs.map((t, index) => (
          <TabPanel key={index}>
            <HStack>
              {t.prompts.map(p => (<Button variant='outline'>{p.title}</Button>))}
            </HStack>

          </TabPanel>))}
      </TabPanels>
    </Tabs>
  )
}