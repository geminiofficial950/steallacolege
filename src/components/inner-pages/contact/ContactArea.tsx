import ContactForm from "@/forms/ContactForm";
import InjectableSvg from "@/hooks/InjectableSvg";
import BtnArrow from "@/svg/BtnArrow";
import Link from "next/link";

const officeLocations = [
  {
    state: "Victoria",
    abbreviation: "VIC",
    locations: [
      "609/365 Little Collins Street, Melbourne VIC 3000",
      "36 Western Road, Cohuna VIC 3568",
    ],
  },
  {
    state: "Western Australia",
    abbreviation: "WA",
    locations: [
      "22 Ormsby Terrace, Mandurah WA 6210",
      "19–21 Kent Street, Busselton WA",
      "Lake Grace Community Resource Centre, Corner Bishop Street & School Place, Lake Grace WA 6353",
      "Suite 9, 110 Hay Street, Subiaco WA 6008",
      "UCMAS Building, Shop 2, 365 High Road, Riverton WA 6148",
    ],
  },
];

const ContactArea = () => {
  return (
    <section className="contact-area section-py-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info-wrap">
              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <InjectableSvg
                      src="assets/img/icons/map.svg"
                      alt=""
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Office Locations</h4>
                    <p>Find your nearest office below.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <InjectableSvg
                      src="assets/img/icons/contact_phone.svg"
                      alt="img"
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Phone</h4>
                    <div className="contact-phone-list">
                      <Link href="tel:1800069877">1800 069 877</Link>
                      <Link href="tel:0871001320">(08) 7100 1320</Link>
                      <Link href="tel:61411620815">+61 411 620 815</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <InjectableSvg
                      src="assets/img/icons/emial.svg"
                      alt="img"
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">E-mail Address</h4>
                    <Link href="mailto:info@gmail.com">
                      info@stellacollege.edu.au
                    </Link>
                    {/* <Link href="mailto:info@gmail.com">info@gmail.com</Link> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <h4 className="title">Send Us Message</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <ContactForm />
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>

        <div className="office-locations">
          <div className="office-locations__heading">
            <h2>Visit an office near you</h2>
          </div>
          <div className="office-state-list">
            {officeLocations.map(({ state, abbreviation, locations }) => (
              <section className="office-state-card" key={state}>
                <div className="office-state-card__header">
                  <span className="office-state-card__badge">
                    {abbreviation}
                  </span>
                  <div>
                    <h3>{state}</h3>
                    <p>
                      {locations.length}{" "}
                      {locations.length === 1 ? "location" : "locations"}
                    </p>
                  </div>
                </div>
                <ul className="office-location-list">
                  {locations.map((address) => (
                    <li key={address}>
                      <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          address,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${address} on Google Maps`}
                      >
                        <span>{address}</span>
                        <span className="office-location-list__action">
                          View map
                          <BtnArrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="office-maps">
          <div className="office-maps__heading">
            <div>
              <h2>Find us on the map</h2>
            </div>
            <p>Scroll to view all locations →</p>
          </div>
          <div
            className="office-maps__track"
            tabIndex={0}
            aria-label="Office location maps. Scroll horizontally to view all locations."
          >
            {officeLocations.flatMap(({ state, locations }) =>
              locations.map((address) => (
                <article className="office-map-card" key={address}>
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      address,
                    )}&output=embed`}
                    title={`${state} office at ${address}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="office-map-card__content">
                    <span>{state}</span>
                    <p>{address}</p>
                  </div>
                </article>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
