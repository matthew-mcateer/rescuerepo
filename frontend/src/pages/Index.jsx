import React from "react";
import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Button } from "@chakra-ui/react";


const Index = () => {

    return (
        <>
            <Box display="flex" flexDirection="column">
                <Box textAlign="center">
                    <Heading as="h1" size={{ base: '3xl', md: '4xl' }} mb={4}>
                        Rescue Repo
                    </Heading>
                    <Text fontSize="xl" fontWeight="thin">
                        Breathe a second life into your dead repos.
                    </Text>
                </Box>
                <Button mt={4} colorScheme="green" size="md">
                    Login With GitHub
                </Button>
            </Box>
            <Box mx='10' w={{ base: '100%', md: '50%' }}>
                <Accordion mt={4} allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                What is Rescue Repo?
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            Rescue Repo is a tool that can take old bioinformatics code repositories, and update them to work with the latest versions of their dependencies. It can also update the code to use the latest versions of the languages they are written in.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                How does it work?
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            Using industry-leading large language models (LLMs), Rescue Repo can "understand" the code in your repository, and make the necessary changes, project-wide.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Where do I get started?
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            To get started, simply login with your GitHub account, and select a repository to rescue. Rescue Repo will then analyze the code in your repository, and make the necessary changes which will live in a new GitHub Codespace.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    );
};

export default Index;
