import { ChakraProvider, Container, Heading, StackDivider, VStack, Flex } from "@chakra-ui/react";
import LocaleSelector from "./locale/view";
import { PromptSelectedPanel } from "./selected-panel/view";
import HeaderV1 from "./header/view";

function AppV1() {
    return (
        <ChakraProvider>
            <Container maxW="container.lg">
                <HeaderV1/>
                <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">

                    {/* <CategoryTopNavTabs /> */}
                    <PromptSelectedPanel />
                </VStack>
            </Container>
        </ChakraProvider>
    );
}

export default AppV1;
