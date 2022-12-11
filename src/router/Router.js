import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Todo} from '../pages/Todo';
import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter basename="/wanted-pre-onboarding-frontend">
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
