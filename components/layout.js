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

const siteTitle = "Jermaine's Blog"

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
        <meta
          name="description"
          content="Read articles about the magical field of software engineering"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            'hi'
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="og:url" content="http://www.jermainecheng.com" />
        <meta name="twitter:card" content="summary_large_image" />
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
