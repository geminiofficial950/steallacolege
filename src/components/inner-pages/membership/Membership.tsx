import Image from "next/image";
import event_details_img1 from "@/assets/img/CORPORATE HUB/MEMBERSHIP.png";
import Link from "next/link";
const Membership = () => {
  return (
    <section className="event__details-area section-py-120">
      <div className="container text-center">
        <div className="event__details-thumb flex justify-center mb-6">
          <Image
            src={event_details_img1}
            alt="Membership"
            className="mx-auto max-w-[400px] h-auto"
          />
        </div>
        <p className="text-2xl font-semibold"><Link href="/">Home Page</Link></p>
      </div>
    </section>
  );
};

export default Membership;
