import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';
import Home from './features/Home';
import About from './features/About';
import Login from './features/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><HeaderLogin /><Login /><Footer /></>} />
        <Route element={<><Header /><Outlet /><Footer /></>}>
          <Route path='/about' element={<About />} />
          <Route path='/Home' element={<Home />} />
        </Route>
         <Route path='*' element={<><HeaderLogin /><NotFound /><Footer /></>} />
      </Routes>
    </Router>
  );
};

const HeaderLogin = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'>My Website</div>
        <ul className='nav-links'>
          {/* <Link to='/Home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/'>Log Out</Link> */}
        </ul>
      </nav>
    </header>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'>My Website</div>
        <ul className='nav-links'>
          <Link to='/Home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/Calculator'>Calculator</Link>
          <Link to='/'>Log Out</Link>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  //JS自己抓今年的年份
  const currentYear:number =new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {currentYear} My Website. All rights reserved.</p>
        <ul className='social-links'>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const NotFound = () => {
  return (
    <div className="errorblock">
      <div className="module">
        <div className="msg404">
          <b>404</b>
          <h3 className="naffic-h3">很抱歉，此功能尚未開放</h3>
          <p>
            您可以重新輸入網址或
            <Link to='/'>返回首頁</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;



