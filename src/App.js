import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="conversations" element={<div><div>Conversations</div><Outlet /></div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
