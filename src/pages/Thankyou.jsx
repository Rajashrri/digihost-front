import React from 'react'
import jack from "../assets/jack.png"

const Thankyou = () => {
  return (
    <div className='error'>
           <div className="breadcrumb h-auto ">
                      <ul>
                      
                          <React.Fragment >
                            <li>
                              <a href="">Home</a>
                            </li>
                            <li>||</li>
                            <li>
                              <a href="">Thank You</a>
                            </li>
                          </React.Fragment>
                  
                      </ul>
                    </div>

        <div className="container">
            <div className="thankyoucontainer">
              
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="starbox">
                            <figure>
                                <img src={jack} alt="" />
                            </figure>
                                
                                
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="errortext">
                            <ul>
                                <li>Thank You</li>
                            </ul>
                            <h2>Message Received. We're On It.</h2>
                            <a href="/">Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thankyou