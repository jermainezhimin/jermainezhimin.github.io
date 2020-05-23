import React from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Icon,
  Stack,
  Divider,
  Box,
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
  return (
    <>
      {Object.keys(activitiesByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year, index) => {
          const activities = activitiesByYear[year]
          return (
            <div key={year}>
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
                    <Box as="ul" pt={2} pl={4} ml={2}>
                      {activity.points.map((point) => (
                        <Box key="point" as="li" pb={1}>
                          {point}
                        </Box>
                      ))}
                    </Box>
                  </TimelineStep>
                ))}
              </List>
            </div>
          )
        })}
    </>
  )
}

export default Timeline
