import { Spinner, Box } from "@chakra-ui/react";

function Loading() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
            <Spinner size="xl" speed="1.0s" emptyColor="gray.200" thickness="4px" color="green.500" />
        </Box>
    );
}

export default Loading;
