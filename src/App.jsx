
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from '../src/Routes/Home'
import Detail from '../src/Routes/Detail'
import Contact from '../src/Routes/Contact'
import Favs from '../src/Routes/Favs'
import { useGlobalContext } from "./Components/utils/global.context";

function App() {

  const { theme } = useGlobalContext();


  return (
    <div className={theme == 'dark' ? 'dark' : 'light'}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dentist/:id' element={<Detail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/favs' element={<Favs />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
