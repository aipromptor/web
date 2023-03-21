import { Switch, HStack, FormControl, Flex, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    toggle,
    toggleLanguages
} from './localeSlice';

export interface TextSwitchProps {
    text: string;
    code: string;
    id: string;
}

export function TextSwitch(props: TextSwitchProps) {

    const dispatch = useAppDispatch();
    return (
        <Flex>
            <FormLabel htmlFor={props.id}>{props.text}</FormLabel>
            <Switch id={props.id} size='lg' defaultChecked aria-label='Show translation'
                onChange={(e) => dispatch(toggle({ id: e.target.id, checked: e.target.checked }))} />
        </Flex>
    )
}

export function LanguageSwitches() {
    const languages = useAppSelector(toggleLanguages);
    return (
        <FormControl padding='0px 10px' as={HStack}>
            {languages.map(data => (<TextSwitch key={data.id} text={data.text} id={data.id} code={data.code}></TextSwitch>))}
        </FormControl>
    )
}