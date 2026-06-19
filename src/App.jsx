import { useState  } from 'react'
import './App.css'
import './assets/font/font.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Layout from './Layout'
import PortfolioPage from './pages/PortfolioPage'
import SoupHerb from './pages/SoupHerb'
import Blog from './pages/Blog'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Career from './pages/Career'
import Loma from './pages/Loma'
import Lanova from './pages/Lanova'
import Wefanss from './pages/Wefanss'
import Rbs from './pages/Rbs'
import DrGaikwad from './pages/DrGaikwad'
import Akirhs from './pages/Akirhs'
import CaNair from './pages/CaNair'
import WorldFlair from './pages/WorldFlair'
import VerteacalBlendz from './pages/VerteacalBlendz'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapAos from './components/hooks/useGsapAos'
import Error from './pages/Error'
import Thankyou from './pages/Thankyou'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import loader from "./assets/loader.gif"

function App() {
  const [count, setCount] = useState(0)
    useGsapAos();


     const [loading, setLoading] = useState(true)

  useGsapAos()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader">
             <img src={loader} alt="Loading..." />
        </div>
      </div>
    )
  // }

  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path='/*' element={<PortfolioPage />} /> */}
            <Route path='/blog' element={<Blog />} />
           <Route path="/blog/:slug" element={<BlogDetailsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/career' element={<Career />} />


            <Route path='/portfolio' element={<PortfolioPage />} />

            <Route path='/soupherb' element={<SoupHerb />} />
            <Route path='/lanova' element={<Lanova />} />
            <Route path='/loma-dental' element={<Loma />} />
            <Route path='/wefanss' element={<Wefanss />} />
            <Route path='/rekha-bright-still' element={<Rbs />} />
            <Route path='/dr-gaikwad' element={<DrGaikwad />} />
            <Route path='/akirhs' element={<Akirhs />} />
            <Route path='/ca-nair' element={<CaNair />} />
            <Route path='/worldflair' element={<WorldFlair />} />
            <Route path='/verteacal-blendz' element={<VerteacalBlendz />} />



            <Route path='/*' element={<Error />} />
            <Route path='/thank-you' element={<Thankyou />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />

          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return null;
}

export default App
