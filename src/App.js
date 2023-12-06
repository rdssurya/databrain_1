import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FinalPage from "./Components/FinalPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
  );
}

export default App;
