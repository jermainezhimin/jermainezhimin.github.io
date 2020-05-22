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

import Timeline from '../components/Timeline'
import Layout from '../components/layout'
import ProjectCard from '../components/ProjectCard'

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
          alignItems="flex-start"
          maxWidth="700px"
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
                  points: [
                    'Coordinating and designing product direction, system architecture and corresponding engineering tickets.',
                    'Added soft deletions, change history and data encryption(with vault) on the web serverside.',
                    'Building the end to end product webfront with sagas, redux, react and typescript.',
                    'Updated configurations(i.e. webpacker, webpack, babel, eslint, jest), purged npm packages and introduced typescript to the codebase.',
                    'Developed demo application allowing users to test our real-time predictions and view use cases related to image segmentation via deep learning.',
                    'Maintained the annotation and prediction overlay interface.',
                  ],
                },
              ],
              '2018': [
                {
                  title: 'Joined Sisense',
                  description:
                    'In May 2019, Periscope Data signed a definitive agreement to merge with Sisense.',
                  points: [
                    "Rearchitecting/Integrating Periscope Data's features (warehouse administration, editor/query execution, view management) within the Sisense product as part of the first ship team.",
                    'Migrating Rails REST API to GraphQL interfaces with service federation.',
                    'Setting up front-end project using Typescript, React Hooks, routing, localization and the corresponding continuous integrations.',
                  ],
                },
                {
                  title: 'Joined Periscope Data',
                  points: [
                    'Built Periscope Data’s summary statistics, code templates, plot.ly integrations, custom modules (within a team).',
                    'Maintain micro-services to run Python and R within the web app.',
                  ],
                },
              ],
              '2016': [
                {
                  title: 'Joined Apple',
                  points: [
                    'Designed and developed a full stack pipeline for retrieving SMC data from remote Mac Pro and Mac Mini servers to assist sysadmins.',
                    'Designed and developed the user experience and interface of Apple’s internal REST API documentation platform.',
                    'Designed and developed 6 iOS applications for researching interpolated nearest neighbor location positioning with BLE technology.',
                    'Designed and developed an event logging platform for server status changes and configurations.',
                    'Designed and developed a framework to orchestrate remote device network testing.',
                    'Designed and prototyped a full stack pipeline to securely deliver/store secrets to iOS devices.',
                    'Conducted user experience testing to benchmark Apple’s internal file sharing systems in APAC.',
                  ],
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
