import { Switch, HStack, FormControl, Flex, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    toggle,
    toggleLanguages
} from './localeSlice';

export interface TextSwicthProps {
    text: string;
    code: string;
    id: string;
}

export function TextSwicth(props: TextSwicthProps) {

    const dispatch = useAppDispatch();
    return (
        <Flex>
            <FormLabel htmlFor={props.id}>{props.text}</FormLabel>
            <Switch id={props.id} size='lg' defaultChecked aria-label='Show translation'
                onChange={(e) => dispatch(toggle({ id: e.target.id, checked: e.target.checked }))} />
        </Flex>
    )
}

export function LanguageSwitchs() {
    const languages = useAppSelector(toggleLanguages);
    return (
        <FormControl padding='0px 10px' as={HStack}>
            {languages.map(data => (<TextSwicth key={data.id} text={data.text} id={data.id} code={data.code}></TextSwicth>))}
        </FormControl>
    )
}