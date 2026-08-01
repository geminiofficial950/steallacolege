import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
// import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import Placement from "./Placement"

const FundingArea = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Contact With Us" sub_title="Contact" /> */}
            {/* <ContactArea /> */}
            <Placement/>
         </main>
         <FooterOne />
      </>
   )
}

export default FundingArea

