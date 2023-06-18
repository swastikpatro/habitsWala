import {
  Box,
  Button,
  Container,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import { HabitCard, HabitModal } from '../components';
import { useHabitsContext } from '../HabitsContextProvider';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { habits } = useHabitsContext();
  return (
    <Box as='main' mb='3rem'>
      <Heading mt='1rem' as='h2' textAlign='center' color={'blue'}>
        Habits
      </Heading>

      <Button display='block' m='0 auto' my='2rem' onClick={onOpen}>
        Add Habit
      </Button>

      <HabitModal isAdding isOpen={isOpen} onClose={onClose} />

      <Container
        w='90vw'
        maxW='1170px'
        m='auto'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, minmax(15rem, 1fr))'
        gap={'2rem'}
      >
        {habits.length < 1 ? (
          <p>No habits currently, create one quickly</p>
        ) : (
          habits.map((singleHabit) => (
            <HabitCard key={singleHabit.id} habitData={singleHabit} />
          ))
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
