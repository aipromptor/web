import {
    Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, IconButton, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text,
    VStack
} from "@chakra-ui/react";

import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useTranslation } from 'react-i18next';
import { useAppSelector } from "../../../app/hooks";
import { getImages, ImageCardState } from "./slice";

const ImageCard: React.FC<{ model: ImageCardState }> = ({ model }) => {

    const { t } = useTranslation(['actions', 'labels']);
    const promptLabel = t('prompt', { ns: 'labels' });
    const negativePromptLabel = t('negativePrompt', { ns: 'labels' });
    const src = model.base64RawData ? `data:image/png;base64,${model.base64RawData}` : model.url ? model.url : '';

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

                    <Popover placement='right'>
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
                    </Popover>

                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={src}
                alt='Chakra UI'
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
                <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    );
}

export function ImageScrollPanel() {

    const images = useAppSelector(getImages);

    return (
        <Box>
            <Flex flexWrap="wrap">
                {images.map((image, index) => (
                    <ImageCard key={index} model={image} />
                ))}
            </Flex>
        </Box>
    );
}
