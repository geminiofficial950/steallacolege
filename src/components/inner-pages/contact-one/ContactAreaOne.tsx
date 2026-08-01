import ContactFormOne from "@/forms/ContactFormOne"
import InjectableSvg from "@/hooks/InjectableSvg"
import BtnArrow from "@/svg/BtnArrow"
import Link from "next/link"

const ContactAreaOne = () => {
   return (
      <section className="contact-area section-py-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="contact-info-wrap">
                     <ul className="list-wrap">
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/map.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Address</h4>
                              <p>609/365 Little Collins Street, <br /> Melbourne VIC 3000</p>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/contact_phone.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Phone</h4>
                              <Link href="tel:1800069877" style={{marginBottom:"10px", marginLeft:"8px"}}>1800 069 877</Link>
                              <Link href="tel:61411620815">+61 411 620 815</Link>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/emial.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">E-mail Address</h4>
                              <Link href="mailto:info@gmail.com">info@stellacollege.edu.au</Link>
                              {/* <Link href="mailto:info@gmail.com">info@gmail.com</Link> */}
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="contact-form-wrap">
                     <h4 className="title">Send Us Message</h4>
                     <p>Your email address will not be published. Required fields are marked *</p>
                     <ContactFormOne />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
            <div className="contact-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d144.9630583153187!3d-37.81362797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x1234567890abcdef!2s609%2F365%20Little%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                   style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
      </section>
   )
}

export default ContactAreaOne
