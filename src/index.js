import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle'
import Home from './pages/Home';
import Logements from './pages/Logements'
import Apropos from './pages/Apropos'
import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
      <Router>
        <GlobalStyle />
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/Logements' element={<Logements />} />
              <Route path='/Apropos' element={<Apropos />} />
              <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
