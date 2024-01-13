import logo from './logo.svg';
import './App.css';
import PageTabs from './components/tabs';
import {
  createBrowserRouter,
  createHashRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Header from './components/header';
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';
import PageWithHeader from './layouts/PageWithHeader';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>Welcome to twitter!</div>
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <LoginForm />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterForm />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <PageWithHeader />
    ),
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    // <PageTabs />
  );
}

export default App;
