import React, { useState } from 'react';
import NavBar from "./components/navbar.tsx";
import { Routes, Route } from 'react-router-dom';
import appLogoImage from "./assets/AppLogo/matrix-bg.jpg";
import { bookData } from './data/dummyData.js';
import { pdfjs } from 'react-pdf';

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
import ResetPasswordPage from './pages/ResetPasswordPage.js';
import DisplayBookInfoPage from './pages/DisplayBookInfoPage.js';


// initialize the react pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


library.add(fab);

function App() {
  let items = ["Login", "Profile", "My Books", "Library"];
  let linkUrlPages = ["/home", "/login", "/profile", "/my-books", "/library"];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = bookData.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()));
  

  return (
    <div>
      <NavBar brandName={"DigitaLIT"} imageSrcPath={appLogoImage} navItems={items} linkUrlPages={linkUrlPages} setSearchTerm={setSearchTerm}/>
      <Routes>
          <Route index path="/" element={<HomePage />} />  {/* how should this look? */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />  {/* redirect from login ONLY */}
          <Route path="/create-account" element={<CreateAccountPage />} />   {/* redirect from login ONLY */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/display-book-info" element={<DisplayBookInfoPage />} />
          <Route path="/library" element={<Library filteredBooks={filteredBooks}/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <BottomNavBar />

    </div>
  );
}
export default App;


// 1.) checkout screen 
// 2.) profile screen    (frontend done) -- add javascript and display info
// 3.1.) display book info screen      /display-book-info/{book-id}
// 3.2.) pdf preview screen (javascript edditing - template)  /book-pdf-view/{book-id}
// 4.) reset password screen     (frontend done)  --adding javascript









// create the custom button component  => modified name
// create the bookItemComponent and reuse it allOver the place