import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contloca">
                            <div data-gsap>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.85373 10.6035C8.98591 10.6642 9.13482 10.6781 9.27593 10.6428C9.41705 10.6076 9.54194 10.5253 9.63005 10.4096L9.85725 10.112C9.97648 9.953 10.1311 9.82397 10.3088 9.7351C10.4866 9.64623 10.6825 9.59997 10.8812 9.59997H12.8012C13.1407 9.59997 13.4663 9.73483 13.7063 9.97487C13.9464 10.2149 14.0812 10.5405 14.0812 10.88V12.8C14.0812 13.1394 13.9464 13.465 13.7063 13.7051C13.4663 13.9451 13.1407 14.08 12.8012 14.08C9.74596 14.08 6.8158 12.8663 4.65538 10.7058C2.49496 8.54542 1.28125 5.61526 1.28125 2.55997C1.28125 2.22049 1.41611 1.89492 1.65615 1.65487C1.8962 1.41482 2.22177 1.27997 2.56125 1.27997H4.48125C4.82073 1.27997 5.1463 1.41482 5.38635 1.65487C5.62639 1.89492 5.76125 2.22049 5.76125 2.55997V4.47997C5.76125 4.67868 5.71498 4.87467 5.62612 5.0524C5.53725 5.23014 5.40822 5.38474 5.24925 5.50397L4.94973 5.72861C4.83224 5.81832 4.74942 5.94594 4.71536 6.08979C4.68129 6.23364 4.69807 6.38485 4.76285 6.51773C5.63753 8.29428 7.07608 9.73104 8.85373 10.6035Z" stroke="#B1EBE0" stroke-width="0.64" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3><a href="tel:+91-7021025259">+91-7021025259</a></h3>
                            </div>
                            <div data-gsap>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M17.6016 5.59995L10.4088 10.1816C10.1647 10.3233 9.88743 10.398 9.60516 10.398C9.32289 10.398 9.04565 10.3233 8.80156 10.1816L1.60156 5.59995M3.20156 3.19995H16.0016C16.8852 3.19995 17.6016 3.9163 17.6016 4.79995V14.4C17.6016 15.2836 16.8852 16 16.0016 16H3.20156C2.31791 16 1.60156 15.2836 1.60156 14.4V4.79995C1.60156 3.9163 2.31791 3.19995 3.20156 3.19995Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3><a href="#!">sales@digihost.in</a></h3>
                            </div>
                            <div data-gsap>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.0031 7.99998C16.0031 11.9944 11.5719 16.1544 10.0839 17.4392C9.9453 17.5434 9.77656 17.5998 9.60313 17.5998C9.42969 17.5998 9.26095 17.5434 9.12233 17.4392C7.63433 16.1544 3.20312 11.9944 3.20312 7.99998C3.20312 6.30259 3.87741 4.67472 5.07764 3.47449C6.27787 2.27426 7.90574 1.59998 9.60313 1.59998C11.3005 1.59998 12.9284 2.27426 14.1286 3.47449C15.3288 4.67472 16.0031 6.30259 16.0031 7.99998Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.60313 10.4C10.9286 10.4 12.0031 9.32546 12.0031 7.99998C12.0031 6.67449 10.9286 5.59998 9.60313 5.59998C8.27764 5.59998 7.20313 6.67449 7.20313 7.99998C7.20313 9.32546 8.27764 10.4 9.60313 10.4Z" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3><a href="#!" className='address1'>A-105, Greenscape Technocity, Mahape, Navi Mumbai - 400701</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="timingbox">
                            <div data-gsap>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 17.6H15.2M4 1.59998H15.2M13.6 17.6V14.2624C13.5999 13.8381 13.4313 13.4312 13.1312 13.1312L9.6 9.59998M9.6 9.59998L6.0688 13.1312C5.76872 13.4312 5.60009 13.8381 5.6 14.2624V17.6M9.6 9.59998L6.0688 6.06878C5.76872 5.76879 5.60009 5.36189 5.6 4.93758V1.59998M9.6 9.59998L13.1312 6.06878C13.4313 5.76879 13.5999 5.36189 13.6 4.93758V1.59998" stroke="#B1EBE0" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3>Mon-Fri: 9:00 AM - 6:00 PM</h3>
                            </div>
                            <div className='social1' >
                                <h2 data-gsap>Connect with Us on Social Media!</h2>

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
	
	<path stroke="#b1ebe0b5" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
</svg>
                                    </a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row conpagfor">
                    <div className="col-lg-6">
                        <h2 data-gsap>Need help bringing a Idea to life 
                            drop a message</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className="contactform" >
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className="map" data-gsap>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11697.958776332789!2d73.00921912548628!3d19.114986391823756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c12fb7b58f2b%3A0xe47b22df6f453a25!2sDiigiiHost!5e1!3m2!1sen!2sin!4v1778479464082!5m2!1sen!2sin" width="100%" height="600" style={{ border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact