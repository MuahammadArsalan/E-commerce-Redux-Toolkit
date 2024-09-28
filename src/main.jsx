import Navbar from './Components/Navbar'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider  } from 'react-redux'
import{store} from './config/redux/store/store.js'
// import { store } from './config/redux/store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewCart from './ViewCart.jsx';
import Layout from './Layout.jsx'
import Home from './Home.jsx';


const router  = createBrowserRouter([
 {
  path:"",
  element:<Layout />,
  children:[
    {
      
        path:"",
        element:<Home />,
      
    },
    {
      
        path:"viewCart",
        element:<ViewCart/>,
      
    }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  
  <Provider store={store} >
  <RouterProvider router={router}>

<Navbar/>

    <Home />
  </RouterProvider>
  </Provider>,
)
