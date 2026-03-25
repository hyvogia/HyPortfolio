/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */
import './App.css'
import { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Blog from './pages/blog'
import Zombie from './pages/zombie'
import About from './pages/about'
import Brand from './pages/brand'
import Contact from './pages/contact'
import Features from './pages/features'
import HomeBanner from './pages/banner'
import Portfolio from './pages/portfolio'
import Testimonial from './pages/testimonial'
import { Routes, Route } from 'react-router-dom'

function HomeContent() {
  useEffect(() => {
    const section = localStorage.getItem('scrollSection')
    if (!section) return

    const scrollTo = () => {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        localStorage.removeItem('scrollSection')
        return true
      }
      return false
    }

    // try immediate
    if (!scrollTo()) {
      // try again shortly after mount in case elements render slightly later
      const t = setTimeout(() => {
        scrollTo()
        localStorage.removeItem('scrollSection')
      }, 250)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Brand />
      <Features />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}
import SingleBlog from './pages/single_blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/single" element={<SingleBlog />} />
      <Route path="/blog/zombie" element={<Zombie />} />
    </Routes>
  )
}

export default App
