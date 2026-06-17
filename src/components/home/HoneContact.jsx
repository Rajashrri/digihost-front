import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../contact/ContactForm'

const HoneContact = () => {
  return (
    <div className='homecontact'>
        <div className="container">
            <h2 data-gsap>Partneriing with cliients iIs <br /> cruciial for success.</h2>

            <div className="mail">
                <a href="mainto:sales@digihost.in" data-gsap>sales@digihost.in</a>
                <a href="tel:+91-7021025259" data-gsap>+91-7021025259</a>
            </div>
            <div className="social">
                <p data-gsap>Connect with Us on Social Media!</p>

                  <ul>
                                    <li data-gsap><a href="https://www.instagram.com/diigiihost_in/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a></li>
                                    <li data-gsap><a href="https://www.facebook.com/DiigiiHost.In/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a></li>
                                    <li data-gsap><a href="https://www.linkedin.com/company/diigiihost" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 9H2V21H6V9Z" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#B1EBE0" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a></li>
                                    <li data-gsap><a href="https://x.com/DiigiiHost_In" target='_blank'>
                                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
	
	<path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
</svg>
</a></li>
                                </ul>
            </div>
            <div className="contactform" id="homecontact">
                <h2 data-gsap>Drop A message</h2>
               <ContactForm/>
            </div>

        </div>

    </div>
  )
}

export default HoneContact