import React from 'react'
import RecentPost from './RecentPost'
import { Grid, GridItem, Container } from "@chakra-ui/layout"
import { Posts } from './Posts'

export default function PostCard() {
    return (
        <Container maxW="800px">

            <Grid gridGap="5" gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))">
                {Posts.map((post) => (
                    <GridItem key={post.id} display="flex" justifyContent="center">
                        <RecentPost 
                            post={post}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}
