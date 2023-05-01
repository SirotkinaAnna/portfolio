import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortfolioPage from './components/pages/PortfolioPage';
import AboutPage from './components/pages/AboutPage'
import Footer from './components/Footer';
function App() {
  return (
    <main className="mx-5">
      <NavigationBar />
      <BrowserRouter>

        <Routes>
          <Route element={<AboutPage />} path="/" exact={true} />
          <Route element={<PortfolioPage />} path="/portfolio" exact={true} />

        </Routes>

      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
