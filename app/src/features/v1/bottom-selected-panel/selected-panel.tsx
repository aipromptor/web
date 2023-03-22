import { Card, Heading, CardHeader, CardBody, Text, Button, CardFooter, } from '@chakra-ui/react'
import { CheckIcon, AddIcon } from '@chakra-ui/icons'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { useEffect } from 'react';


export function PromptSelectedPanel() {
    return (
        <Card align='center'>
            <CardBody>
                
            </CardBody>
            <CardFooter alignItems='end' justifyContent='space-between' width='100%'>
                <Button colorScheme='blue'>一键出图</Button>
                <Text>已选提示词</Text>
            </CardFooter>
        </Card>)
};