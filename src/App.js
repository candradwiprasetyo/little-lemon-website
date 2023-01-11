import logo from './logo.svg';
import './App.css';
import "./index.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Item } from './components/Item';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom" 
import {createRoute} from 'react-dom/client'
import Home from './Home';
import BookingScree from './BookingScree';



function App() {

 const router =createBrowserRouter([{
    path:"/",
    element:<Home/>

  },{
    path:"/booking",
    element:<BookingScree/>
  }

])
  return (
    <div className="App">
     <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
