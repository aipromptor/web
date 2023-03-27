import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

interface SearchProps {
    language: string;
}

const Search: React.FC<SearchProps> = ({ language }) => {
    return (
        <Box p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                搜索 {language} AI 提示词
            </Text>
            <Input placeholder={`输入${language}提示词`} />
        </Box>
    );
};

export default Search;
