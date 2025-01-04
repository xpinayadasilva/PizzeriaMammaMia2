import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPAge'; 
/* import Home from './pages/Home'; */
 import RegisterPage from './components/RegisterPage'; 

function App() {
  return (
    <>      
      <div className="flex flex-col min-h-screen">       
        <NavBar />
        {/*<div className="flex-grow"> <Home /></div>*/}
        <RegisterPage />
        {/* <LoginPage /> */}
        <Footer />
      </div>     
    </>
    
  )
}
export default App;