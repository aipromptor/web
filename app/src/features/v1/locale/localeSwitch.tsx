import { Switch, Box, Spacer, HStack, SimpleGrid, FormControl, Grid, Flex, FormLabel } from '@chakra-ui/react'

export interface TextSwicthProps {
    text: string;
    id: string;
}

export function TextSwicth(props: TextSwicthProps) {
    return (
        <Flex>
            <FormLabel htmlFor={props.id}>{props.text}</FormLabel>
            <Switch id={props.id} size='lg' defaultChecked />
        </Flex>
    )
}

export function LanguageSwitchs() {
    const languages = [{ id: 'lan-1', text: 'English' }, { id: 'lan-2', text: '中文简体' }];
    return (
        <FormControl padding='0px 10px' as={HStack}>
            {languages.map(data => (<TextSwicth text={data.text} id={data.id}></TextSwicth>))}
        </FormControl>
    )
}