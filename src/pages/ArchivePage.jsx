import React from 'react';
import { useHabitsContext } from '../HabitsContextProvider';
import { Box, Container, Heading } from '@chakra-ui/react';
import { HabitCard } from '../components';

const ArchivePage = () => {
  const { habits } = useHabitsContext();

  const archivedHabits = habits.filter(({ isArchived }) => isArchived);
  return (
    <Box as='main' mb='3rem'>
      <Heading my='1rem' as='h2' textAlign='center' color={'red'}>
        Archives
      </Heading>

      <Container
        w='90vw'
        maxW='1170px'
        m='auto'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, minmax(15rem, 1fr))'
        gap={'2rem'}
      >
        {archivedHabits.length < 1 ? (
          <p>No Archived habits currently</p>
        ) : (
          archivedHabits.map((singleHabit) => (
            <HabitCard key={singleHabit.id} habitData={singleHabit} />
          ))
        )}
      </Container>
    </Box>
  );
};

export default ArchivePage;
