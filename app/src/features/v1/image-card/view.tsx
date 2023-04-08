import {
    Box, Card, CardBody, CardFooter,
    CardHeader, Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image,
    Text, useDisclosure, VStack
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getImages, getSystemLanguage, HistoryState, loadHistory } from "./slice";

const ImageCard: React.FC<{ model: HistoryState }> = ({ model }) => {

    const { t } = useTranslation(['actions', 'labels']);

    const promptLabel = t('prompt', { ns: 'labels' });
    const negativePromptLabel = t('negativePrompt', { ns: 'labels' });

    const src = model.base64RawData ? `data:image/png;base64,${model.base64RawData}` : model.url ? model.url : '';

    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCardClick = (newSize: string) => {
        setSize(newSize)
        onOpen()
    }
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex >
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        {/* <Avatar name='Segun Adebayo' src="null" />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box> */}
                    </Flex>

                    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>{promptLabel}</DrawerHeader>
                            <DrawerBody>
                                <VStack alignItems="flex-start">
                                    <p>{model.prompt}</p>
                                    <p> {negativePromptLabel}: {model.negativePrompt}</p>
                                </VStack>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                    {/* <Popover placement='right'>
                        <PopoverTrigger>
                            <IconButton variant='ghost'
                                colorScheme='gray'
                                aria-label='See menu'
                                icon={<BsThreeDotsVertical />}></IconButton>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>{promptLabel}</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <VStack>
                                    <Text width="100%"> {model.prompt}</Text>
                                    <Text width="100%"> {negativePromptLabel}: {model.negativePrompt}</Text>
                                </VStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover> */}

                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                </Text>
            </CardBody>
            <Image onClick={() => handleCardClick('lg')}
                cursor="pointer"
                objectFit='cover'
                src={src}
                alt=''
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                {/* <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button> */}
            </CardFooter>
        </Card>
    );
}

export function ImageScrollPanel() {

    const dispatch = useAppDispatch();

    const systemLanguage = useAppSelector(getSystemLanguage);

    useEffect(() => {
        dispatch(loadHistory())
    }, [dispatch, systemLanguage]);

    const images = useAppSelector(getImages);

    return (
        <Box>
            <Flex flexWrap="wrap" justifyContent="space-between">
                {images.map((image, index) => (
                    <ImageCard key={index} model={image} />
                ))}
            </Flex>
        </Box>
    );
}
