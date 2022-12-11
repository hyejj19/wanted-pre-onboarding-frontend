import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Todo} from '../pages/Todo';
import {Signin} from '../pages/Signin';
import {Signup} from '../pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
