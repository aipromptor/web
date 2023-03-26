import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setLocale, getCountries, getFlagEmoji } from "./slice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    Switch,
    Text,
    Box,
    Flex,
    FormLabel,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Button,
} from "@chakra-ui/react";
import { RootState } from "../../../app/store";
// import { FlagIcon } from "emoji-flags";
import ReactCountryFlag from "react-country-flag";

import { CloseIcon, CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";

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
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    选择国家
                </MenuButton>
                <MenuList>
                    {countries.map((country) => (
                        <MenuItem minH="48px">
                            <Box boxSize="2rem" borderRadius="full">
                                <ReactCountryFlag countryCode={country.code} svg />
                            </Box>

                            <span>{country.title}</span>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            {/* <FormControl padding="0px 10px" as={HStack}>
                {languages.map((l) => (
                    <Switch key={l.id}>{l.title}</Switch>
                ))}
            </FormControl> */}
        </>
    );
};

export default LocaleSelector;
