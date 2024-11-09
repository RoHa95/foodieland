import { Navigate, Route, Routes } from "react-router-dom";
import FoodsPage from "./pages/FoodsPage";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/PageNotFound";
import FoodsProvider from "./context/FoodsContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import FavoriteProvider from "./context/FavoriteContext";
import LikedProvider from "./context/LikedContext";

function App() {
  return (
    <FoodsProvider>
      <FavoriteProvider>
        <LikedProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/foods" element={<FoodsPage />} />
            <Route path="/foods/:id" element={<DetailsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </LikedProvider>
      </FavoriteProvider>
    </FoodsProvider>
  );
}

export default App;
