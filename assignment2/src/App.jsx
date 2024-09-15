import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from './components/LoginPage';
import Home from "../../assignment2/src/components/Home";
import Chatbot from "../../assignment2/src/components/Chatbot";
import Translator from "../../assignment2/src/components/Translator";
import Faq from "../../assignment2/src/components/Faq";
import About from "../../assignment2/src/components/About";
import LoginPage from "../../assignment2/src/components/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
