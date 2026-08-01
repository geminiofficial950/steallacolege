import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
// import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import Verify from "./Verify"

const VerifyArea = () => {
   return (
      <>
         <HeaderOne />
        <main className="d-flex justify-content-center align-items-start mt-5">
  <div className="container" style={{ maxWidth: "700px" }}>
    <Verify />
  </div>
</main>
         <FooterOne />
      </>
   )
}

export default VerifyArea

