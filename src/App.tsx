import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import HomePage from "./pages/HomePage";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MobileLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App