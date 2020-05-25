import React from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Icon,
  Link,
  Divider,
} from '@chakra-ui/core'

import Timeline from '../components/timeline'
import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  const redTextColor = {
    light: 'black',
    dark: 'red.100',
  }
  const yellowTextColor = {
    light: 'black',
    dark: 'yellow.100',
  }
  const greenTextColor = {
    light: 'black',
    dark: 'green.100',
  }
  // const blueTextColor = {
  //   light: 'black',
  //   dark: 'blue.200',
  // }

  const purpleColor = {
    light: 'purple.600',
    dark: 'purple.400',
  }
  const grayColor = {
    light: 'gray.400',
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
        w="100%"
      >
        <Flex
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
            👋 Hello, I’m Jermaine!
          </Heading>
          <Text mb={4} color={secondaryTextColor[colorMode]}>
            I'm a Singaporean maker over paying rent in San Francisco,
            California 🇸🇬🇺🇸. In my day job, I mostly run up and down the
            software stack as a fullstack engineer (
            <i>with a focus on frontend engineering</i>).
          </Text>
          <Text mb={4} color={secondaryTextColor[colorMode]}>
            I enjoy feature development and working on products that matter! Now
            that I've been working for a couple of years, I decided to create
            this blog to jot down things I wish I knew while working in this
            industry:
            <Box as="ul" pt={2} pl={4} ml={2}>
              <Box as="li" pb={1}>
                Soft skills
              </Box>
              <Box as="li" pb={1}>
                Technology and trends
              </Box>
              <Box as="li" pb={1}>
                Product Development
              </Box>
            </Box>
          </Text>
          <Text color={secondaryTextColor[colorMode]}>
            Feel free to{' '}
            <Link
              color={'blue.400'}
              href="mailto:jermainezhimin@gmail.com"
              title="Email"
              isExternal
            >
              reach out
            </Link>
            ; I enjoy chatting with folk.
          </Text>
        </Flex>
        <Box w="100%">
          <Divider />
          <Flex w="100%" justifyContent="space-evenly" alignItems="center">
            <Icon
              aria-label={'periscopedata'}
              name={'periscopedata'}
              color={purpleColor[colorMode]}
              size={['50px', '50px', '60px']}
              ml={2}
              mr={4}
            />
            <Icon
              aria-label={'apple'}
              name={'apple'}
              color={grayColor[colorMode]}
              size={['50px', '50px', '60px']}
              ml={2}
              mr={4}
            />
            <Icon
              aria-label={'sisense'}
              name={'sisense'}
              size={['50px', '50px', '60px']}
              ml={2}
              mr={4}
            />
            <Icon
              aria-label={'crowdai'}
              name={'crowdai'}
              size={['75px', '75px', '100px']}
              ml={2}
              mr={4}
            />
          </Flex>
          <Divider />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading
            color={yellowTextColor[colorMode]}
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
          >
            Project
          </Heading>
          <ProjectCard
            title="Objective: Object Collective Tarot Deck"
            description="An illustration project to reimagine the Rider-Waite tarot deck as relatable items/animals in the 21st century"
            href="https://www.kickstarter.com/projects/1988162704/objective-object-collective-tarot-deck"
            icon="objective"
            size="56px"
          />
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
          w="100%"
        >
          <Heading
            color={greenTextColor[colorMode]}
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
          >
            Timeline
          </Heading>
          <Timeline
            activitiesByYear={{
              '2019': [
                {
                  title: 'Joined CrowdAI',
                  description:
                    "With a leap of faith, I jumped into a seed stage startup to flex my engineering muscle; bringing frontend engineering to the table. Here I got to build the company's vision of it's product from the ground up.",
                },
              ],
              '2018': [
                {
                  title: 'Joined Sisense',
                  description:
                    'In May 2019, Periscope Data signed a definitive agreement to merge with Sisense. Having front row seats to a company merger is SCAR-Y, I got to build the integrated product!',
                  tags: {
                    warehouse_tab:
                      'https://www.youtube.com/watch?v=s_4lK-MXhsk',
                  },
                },
                {
                  title: 'Joined Periscope Data',
                  description:
                    'One of my best experiences in the industry! Also, I got to build really cool technology to run python in the web.',
                  tags: {
                    custom_modules:
                      'https://dtdocs.sisense.com/article/custom-modules',
                    r_and_python_integration:
                      'https://dtdocs.sisense.com/article/r-and-python',
                    summary_stats:
                      'https://dtdocs.sisense.com/article/statistics',
                  },
                },
              ],
              '2016': [
                {
                  title: 'Joined Apple',
                  description:
                    'My first job out of college working in the Content Delivery Network(CDN) team. Learning to work in a software team was rough!',
                },
              ],
              '2015': [
                {
                  title: 'Switch to Computer Engineering Major',
                  description:
                    "I've tried mechanical, eletrical and chemical engineering and at this point nothing really stood out. I went back to software engineering (building something by myself from scratch was fun).",
                },
              ],
              '2014': [
                {
                  title: 'Join Game Innovation Program',
                  description:
                    'My first interaction with creating games as a game designer intern. It was alot of work and butting of heads before producing Skyward.',
                  tags: {
                    skyward: 'https://www.youtube.com/watch?v=s_4lK-MXhsk',
                  },
                },
              ],
              '2013': [
                {
                  title: 'Took my first CS elective',
                  description:
                    'I scored a 20 out of 100 in the finals; and thought coding was not for me.',
                },
              ],
            }}
          />
        </Flex>
      </Stack>
    </Layout>
  )
}

export default Index
