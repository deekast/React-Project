import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './style/index.css';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter> {/* Wrap App component with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



// import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './components/App.jsx'
// import Pot from './components/Pot';
// import PotteryContainer from './components/PotteryContainer';
// import PotteryForm from './components/PotteryForm';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <div>Error!</div>
//   },
//   {
//     path: "stage/:stageName",
//     element: <PotteryStage />,
//     loader: async ({ params }) => {
//       // Assume `fetchPotteryByStage` is a function you would implement to fetch data based on the stage
//       return fetchPotteryByStage(params.stageName);
//     }
//   },
//   {
//     path: "gallery",
//     element: <PotteryGallery />,
//     loader: async () => {
//       // Assume `fetchFinishedPottery` fetches only finished items
//       return fetchFinishedPottery();
//     }
//   }
// ]);

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
