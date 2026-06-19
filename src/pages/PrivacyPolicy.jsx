import React from 'react'
import PageTitle from '../components/PageTitle'
import Breadcrumb from '../components/common/Breadcrumb'

const PrivacyPolicy = () => {
  return (
    <>
        <PageTitle title="Privacy Policy" />
                 <Breadcrumb breadcrumb={[
      {breadtitle:"Home", link:"/"},
      // {breadtitle:"Protfolio", link:"/protfolio" },
      {breadtitle:"Privacy Policy", link:"" },
      ]}/>
        <div className="privacycontainer">
           
             <h2>Information Covered By This Privacy Policy</h2>
    <p>This privacy policy discloses the privacy practices for (www.digihost.in). This privacy policy applies solely to information collected by this website. It will notify you of the following:</p>

    <p>1. What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</p>
    <p>2. What choices are available to you regarding the use of your data.</p>
    <p>3. The security procedures in place to protect the misuse of your information.</p>
    <p>4. How you can correct any inaccuracies in the information.</p>

    <h2>Information Collection, Use, And Sharing</h2>
    <p>We are the sole owners of the information collected on this site. We only have access to collect information that you voluntarily give us via email, from the contact forms on the website or other direct contact from you. We will not sell or rent this information to anyone.</p>

    <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>

    <p>Unless you ask us not to, we may contact you via email/phone/sms in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>

    <h2>Your Access To And Control Over Information</h2>
    <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>

    <p>1. See what data we have about you, if any.</p>
    <p>2. Change/correct any data we have about you.</p>
    <p>3. Have us delete any data we have about you.</p>
    <p>4. Express any concern you have about our use of your data.</p>

    <h2>Registration</h2>
    <p>In order to use this website, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services on our site in which you have expressed interest. At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.</p>

    <h2>Orders</h2>
    <p>We request information from you on our order form. To buy from us, you must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill your orders. If we have trouble processing an order, we'll use this information to contact you.</p>

    <h2>Links</h2>
    <p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>

    <h2>Surveys & Contests</h2>
    <p>From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</p>

    <h2>Security</h2>
    <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>

    <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.</p>

            <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
            <h2>Changes To Our Privacy Policy</h2>
            <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. If we decide to change this privacy policy in any material way, we will notify you here, by email, or by means of a notice on www.digihost.in prior to the change becoming effective. In all cases, your continued use of any Services constitutes acceptance to any such changes.</p>
            <h2>Refund Policy</h2>
            <p>We have no refund policy.</p>
            <h2>Contacting Us</h2>
            <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p><a href="www.digihost.in.">www.digihost.in.</a></p>
            <p><a href="">A-105, Greenscape Technocity, <br />
            Mahape, Navi Mumbai, Maharashtra - 400701</a></p>
            <p><a href="mailto:info@digihost.in">info@digihost.in</a></p>

        </div>
    </>
  )
}

export default PrivacyPolicy