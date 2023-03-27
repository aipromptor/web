import { ChakraProvider, Container, StackDivider, VStack } from "@chakra-ui/react";
import HeaderV1 from "./header/view";
import { PromptSelectedPanel } from "./selected-panel/view";
import Search from "./serach/view";
function AppV1() {
    return (
        <ChakraProvider>
            <Container maxW="container.lg">
                <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
                    <HeaderV1 />
                    {/* <CategoryTopNavTabs /> */}
                    <Search language="中文" />
                    <PromptSelectedPanel />
                </VStack>
            </Container>
        </ChakraProvider>
    );
}

export default AppV1;
