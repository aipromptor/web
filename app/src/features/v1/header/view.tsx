import { Flex, Heading, Spacer, StackDivider, VStack } from "@chakra-ui/react";
import LocaleSelector from "../locale/view";

function HeaderV1() {
    return (
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" mt={4}>
            <Flex alignItems="center" justifyContent="space-between">
                <Heading>AI Promptor v1.0</Heading>
                <LocaleSelector />
            </Flex>
        </VStack>
    );
}

export default HeaderV1;
