 import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';



// //alternative way:
// const routerDefinitons = createRoutesFromElements(
//   <Route>
//   <Route path='/' element={<HomePage />} />
//   <Route path='/products' element = {<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routerDefinitons);

//the path is the part after the domain
//https://example.com/products -> domain e example.com /products -> path
const router =  createBrowserRouter([

  {path:'/', element: <RootLayout />, children: [
    { path: '/', element: <HomePage /> }, //represent one route, element: a component should be loaded
    { path: '/products', element: <ProductsPage />}
  ]}, // loads the layout wrapper that warpp arounf ther routes

 ]);


function App() {

  return <RouterProvider router={router}/>; ////router is a special prop which must set is passed from const pogore
}

export default App;
