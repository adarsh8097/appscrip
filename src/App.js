import './App.css';
import FooterPage from './Componant/Footer/FooterPage';
import HandleHeader from './Componant/Header/Header';
import HandleNavbar from './Componant/Navbar/Navabar';
import HandleProduct from './Componant/Product/Product';
function App() {
  return (
    <div className="">
      <HandleNavbar/>
       <HandleHeader/>
      <HandleProduct/> 
      <FooterPage/>
    </div>
  );
}

export default App;
