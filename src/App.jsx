import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About_us from './pages/About_us'
import MainLayout from './layout/Mainlayout'
import Blogs from './pages/Blogs'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import SingleProductPage from './pages/SingleProductPage'
import Singleblogpage from './pages/SingleBlogPage'

// Example components
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About_us />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<SingleProductPage />} />
          <Route path="singleblogpage" element={<Singleblogpage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
