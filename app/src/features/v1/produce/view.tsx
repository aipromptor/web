import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { MdDraw } from 'react-icons/md'
import { useTranslation } from 'react-i18next';

interface DrawNavigateProps {
    language: string;
}

const DrawNavigate: React.FC<DrawNavigateProps> = ({ language }) => {
    const { t } = useTranslation('actions');
    return (
        <HStack alignItems='flex-start' minW='3xs'>
            <Button colorScheme='blue' leftIcon={<MdDraw />}>
                {t('draw-now')}
            </Button>
        </HStack>
    );
};

export default DrawNavigate;
