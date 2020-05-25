import React from 'react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core'
import Date from './date'

const SelectableBox = styled(Box)`
  transition: background-color 0.25s;
  :hover {
    background-color: ${(props) => props.hoverBg};
  }
`

const BlogPost = ({ id, title, summary, date }) => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  const slug = id

  return (
    <NextLink href={'/blog/[id]'} as={`/blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <SelectableBox
          borderRadius="md"
          mb={8}
          p={2}
          hoverBg={colorMode === 'light' ? '#ebf8ff' : '#1A202C'}
          display="block"
          width="100%"
        >
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Heading
              size="md"
              as="h3"
              mb={2}
              mr={5}
              whiteSpace="wrap"
              fontWeight="medium"
            >
              {title}
            </Heading>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              <Date dateString={date} />
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </SelectableBox>
      </Link>
    </NextLink>
  )
}

export default BlogPost
