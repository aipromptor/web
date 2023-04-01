import { ChakraProvider, Container, StackDivider, VStack, HStack, Box } from "@chakra-ui/react";
import HeaderV1 from "./header/view";
import { PromptSelectedPanel } from "./selected-panel/view";
import Search from "./serach/view";
import LeftNavigate from "./left-navigate/view";

function AppV1() {
    return (
        <ChakraProvider>
            <VStack id="main" justifyContent='center' divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
                <Container maxW='3xl'>
                    <HeaderV1 />
                </Container>


                <HStack justifyContent='center' alignItems='inherit'>
                    <Box id="left-navigate">
                        <LeftNavigate language="中文" />
                    </Box>
                    <Container id="main-content" minW='3xl'>
                        <Search language="中文" />
                        <PromptSelectedPanel />
                    </Container>

                </HStack>

            </VStack>

        </ChakraProvider>
    );
}

export default AppV1;
