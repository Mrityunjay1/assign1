import React from 'react'
import { Text, Heading, Box, Grid} from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import {ListItem, UnorderedList } from "@chakra-ui/react"

export default function Footer() {
    return (
        <Box bgColor="black"
            backgroundRepeat="no-repeat" bgPosition="center" width="100%" mt="70" align="center" p="100">
            <Heading align="center" color="white" fontSize="80" pt="45" fontFamily="Lato" fontWeight="700">Ready to launch?</Heading>
            <Text color="white" align="center" fontSize="21" color="gray" pt="50" fontFamily="Lato" fontWeight="700" maxW="515">Are you interested to join our team? Check out our job openings and apply on your suitable role.</Text>
            <Button bgColor="#f04037" size="lg" mt="20" ><Text fontSize="21"fontFamily="Lato" fontWeight="700">Get Omega Now</Text></Button>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="20" align="center"  fontFamily="Lato">
                <Box w="100%" h="10" >
                    <Text color='white' fontSize="25" fontWeight="700">Omega</Text></Box>
                <Box w="100%" >
                    <Text color='white' fontSize="25" fontWeight="700">About</Text>
                    <UnorderedList styleType="none" mt="10">
                        <ListItem color='gray' fontSize="15">Our Mission</ListItem>
                        <ListItem color='gray' fontSize="15">Our Story</ListItem>
                        <ListItem color='gray' fontSize="15">Team members</ListItem>
                    </UnorderedList>
                </Box>
                <Box w="100%">
                    <Text color='white' fontSize="25" fontWeight="700">Learn</Text>
                    <UnorderedList styleType="none" mt="10">
                        <ListItem color='gray' fontSize="15">Our Mission</ListItem>
                        <ListItem color='gray' fontSize="15">Our Story</ListItem>
                        <ListItem color='gray' fontSize="15">Team members</ListItem>
                    </UnorderedList>
                </Box>
                <Box w="100%" >
                    <Text color='white' fontSize="25" fontWeight="700">Stories</Text>
                    <UnorderedList styleType="none" mt="10">
                        <ListItem color='gray' fontSize="15">Our Mission</ListItem>
                        <ListItem color='gray' fontSize="15">Our Story</ListItem>
                        <ListItem color='gray' fontSize="15">Team members</ListItem>
                    </UnorderedList>
                </Box>
                <Box w="100%" >
                    <Text color='white' fontSize="25" fontWeight="700">Hire</Text>
                    <UnorderedList styleType="none" mt="10">
                        <ListItem color='gray' fontSize="15">Our Mission</ListItem>
                        <ListItem color='gray' fontSize="15">Our Story</ListItem>
                        <ListItem color='gray' fontSize="15">Team members</ListItem>
                    </UnorderedList>
                </Box>
            </Grid>
        </Box>
    )
}
