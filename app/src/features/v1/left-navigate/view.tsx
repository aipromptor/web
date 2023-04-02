import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from 'react-i18next';
import { MdHome, MdWhatshot } from 'react-icons/md'
interface LeftNavigateProps {
    language: string;
}

const LeftNavigate: React.FC<LeftNavigateProps> = ({ language }) => {
    const { t } = useTranslation('actions');
    const size = 'lg';
    return (
        <VStack alignItems='flex-start' minW='3xs'>
            <Button colorScheme='gray' variant='ghost' leftIcon={<MdHome />}> {t('home')}</Button>
            <Button colorScheme='gray' variant='ghost' leftIcon={<MdWhatshot />}> {t('trending-now')}</Button>
        </VStack>
    );
};

export default LeftNavigate;
