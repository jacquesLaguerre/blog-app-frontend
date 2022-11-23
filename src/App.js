import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles.css'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import AddPost from './pages/AddPost'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
  <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-post' element={<SinglePost />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='*' element={<h2> Page Not Found 😭 </h2>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
