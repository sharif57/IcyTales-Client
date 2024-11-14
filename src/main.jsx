import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Components/Home';
import About from './Page/About';
import Teams from './Components/Teams';
import Review from './Page/Review';
import Shop from './Page/shop';
import ProductDetail from './Components/ProductDetail';
import ShoppingCart from './Page/ShoppingCart';
import CheckoutForm from './Page/CheckoutForm';
import PrivacyPolicy from './Page/PrivacyPolicy';
import Conditions from './Page/Conditions';
import Thank from './Page/Thank';
import CardGrid from './Components/CardGrid';
import LoadMore from './Page/LoadMore';
import Login from './Page/Login';
import Signup from './Page/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
import AllComment from './Components/AllComments';
import App from './Page/App';
import Profile from './Page/Profile';
import PrivateRoutes from './Routes/PrivateRoutes';
import Favorites from './Components/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'blogs/team',
        element: <Teams></Teams>
      },
      {
        path: 'blogs/review',
        element: <Review></Review>
      },
      {
        path: 'blogs/shop',
        element: <Shop></Shop>
      },
      {
        path: '/productDetail/:id',
        element: <PrivateRoutes><ProductDetail></ProductDetail></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:3000/product/${params.id}`)
      },
      {
        path: 'blogs/cart',
        element: <PrivateRoutes> <ShoppingCart></ShoppingCart></PrivateRoutes>
      },
      {
        path:'favrite',
        element:<PrivateRoutes><Favorites></Favorites></PrivateRoutes>
      },
      {
        path: '/checkOut',
        element: <CheckoutForm></CheckoutForm>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: '/terms',
        element: <Conditions></Conditions>
      },
      {
        path: "blogs/thank",
        element: <Thank></Thank>
      },
      {
        path: '/cardGrid',
        element: <CardGrid></CardGrid>
      },
      {
        path: 'blogs/loadMore',
        element: <LoadMore></LoadMore>
      },
      // {
      //   path:'/chat',
      //   element:<Chatbot></Chatbot>
      // },
      {
        path: '/chatLite',
        element: <App></App>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/allComment/:productId",
        element: <AllComment></AllComment>,
        loader: ({ params }) => fetch(`http://localhost:3000/reviews/${params.productId}`)
      }
    ]
  },
  
  // admin related routes
  {

  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <Signup></Signup>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
