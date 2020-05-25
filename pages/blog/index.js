import React, { useState } from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/core'
import { getSortedBlogsData } from '../../lib/blog'
import Layout from '../../components/layout'
import Subscribe from '../../components/subscribe'
import BlogPost from '../../components/blogPost'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allBlogsData = getSortedBlogsData()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allBlogsData,
    },
  }
}

const Blog = ({ allBlogsData }) => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  const redTextColor = {
    light: 'gray.700',
    dark: 'red.100',
  }
  const yellowTextColor = {
    light: 'gray.700',
    dark: 'yellow.100',
  }
  const filteredBlogPosts = allBlogsData
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <>
      <Layout>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          width="100%"
          maxWidth="700px"
        >
          <Flex
            spacing={8}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading
              color={redTextColor[colorMode]}
              letterSpacing="tight"
              mb={2}
              as="h1"
              size="2xl"
            >
              ✍🏻 Blog
            </Heading>
            <Text mb={4} color={secondaryTextColor[colorMode]}>
              I'm planning to keep this page updated in the next few days! This
              blog revolves mostly around the magical field of software
              engineering (
              <i>with a sprinkle of monologues about my life experiences</i>).
            </Text>
            <Text color={secondaryTextColor[colorMode]}>
              This is a time capsule for me to look back at some of the
              highlights in my life. Subscribe to the newsletter if you enjoy my
              content.
            </Text>
            <Subscribe />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            width="100%"
            mt={8}
          >
            <Heading
              color={yellowTextColor[colorMode]}
              letterSpacing="tight"
              mb={4}
              size="xl"
              fontWeight={700}
            >
              All Posts
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              Use the search below to filter by title.
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Layout>
    </>
  )
}

export default Blog
