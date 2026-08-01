import Link from "next/link"
import InjectableSvg from "@/hooks/InjectableSvg"

const 
Social = () => {
   return (
      <>
         <li>
            <Link href="https://www.facebook.com/profile.php?id=61583405805847" aria-label="Visit our Facebook page" target="_blank">
               <InjectableSvg src="/assets/img/icons/facebook.svg" alt="img" className="injectable" />
            </Link>
         </li>
        
         <li>
            <Link href="https://www.instagram.com/stella.college/?igsh=a2lhbjYyNmk2amlo&utm_source=qr#" target="_blank"   aria-label="Visit our Instagram page">
               <InjectableSvg src="/assets/img/icons/instagram.svg" alt="img" className="injectable" />
            </Link>
         </li>
          <li>
                <Link href="https://www.linkedin.com/company/training-practical-solutions-consultancy/" target="_blank" aria-label="Visit our LinkedIn page">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
         {/* <li>
            <Link href="https://www.youtube.com/user/Wix" target="_blank">
               <InjectableSvg src="/assets/img/icons/youtube.svg" alt="img" className="injectable" />
            </Link>
         </li> */}
      </>
   )
}

export default Social
