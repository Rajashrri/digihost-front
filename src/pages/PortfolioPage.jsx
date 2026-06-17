import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'

const PortfolioPage = () => {
  return (
    <div>
        <div className="beadcrumb">
            <h2 data-gsap>Portfolios</h2>
            <h3 data-gsap>Showcase of Your Best Work</h3>

        </div>
        <Portfolio/>
        
    </div>
  )
}

export default PortfolioPage