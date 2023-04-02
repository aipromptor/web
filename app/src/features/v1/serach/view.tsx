import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from 'react-i18next';

const Search: React.FC = () => {

    const { t } = useTranslation('labels');
    const placeholder = t('search-placeholder');
    
    return (
        <Box p={4}>
            <Input placeholder={placeholder} />
        </Box>
    );
};

export default Search;
