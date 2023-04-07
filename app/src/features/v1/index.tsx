import { ChakraProvider, Container, Flex, HStack, StackDivider, VStack } from "@chakra-ui/react";
import HeaderV1 from "./header/view";
import LeftNavigate from "./left-navigate/view";
import { PromptSelectedPanel } from "./selected-panel/view";

function AppV1() {
    return (
        <ChakraProvider>
            <VStack id="main" justifyContent='center' divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">

                <HStack justifyContent='center' alignItems='inherit' spacing={4} mt={4}>
                    <Flex id='left-top-actions' maxW='md' minW='3xs'>
                        {/* <DrawNavigate language="中文" /> */}
                    </Flex>
                    <Container minW='6xl'>
                        <HeaderV1 />
                    </Container>
                </HStack>
                <HStack id="middle" justifyContent='center' alignItems='inherit' divider={<StackDivider borderColor="gray.200" />} >

                    <Flex id="left-navigate">
                        <LeftNavigate language="中文" />
                    </Flex>

                    <VStack>
                        <Container id="main-content" minW='6xl'>
                            {/* <Search /> */}
                            <PromptSelectedPanel />
                        </Container>

                    </VStack>

                </HStack>
            </VStack>

        </ChakraProvider>
    );
}

export default AppV1;
