import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Header from './components/PageHeader/Header';
import NotFound from './components/Pages/NotFound/NotFound';
import Terms from './components/Pages/Terms/Terms';
import './style.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Header />}> 
          <Route path='/' element={<Home />} />
          <Route path='terms' element={<Terms />} />
          <Route path='*' element={<NotFound />} />
        </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  );
}

export default App;