import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Todo} from '../pages/Todo';
import {Login} from '../pages/Login';
import {Signup} from '../pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
