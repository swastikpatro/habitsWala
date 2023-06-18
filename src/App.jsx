import { Route, Routes } from 'react-router-dom';
import { ArchivePage, ErrorPage, HomePage } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/archives' element={<ArchivePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
