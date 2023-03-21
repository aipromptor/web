import { ChakraProvider, Container, VStack, StackDivider, Heading, Spacer } from '@chakra-ui/react';
import { PromptScopeTopNavTabs } from './top-nav/promptScopeTopNav'
import { LanguageSwitchs } from './locale/localeSwitch';

function AppV1() {
    return (
        <ChakraProvider>
            <Container maxW='container.xl'>
                <VStack divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'>
                    <Heading>AI Promptor v1.0</Heading>
                    <LanguageSwitchs />
                    <PromptScopeTopNavTabs />
                </VStack>
            </Container>
        </ChakraProvider>
    );
}

export default AppV1;