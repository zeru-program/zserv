import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/landing-pages/Home"
import Pricing from "./pages/landing-pages/Pricing"
import Dev from "./pages/landing-pages/Dev"
import Design from "./pages/landing-pages/Design"
import E404 from "./components/E404"

const App = () => {
  return (
    <Router> 
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/dev/">
       <Route path="jasa-pembuatan-website" element={<Dev/>} />
       <Route path="jasa-pembuatan-aplikasi" element={<Dev/>} />
       <Route path="jasa-hosting" element={<Dev/>} />
       <Route path="jasa-domain" element={<Dev/>} />
      </Route>
      <Route path="/design/">
       <Route path="jasa-design" element={<Design/>} />
      </Route>
      <Route path="*" element={<E404/>} />
     </Routes>
    </Router>
  )
}

export default App