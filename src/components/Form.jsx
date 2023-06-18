import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useHabitsContext } from '../HabitsContextProvider';

const Form = ({ isAdding, edittingData, onClose }) => {
  const { addToHabitsDispatch } = useHabitsContext();
  const [inputs, setInputs] = useState({
    name: '',
    repeat: '',
    timeOfDay: '',
    goal: '',
    start: '',
  });

  const updateInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <FormControl>
      <Box as='div'>
        <FormLabel>Habit Name: </FormLabel>
        <Input
          type='text'
          name='name'
          value={inputs.name}
          onChange={updateInput}
        />
      </Box>

      <Box as='div'>
        <FormLabel>Repeat: </FormLabel>
        <Select
          name='repeat'
          placeholder='Select Repeat'
          value={inputs.repeat}
          onChange={updateInput}
        >
          <option value='None'>None</option>
          <option value='Daily'>Daily</option>
          <option value='Weekly'>Weekly</option>
          <option value='Monthly'>Monthly</option>
        </Select>
      </Box>
      <Box as='div'>
        <FormLabel>Time of day: </FormLabel>
        <Select
          name='timeOfDay'
          placeholder='Select Time of day'
          onChange={updateInput}
          value={inputs.timeOfDay}
        >
          <option value='Anytime'>Anytime</option>
          <option value='Morning'>Morning</option>
          <option value='Evening'>Evening</option>
          <option value='Afternoon'>Afternoon</option>
          <option value='Night'>Night</option>
        </Select>
      </Box>
      <Box as='div'>
        <FormLabel>Goal: </FormLabel>
        <Select
          name='goal'
          placeholder='Select Goal'
          onChange={updateInput}
          value={inputs.goal}
        >
          <option value='once a day'>once a day</option>
          <option value='twice a day'>twice a day</option>
          <option value='thrice a day'>thrice a day</option>
        </Select>
      </Box>

      <Box as='div'>
        <FormLabel>Start Date: </FormLabel>
        <Select
          name='start'
          placeholder='Select Start Date'
          onChange={updateInput}
          value={inputs.start}
        >
          <option value='today'>today</option>
          <option value='tommorrow'>tommorrow</option>
          <option value='day after tommorrow'>day after tommorrow</option>
        </Select>
      </Box>

      <Button
        colorScheme='blue'
        mr={3}
        onClick={() => {
          if (isAdding && !edittingData) {
            addToHabitsDispatch({
              ...inputs,
              id: self.crypto.randomUUID(),
              isArchived: false,
            });
          }

          onClose();
        }}
      >
        add
      </Button>
    </FormControl>
  );
};

export default Form;
