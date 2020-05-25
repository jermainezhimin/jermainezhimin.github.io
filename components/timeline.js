import React, { useState } from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Link,
  Icon,
  Stack,
  Divider,
  Tag,
  TagIcon,
  TagLabel,
  Button,
} from '@chakra-ui/core'

const YearDivider = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
}

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode()
  const color = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  )
}

const Timeline = ({ activitiesByYear }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      {Object.keys(activitiesByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year, index) => {
          const activities = activitiesByYear[year]
          if (index < 2 || expanded) {
            return (
              <div style={{ width: '100%' }} key={year}>
                {index !== 0 && <YearDivider />}
                <Heading
                  as="h3"
                  size="lg"
                  fontWeight="bold"
                  mb={4}
                  letterSpacing="tighter"
                >
                  {year}
                </Heading>
                <List>
                  {activities.map((activity) => (
                    <TimelineStep key={activity.title} title={activity.title}>
                      {activity.description}
                      {activity.tags && (
                        <Stack flexWrap="wrap" mt={4} spacing={4} isInline>
                          {Object.keys(activity.tags).map((tag) => (
                            <Link
                              mt={2}
                              key={tag}
                              href={activity.tags[tag]}
                              title={activity.tags[tag]}
                              isExternal
                            >
                              <Tag size="sm" key={tag}>
                                <TagIcon icon="link" size="12px" />
                                <TagLabel>{tag}</TagLabel>
                              </Tag>
                            </Link>
                          ))}
                        </Stack>
                      )}
                    </TimelineStep>
                  ))}
                </List>
              </div>
            )
          }
        })}
      <Button
        fontWeight="medium"
        rightIcon={expanded ? 'chevron-up' : 'chevron-down'}
        onClick={() => setExpanded(!expanded)}
        variant="ghost"
      >
        See {expanded ? 'Less' : 'More'}
      </Button>
    </>
  )
}

export default Timeline
