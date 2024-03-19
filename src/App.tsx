import React from 'react';
import NavBar from "./components/navbar.tsx";
import { Routes, Route } from 'react-router-dom';
import appLogoImage from "./assets/AppLogo/matrix-bg.jpg";

// FONT AWESOME ICONS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import "bootstrap/dist/css/bootstrap.css";

// pages
import LoginPage from './pages/LoginPage.js';
import CheckoutPage from './pages/CheckoutPage.js';
import MyBooks from './pages/MyBooks.js';
import ProfilePage from './pages/ProfilePage.js';
import CreateAccountPage from './pages/CreateAccountPage.js';
import HomePage from './pages/HomePage.js';
import Library from './pages/LibraryPage.js';
import BottomNavBar from './components/bottomNavBar.js';


library.add(fab);

function App() {
  let items = ["Login", "Create Account", "Profile", "My Books", "Library"];
  let linkUrlPages = ["/home", "/login", "/create-account", "/profile", "/my-books", "/library"]
  return (
    <div>
      <NavBar brandName={"DigitaLIT"} imageSrcPath={appLogoImage} navItems={items} linkUrlPages={linkUrlPages}/>
      <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/library" element={<Library />} />
          <Route path="/checkout" element={<CheckoutPage />} />     {/* redirect somewahare in the code dinamically */}
      </Routes>
      <BottomNavBar />

    </div>
  );
}
export default App;