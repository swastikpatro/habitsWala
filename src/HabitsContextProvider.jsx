import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { habitsData } from './constants';

const HabitsContext = createContext(null);

export const useHabitsContext = () => useContext(HabitsContext);

const initialState = {
  habits: habitsData,
};

const habitsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HABIT': {
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    }
    case 'EDIT_HABIT': {
      return {
        ...state,
        habits: state.habits.map((singleHabit) => {
          if (singleHabit.id === action.payload.id) {
            return action.payload;
          } else {
            return singleHabit;
          }
        }),
      };
    }
    case 'DELETE_HABIT': {
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== action.payload),
      };
    }
    case 'ARCHIVE_HABIT': {
      return {
        ...state,
        habits: state.habits.map((singleHabit) => {
          if (singleHabit.id === action.payload) {
            return { ...singleHabit, isArchived: !singleHabit.isArchived };
          } else {
            return singleHabit;
          }
        }),
      };
    }
    default:
      throw new Error(`Error: ${action.type} does not exist`);
  }
};

const HabitsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitsReducer, initialState);

  const addToHabitsDispatch = (habit) => {
    dispatch({ type: 'ADD_HABIT', payload: habit });
  };
  const deleteHabitDispatch = (habitId) => {
    dispatch({ type: 'DELETE_HABIT', payload: habitId });
  };
  const archiveHabitDispatch = (habitId) => {
    dispatch({ type: 'ARCHIVE_HABIT', payload: habitId });
  };
  const editHabitDispatch = (edittedData) => {
    dispatch({ type: 'EDIT_HABIT', payload: edittedData });
  };
  return (
    <HabitsContext.Provider
      value={{
        habits: state.habits,
        addToHabitsDispatch,
        deleteHabitDispatch,
        archiveHabitDispatch,
        editHabitDispatch,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContextProvider;
