import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import CreateCompany from './components/CreateCompany';
import ShowBookList from './components/ShowBookList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/create-ad' element={<CreateBook />} />
          <Route path='/create-company' element={<CreateCompany />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
