import Ma from "./Components/Ma";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/login";
import Initial from "./Components/Initial";
import City from "./Components/City";
import Turf from "./Components/Turf";
import Logout from "./Components/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Initial />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />

            <Route path="/city/:id" element={<City />} />
            <Route path="/turf/:id" element={<Turf />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
