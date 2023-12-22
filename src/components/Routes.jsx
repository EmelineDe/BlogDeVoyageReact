import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import BlogPost from "./BlogPost";
import Gallery from "./Gallery";
import Inscription from "./Inscription";
import Connexion from "./Connexion";

export function RoutesComponent() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/acticles" element={<BlogPost />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
