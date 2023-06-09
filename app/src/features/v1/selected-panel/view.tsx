import { AddIcon, ArrowForwardIcon, CheckIcon, CloseIcon, SettingsIcon } from "@chakra-ui/icons";
import {
    Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure, VStack
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { TextToImageHistoryEntity } from "../../../graphql/types";
import { uploadTextToImage } from "../image-card/slice";
import { ImageScrollPanel } from "../image-card/view";
import { getSystemLanguage } from "../locale/slice";
import { PromptProps } from "../types";
import { fetchPromptsAsync, fetchTabs, generateTextToImage, getSelectedTab, getServer, getTabs, saveHistory, setServer, switchTab } from "./slice";

export default function TagSelector() {

    const { t } = useTranslation(['actions', 'labels']);

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


    const [selectedPrompts, setSelectedPrompts] = useState<PromptProps[]>([]);

    const handlePromptClick = (prompt: PromptProps) => {
        if (selectedPrompts.includes(prompt)) {
            setSelectedPrompts(selectedPrompts.filter((p) => p !== prompt));
        } else {
            setSelectedPrompts([...selectedPrompts, prompt]);
        }
    };

    const handleRemovePromptClick = (prompt: PromptProps) => {
        setSelectedPrompts(selectedPrompts.filter((p) => p !== prompt));
    };

    const server = useAppSelector(getServer);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const sdServerWebUrlPlaceholder = t('sd-server-web-url-placeholder', { ns: 'labels' });
    const generatingLoadingText = t('button-generating', { ns: 'labels' });
    const generating = useAppSelector((state: RootState) => state.category.server.status);
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [webUrl, setWebUrl] = useState(server.data.webUrl);

    const handleConfirm = () => {
        dispatch(setServer({ ...server, webUrl }));
        onClose();
    };

    const handleWebUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWebUrl(event.target.value);
    };

    const handleGenerate = () => {
        dispatch(saveHistory({ pickedPrompts: selectedPrompts })).then((result) => {
            const payload = result.payload as TextToImageHistoryEntity;
            dispatch(generateTextToImage(payload)).then((generatedResult) => {
                dispatch(uploadTextToImage(generatedResult.meta.arg.id || ""));
            });
        });
    };

    return (
        <VStack id="select-panel" align="stretch" divider={<StackDivider borderColor="gray.200" />} >
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
                                        colorScheme={selectedPrompts.includes(tag) ? "green" : "gray"}
                                        size="xs"
                                        onClick={() => handlePromptClick(tag)}
                                        leftIcon={selectedPrompts.includes(tag) ? <CheckIcon /> : <AddIcon />}
                                    >
                                        {tag.title}
                                    </Button>
                                ))}
                            </HStack>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>

            <Box borderRadius="lg">
                {selectedPrompts.map((tag, index) => (
                    <Button
                        key={tag.id}
                        variant="solid"
                        colorScheme="teal"
                        size="sm"
                        mr="2"
                        mb="2"
                        leftIcon={<CloseIcon />}
                        onClick={() => handleRemovePromptClick(tag)}
                    >
                        {tag.title}
                    </Button>
                ))}
            </Box>

            <HStack>
                <Button onClick={handleGenerate}
                    isLoading={generating === 'loading'}
                    loadingText={generatingLoadingText}
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='teal' variant='outline'>
                    {t('text-generate-image')}
                </Button>
                <Button onClick={onOpen} rightIcon={<SettingsIcon />} colorScheme='teal' variant='outline'>
                    {t('set-sd-server')}
                </Button>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{t('sd-server-settings', { ns: 'labels' })}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>{t('sd-server-label', { ns: 'labels' })}</FormLabel>
                                <Input ref={initialRef} placeholder={sdServerWebUrlPlaceholder} value={webUrl} onChange={handleWebUrlChange} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={handleConfirm} colorScheme='teal' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </HStack>

            <ImageScrollPanel />

        </VStack>
    );
}

export function PromptSelectedPanel() {
    return <TagSelector />;
}
