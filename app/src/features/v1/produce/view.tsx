import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from 'react-i18next';
import { MdDraw } from 'react-icons/md';

interface DrawNavigateProps {
    language: string;
}

const DrawNavigate: React.FC<DrawNavigateProps> = ({ language }) => {
    const { t } = useTranslation('actions');
    return (
        <HStack alignItems='flex-start'>
            <Button colorScheme='blue' leftIcon={<MdDraw />}>
                {t('draw-now')}
            </Button>
        </HStack>
    );
};

export default DrawNavigate;
