import { Navigate, Route, Routes } from "react-router-dom";
import FoodsPage from "./pages/FoodsPage";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/PageNotFound";
import FoodsProvider from "./context/FoodsContext";

function App() {
  return (
    <FoodsProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods" element={<FoodsPage />} />
        <Route path="/foods/:id" element={<DetailsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </FoodsProvider>
  );
}

export default App;
