import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './page/Home';
import { SignIn } from './page/SignIn';
import { SignUp } from './page/SignUp';
import { TodoMain } from './page/TodoMain';
import { Private, Public } from './Routes';
import { NotFound } from './page/NotFound';

function App() {
  console.log("env",process.env.REACT_APP_PUBLIC_URLY)
  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route element={<Public />}>
          <Route path={'/signin'} element={<SignIn />}></Route>
          <Route path={'/signup'} element={<SignUp />}></Route>
        </Route>
        <Route element={<Private />}>
          <Route path={'/todo'} element={<TodoMain />}></Route>
        </Route>
        <Route path={'*'} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
