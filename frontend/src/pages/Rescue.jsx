import { useState } from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,
    Button,
    Text,
    Box,
} from "@chakra-ui/react";

function Rescue() {
    const [tabIndex, setTabIndex] = useState(0);
    const [repoLink, setRepoLink] = useState("");

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    const handleRepoLinkChange = (event) => {
        setRepoLink(event.target.value);
    };

    const handleRepoLinkSubmit = () => {
        // Handle submission of repo link
        console.log("Submitting repo link:", repoLink);
    };

    return (
        <Box flexDirection={{ base: "column", md: "row" }} display="flex" justifyContent="center" alignItems="center" height="100vh" width={{ base: "90vw", md: "100vw" }}>
            <Tabs index={tabIndex} onChange={handleTabChange} width={{ base: "100%", md: "50%" }} isFitted variant="soft-rounded" align="center" mt={4} colorScheme="green">
                <TabList>
                    <Tab>Direct Link</Tab>
                    <Tab isDisabled>My Repositories</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Text mb={4} textAlign="left" fontSize="xl" fontWeight="thin" color="gray.500">
                            Input a direct link to the repository
                        </Text>
                        <Input
                            placeholder="Enter repository link"
                            value={repoLink}
                            onChange={handleRepoLinkChange}
                        />
                        <Button onClick={handleRepoLinkSubmit} mt={4} colorScheme="green" size="md" width="100%">
                            Submit
                        </Button>
                    </TabPanel>

                    <TabPanel>
                        <Text>Select from your own repositories</Text>
                        {/* Add code to display user's repositories */}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default Rescue;
