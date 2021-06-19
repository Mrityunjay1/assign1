import React from 'react'
import {Container,Text} from '@chakra-ui/layout'

export default function Hero() {
    return (
        <Container maxW="1300px" alignItems="center">
            <Text align="center" mt="100" fontSize="80" fontFamily="Circular Std Book" fontWeight="900">Blog Regular</Text>
            <Text align="center" mt="10" fontSize="21" color="gray.500" fontFamily="Circular Std Book" fontWeight="450">Create custom landing pages with Omega that 
            converts more visitors than any website. </Text>
        </Container>
    )
}
