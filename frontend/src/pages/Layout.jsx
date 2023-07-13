import React from 'react';
import { Box, Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from "react-icons/fa";


/*
    * Layout is a wrapper component that will be used to wrap all the pages in the app.
    * It contains an optional header and footer, and a toggle for switching between light/dark mode.
*/


const Layout = ({ component: Component, showHeader, showFooter }) => {

    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Box>
            {showHeader && (
                <header>
                    <Flex justifyContent="center" alignItems="center" height="100px" bg="gray.200">
                        Header
                    </Flex>
                </header>
            )}
            <Box p={4} display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection={{ base: "column", md: "row" }}>
                <Component />
            </Box>
            {showFooter && (
                <footer>
                    <Flex justifyContent="center" alignItems="center" height="100px" bg="gray.200">
                        Footer
                    </Flex>
                </footer>
            )}
            
            <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="xs"
                position="absolute"
                top={5}
                right={5}
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />
        </Box>
    );
};

export default Layout;
