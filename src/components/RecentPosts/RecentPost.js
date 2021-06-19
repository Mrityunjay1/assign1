import React from 'react'
import {Stack,Text,Heading} from "@chakra-ui/layout"
import {Image} from '@chakra-ui/image'
import {Link} from '@chakra-ui/react'
export default function RecentPost({post}) {
    return (
        <Stack width="30rem" boxShadow="lg" borderRadius="lg" overflow="hidden" mt='10'>
            <Image src={post.imgurl} />
            <Stack p="4">
                <Text>{post.date}</Text>
                <Stack>
                    <Heading fontFamily="Circular Std Book" fontWeight="700" fontSize="21">{post.title}</Heading>
                    <Text fontFamily="Circular Std Book" fontWeight="500" fontSize="16">{post.description}</Text>
                    <Link href="https://chakra-ui.com" isExternal color="red">
                        Continue Reading
                    </Link>
                </Stack>
            </Stack>

        </Stack>
    )
}