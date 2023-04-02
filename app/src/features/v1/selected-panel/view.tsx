import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchTabs, getTabs, fetchPromptsAsync, switchTab, getSelectedTab } from "./slice";
import { getSystemLanguage } from "../locale/slice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

// type TabProps = {
//     id: number;
//     name: string;
//     tags: string[];
// };

// type TabsData = {
//     [key: string]: string[];
// };

type TagData = {
    id: string;
    title: string;
}

export default function TagSelector() {

    const dispatch = useAppDispatch();

    const tabs = useAppSelector(getTabs);

    const systemLanguage = useAppSelector(getSystemLanguage);

    useEffect(() => {
        dispatch(fetchTabs())
    }, [dispatch, systemLanguage]);

    const selectedTab = useAppSelector(getSelectedTab);

    useEffect(() => {
        dispatch(fetchPromptsAsync({ categoryId: selectedTab?.id }))
    }, [dispatch, selectedTab]);

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // const tabs: Tab[] = [
    //     { id: 1, name: "Tab 1", tags: tabsData["1"] },
    //     { id: 2, name: "Tab 2", tags: tabsData["2"] },
    //     { id: 3, name: "Tab 3", tags: tabsData["3"] },
    // ];

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleRemoveTagClick = (tag: string) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    return (
        <VStack align="stretch">
            <Tabs
                variant="soft-rounded"
                colorScheme="blue"
                borderRadius="md"
                onChange={(e) => dispatch(switchTab(e))}
            >
                <TabList>
                    {tabs.map((tab) => (
                        <Tab key={tab.id}>{tab.name}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {tabs.map((tab) => (
                        <TabPanel key={tab.id}>
                            <HStack>
                                {tab.tags.map((tag) => (
                                    <Button
                                        key={tag.id}
                                        variant="outline"
                                        colorScheme={selectedTags.includes(tag.id) ? "green" : "gray"}
                                        size="xs"
                                        onClick={() => handleTagClick(tag.id)}
                                        leftIcon={selectedTags.includes(tag.id) ? <CheckIcon /> : <AddIcon />}
                                    >
                                        {tag.title}
                                    </Button>
                                ))}
                            </HStack>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>

            <Box bg="white" position="fixed" bottom="0" w="100%" borderRadius="lg">
                {selectedTags.map((tag, index) => (
                    <Button
                        key={tag}
                        variant="solid"
                        colorScheme="green"
                        size="sm"
                        mr="2"
                        mb="2"
                        leftIcon={<CloseIcon />}
                        onClick={() => handleRemoveTagClick(tag)}
                    >
                        {tag}
                    </Button>
                ))}
            </Box>
        </VStack>
    );
}

export function PromptSelectedPanel() {
    return <TagSelector />;
}
