import { ChakraProvider, Container, VStack, StackDivider, Heading } from '@chakra-ui/react';
import { CategoryTopNavTabs } from './top-nav/categoryTopNav'
import { LanguageSwitches } from './locale/localeSwitch';
import { PromptSelectedPanel } from './bottom-selected-panel/selected-panel'

function AppV1() {
    return (
        <ChakraProvider>
            <Container maxW='container.xl'>
                <VStack divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'>
                    <Heading>AI Promptor v1.0</Heading>
                    <LanguageSwitches />
                    <CategoryTopNavTabs />
                    <PromptSelectedPanel />
                </VStack>
            </Container>
        </ChakraProvider>
    );
}

export default AppV1;
