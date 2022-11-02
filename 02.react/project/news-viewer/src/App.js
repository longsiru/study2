// import { useState, useCallback } from "react";
// import NewsList from "./components/NewsList";
// import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewPage from "./pages/NewPage";

function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />;
    // </>
    <Routes>
      <Route path="/" element={<NewPage />} />
      <Route path="/:category" element={<NewPage />} />
    </Routes>
  );
}

export default App;
