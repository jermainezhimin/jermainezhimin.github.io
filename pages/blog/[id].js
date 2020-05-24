import React from 'react'
import remark from 'remark'
import react from 'remark-react'
import Link from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Box,
} from '@chakra-ui/core'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { BlogComponents } from '../../components/blogComponents'
import { getAllBlogIds, getBlogData } from '../../lib/blog'

const editUrl = (slug) =>
  `https://github.com/jermaine/blog/edit/master/blogs/${slug}.md`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`

export default function Post({ postData }) {
  const article = remark()
    .use(react, {
      remarkReactComponents: BlogComponents,
    })
    .processSync(postData.contents).result
  const { colorMode } = useColorMode()
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <Layout>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {postData.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Jermaine Countryman"
                src="/images/profile.jpeg"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {'Jermaine Countryman / '}
                <Date dateString={postData.date} />
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {article}
        <Box>
          <Link href={discussUrl(postData.id)} isExternal>
            {'Discuss on Twitter'}
          </Link>
          {` • `}
          <Link href={editUrl(postData.id)} isExternal>
            {'Edit on GitHub'}
          </Link>
        </Box>
      </Stack>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getBlogData(params.id)
  return {
    props: {
      postData,
    },
  }
}
