import { Flex, Heading, StackDivider, VStack } from "@chakra-ui/react";
import LocaleSelector from "../locale/view";
import { useTranslation } from 'react-i18next';

function HeaderV1() {
    const { t } = useTranslation('labels');
    return (
        <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch">
            <Flex alignItems="center" justifyContent="space-between">
                <Heading>{t('title')}</Heading>
                <LocaleSelector />
            </Flex>
        </VStack>
    );
}

export default HeaderV1;
