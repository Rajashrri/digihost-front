import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import PageTitle from '../components/PageTitle'
import Breadcrumb from '../components/common/Breadcrumb'

const PortfolioPage = () => {
  return (<>
  <PageTitle title="Portfolios" />
    {/* <div className='error portfolooi'>
          <div className="breadcrumb h-auto ">
                      <ul>
                      
                          <React.Fragment >
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>||</li>
                            <li>
                              <a href="">Portfolios</a>
                            </li>
                          </React.Fragment>
                  
                      </ul>
                    </div>
        <div className="beadcrumb">
            <h2 data-gsap>Portfolios</h2>
            <h3 data-gsap>Showcase of Your Best Work</h3>

        </div> */}
                        <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      {breadtitle:"Protfolio", link:"/protfolio" },
      // {breadtitle:"Loma Dental", link:"" },
      ]}/>
        <Portfolio/>
        
    {/* </div> */}
    </>
  )
}

export default PortfolioPage