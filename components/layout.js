import React from 'react'
import NextLink from 'next/link'
import Head from 'next/head'
import styled from '@emotion/styled'
import {
  useColorMode,
  Button,
  Flex,
  Box,
  IconButton,
  Icon,
} from '@chakra-ui/core'
import Footer from './footer'

const site = 'http://www.jermainecheng.com'
const siteTitle = "Jermaine's Blog"
const siteDescription =
  'Read articles about the magical field of software engineering'
const sitePreview = '/images/preview.png'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`
const MainIcon = styled(Icon)`
  transition: color 0.25s;
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
  &:hover {
    color: #00bfa5;
  }
`

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  }
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  }
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)',
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="title" content="Jermaine's Blog" />
        <meta
          name="description"
          content="Read articles about the magical field of software engineering"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={sitePreview} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site} />
        <meta property="twitter:site" content="@jermainezhimin" />
        <meta property="twitter:creator" content="@jermainezhimin" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image:width" content="1280" />
        <meta property="twitter:image:height" content="800" />
        <meta property="twitter:image:src" content={sitePreview} />
      </Head>
      <StickyNav
        flexDirection="row"
        alignItems="center"
        maxWidth="700px"
        width={['calc(100% - 64px)', 'calc(100% - 64px)', '100%']}
        height="64px"
        bg={navBgColor[colorMode]}
        as="nav"
        mt={[0, 8]}
        mb={8}
        mx={[8, 8, 'auto']}
      >
        <NextLink href="/" passHref>
          <MainIcon
            aria-label="Jermaine"
            name="jermaine"
            size="40px"
            color={primarytextColor[colorMode]}
            variant="ghost"
            cursor="pointer"
          />
        </NextLink>
        <Box ml="auto">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <IconButton
            aria-label="Toggle dark mode"
            ml={2}
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
          />
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
