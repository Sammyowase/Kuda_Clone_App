
import Header from "./static/Header";
import Footer from "./static/Footer";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import Companies from "./pages/Companies";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    
    <div>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path = "/" element ={<Personal />}/>
              <Route path = "/business" element ={<Business />}/>
              <Route path = "/companies" element ={<Companies />}/>
            </Routes>  
          <Footer />
      </BrowserRouter>
    </div>
    
  )
}

export default App
