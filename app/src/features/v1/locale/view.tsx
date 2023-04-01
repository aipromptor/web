import {
    Box, Button, Menu,
    MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCountries } from "./slice";
// import { FlagIcon } from "emoji-flags";
import ReactCountryFlag from "react-country-flag";

import { ChevronDownIcon } from "@chakra-ui/icons";

const LocaleSelector = () => {
    const dispatch = useAppDispatch();

    const countries = useAppSelector(getCountries);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // dispatch(setLanguage(event.target.value as "en" | "zh-CN"));
    };

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // dispatch(setLocale(e.target.value));
    };

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                选择国家
            </MenuButton>
            <MenuList>
                {countries.map((country) => (
                    <MenuItem minH="48px" key={country.code}>
                        <Box boxSize="2rem" borderRadius="full">
                            <ReactCountryFlag countryCode={country.code} svg />
                        </Box>

                        <span>{country.title}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default LocaleSelector;
