import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/layout'
import {Button} from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Container maxW="1300px" display="flex" padding="4" justifyContent="space-between">
            <Flex align="center">
                <Text fontSize="24" fontFamily="Circular Std Book" fontWeight="900">Omega</Text>
            </Flex>
            <Flex align="center" direction="row" fontFamily="Lato" fontWeight="400">
                <Text mr="5" fontSize="16">Home</Text>
                <Text mr="5" fontSize="16">About</Text>
                <Text mr="5" fontSize="16">Contact us</Text>
                <Button bgColor="#f04037" size="lg"><Text fontFamily="Lato" fontWeight="400" fontSize="16" letterSpacing='-0.5'>Get Started</Text></Button>
            </Flex>
        </Container>
    )
}
