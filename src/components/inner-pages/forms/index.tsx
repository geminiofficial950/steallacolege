import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
// import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import Forms from "./Forms"

const FundingArea = () => {
   return (
      <>
         <HeaderOne />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Contact With Us" sub_title="Contact" /> */}
            {/* <ContactArea /> */}
            <Forms/>
         </main>
         <FooterOne />
      </>
   )
}

export default FundingArea

