import logo from './logo.svg';
import './App.css';
import PageTabs from './components/tabs';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Header from './components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div>Hello world!</div>
      </>
    ),
  },
  {
    path: "/page1",
    element: (
      <>
        <Header />
        <Page1 />
      </>
    ),
  },
  {
    path: "/page2",
    element: (
      <>
        <Header />
        <Page2 />
      </>
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
