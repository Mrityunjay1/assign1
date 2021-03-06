import React from 'react'
import {Stack,Text,Heading} from "@chakra-ui/layout"
import {Link} from '@chakra-ui/react'
export default function RecentPost({post}) {
    return (
        <Stack width="30rem" boxShadow="lg" borderRadius="lg" overflow="hidden" mt='10'>
            <img src="https://bit.ly/3zA3IX8" alt="New" />
            <Stack p="4">
                <Text>{post.date}</Text>
                <Stack>
                    <Heading fontFamily="Lato" fontWeight="700" fontSize="21">{post.title}</Heading>
                    <Text fontFamily="Lato" fontWeight="400" fontSize="16">{post.description}</Text>
                    <Link href="https://chakra-ui.com" isExternal color="red">
                        Continue Reading
                    </Link>
                </Stack>
            </Stack>

        </Stack>
    )
}
