import React from 'react'
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core'

import Timeline from '../components/Timeline'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <Layout>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Max Countryman
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a magical unicorn!
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="Mastering Next.js"
            description="The premiere video course for building static and server-side rendered applications with Next.js and React."
            href="https://masteringnextjs.com/"
            icon="nextjs"
          />
          <ProjectCard
            title="jamstackfns"
            description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
            href="https://jamstackfns.com/"
            icon="jamstackfns"
          />
        </Flex>
        <Timeline
          activitiesByYear={{
            '2018': [
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
            ],
            '2019': [
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
              {
                title: 'Graduated College 🎓',
                description:
                  'One of my most cherished accomplishments. I worked my ass off toget this degree.',
              },
            ],
          }}
        />
      </Stack>
    </Layout>
  )
}

export default Index
