import { useState, useEffect } from "react";
import {
    VStack,
    HStack,
    Box,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    IconButton,
    Container,
} from "@chakra-ui/react";
import { CloseIcon, CheckIcon, AddIcon } from "@chakra-ui/icons";
import { RootState } from "../../../app/store";
import { fetchTabs, getTabs } from "./slice";
// import { getLanguage } from "../locale/slice";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

type Tab = {
    id: number;
    name: string;
    tags: string[];
};

type TabsData = {
    [key: string]: string[];
};

export default function TagSelector() {
    const dispatch = useAppDispatch();

    //   const language = useAppSelector(getLanguage);

    useEffect(
        () => {
            dispatch(fetchTabs());
        },
        [
            //language
        ]
    );

    const [activeTab, setActiveTab] = useState(1);

    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tabs = useAppSelector(getTabs);

    const tabsData: TabsData = {
        "1": ["tag1", "tag2", "tag3"],
        "2": ["tag4", "tag5", "tag6"],
        "3": ["tag7", "tag8", "tag9"],
    };

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
                onChange={(index) => setActiveTab(index + 1)}
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
                                        {tag.name}
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
