import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./LAYOUTS/MainLayout";
import HomePage from "./PAGES/HomePage";
import PlayerPage from "./PAGES/PlayerPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Player" element={<PlayerPage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={Router} />

    // <>
    //   <Navbar />

    //   {/* Hero */}
    //   <Hero />

    //   {/* Browser Jobs */}
    //   <CardListings />

    //   <ViewAllGadgets />
    // </>
  );
}

export default App;
