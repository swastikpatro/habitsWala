import { Box, Heading, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      as='nav'
      border={'2px solid gray'}
      p='1rem'
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Heading>
        <Link as={NavLink} to='/'>
          HabitsWala
        </Link>
      </Heading>
      <Link as={NavLink} to='/archives'>
        Go to Archives
      </Link>
    </Box>
  );
};

export default Navbar;
