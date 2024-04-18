

import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App.jsx'
import PotteryStage from './components/PotteryStage';
import PotteryGallery from './components/PotteryGallery';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error!</div>
  },
  {
    path: "stage/:stageName",
    element: <PotteryStage />,
    loader: async ({ params }) => {
      // Assume `fetchPotteryByStage` is a function you would implement to fetch data based on the stage
      return fetchPotteryByStage(params.stageName);
    }
  },
  {
    path: "gallery",
    element: <PotteryGallery />,
    loader: async () => {
      // Assume `fetchFinishedPottery` fetches only finished items
      return fetchFinishedPottery();
    }
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
