/* eslint-disable react/prop-types */
import { Box, Button, Heading, Spacer, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHabitsContext } from '../HabitsContextProvider';

const HabitCard = ({ habitData }) => {
  const { deleteHabitDispatch, archiveHabitDispatch, editHabitDispatch } =
    useHabitsContext();
  const [showDetails, setShowDetails] = useState(false);

  const {
    id: habitId,
    name,
    repeat,
    timeOfDay,
    goal,
    start,
    isArchived,
  } = habitData;
  const location = useLocation();
  const isInArchivePage = location.pathname === '/archives';

  if (isArchived && !isInArchivePage) {
    return null;
  }

  return (
    <Box as='article' border='2px solid #222' borderRadius='md' h='fit-content'>
      <Box as='div' minH='5rem' p='2rem'>
        <Heading as='h4' textAlign={'center'} mb='1rem'>
          {name}
        </Heading>

        <Spacer />
        {!isInArchivePage && (
          <Button
            display={'block'}
            m='auto'
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide' : 'Show'} Details
          </Button>
        )}
      </Box>

      {showDetails && (
        <Box as='div' p='2rem' borderTop='1px solid gray'>
          <Text mb='.5rem'>Repeat: {repeat}</Text>
          <Text mb='.5rem'>Time of day: {timeOfDay}</Text>
          <Text mb='.5rem'>Goal: {goal}</Text>
          <Text mb='.5rem'>Start Date: {start}</Text>

          <Box
            as='div'
            display={'flex'}
            flexWrap={'wrap'}
            gap={'1rem'}
            mt='.5rem'
          >
            <Button>Edit</Button>
            <Button onClick={() => deleteHabitDispatch(habitId)}>Delete</Button>

            <Button onClick={() => archiveHabitDispatch(habitId)}>
              Archive
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HabitCard;
