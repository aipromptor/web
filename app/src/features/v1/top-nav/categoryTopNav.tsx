import { AddIcon, CheckIcon } from '@chakra-ui/icons';
import { Button, HStack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
  fetchPromptsBySelectTab, fetchScopesAsync, scopeNavs,
  selectedIndex, switchTab, togglePrompt
} from './categoryTopNavSlice';


export function CategoryTopNavTabs() {

  const dispatch = useAppDispatch();

  const tabs = useAppSelector(scopeNavs);
  const tabIndex = useAppSelector(selectedIndex);

  useEffect(() => { dispatch(fetchScopesAsync()) }, [dispatch]);
  useEffect(() => { dispatch(fetchPromptsBySelectTab(tabIndex)) }, [dispatch, tabIndex]);

  return (
    <Tabs onChange={(e) => dispatch(switchTab(e))} variant='soft-rounded' colorScheme='blue'>
      <TabList>
        {tabs.map(t => (<Tab key={t.id} id={t.id}>{t.text}</Tab>))}
      </TabList>
      <TabPanels>
        {tabs.map((t, ti) => (
          <TabPanel key={ti}>
            <HStack>
              {t.prompts.map((p, pi) => (
                <Button key={p.id} onClick={(e) => dispatch(togglePrompt({ scopeIndex: ti, promptIndex: pi }))}
                  colorScheme={p.selected ? 'green' : ''}
                  leftIcon={p.selected ? <CheckIcon /> : <AddIcon />}
                  variant={p.selected ? 'outline' : 'ghost'}
                  size='xs'>{p.title}</Button>
              ))}
            </HStack>

          </TabPanel>))}
      </TabPanels>
    </Tabs>
  )
}