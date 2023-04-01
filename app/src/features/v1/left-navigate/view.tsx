import { Box, VStack, HStack, Button, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";


interface LeftNavigateProps {
    language: string;
}

const LeftNavigate: React.FC<LeftNavigateProps> = ({ language }) => {
    return (
        <VStack>
            <Button colorScheme='gray' variant='ghost'>WhiteAlpha</Button>
            <Button colorScheme='gray' variant='ghost'>BlackAlpha</Button>
        </VStack>
    );
};

export default LeftNavigate;
