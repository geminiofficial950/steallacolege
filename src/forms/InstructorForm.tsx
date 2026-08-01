"use client"
import BtnArrow from "@/svg/BtnArrow"
import React, { useEffect, useRef, useState } from "react"
import intlTelInput from "intl-tel-input"
import type { Iti } from "intl-tel-input"
import "intl-tel-input/build/css/intlTelInput.css"

const InstructorForm = () => {
   const [fullName, setFullName] = useState("")
   const [email, setEmail] = useState("")
   const [topic, setTopic] = useState("")
   const [postcode, setPostcode] = useState("")
   const [message, setMessage] = useState("")
   const [errors, setErrors] = useState<{ [k: string]: string }>({})

   const phoneInputRef = useRef<HTMLInputElement>(null)
   const itiRef = useRef<Iti | null>(null)

   useEffect(() => {
      if (phoneInputRef.current && !itiRef.current) {
         const options = {
            initialCountry: "in",
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js",
            autoPlaceholder: "aggressive",
            formatOnDisplay: true,
            nationalMode: false,
            showFlags: true,
            useFullscreenPopup: false,
         }
         
         itiRef.current = intlTelInput(phoneInputRef.current, options as any)
      }

      return () => {
         if (itiRef.current) {
            itiRef.current.destroy()
            itiRef.current = null
         }
      }
   }, [])

   const onlyDigits = (value: string) => value.replace(/\D+/g, "")

   const validate = () => {
      const next: { [k: string]: string } = {}
      
      if (!fullName || fullName.trim().length < 3) {
         next.fullName = "Full name must be at least 3 characters."
      }
      
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!emailOk) {
         next.email = "Please enter a valid email address."
      }
      
      if (itiRef.current) {
         const isValid = itiRef.current.isValidNumber()
         if (!isValid) {
            next.phone = "Please enter a valid phone number."
         }
      }
      
      if (!postcode || !/^\d+$/.test(postcode)) {
         next.postcode = "Postcode must contain digits only."
      }
      
      setErrors(next)
      return Object.keys(next).length === 0
   }

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!validate()) return
      
      const phoneNumber = itiRef.current ? itiRef.current.getNumber() : ""
      const selectedCountry = itiRef.current ? itiRef.current.getSelectedCountryData() : null
      
      const formData = {
         fullName,
         email,
         topic,
         country: selectedCountry?.name || "",
         countryCode: selectedCountry?.iso2 || "",
         dialCode: selectedCountry?.dialCode || "",
         phone: phoneNumber,
         postcode,
         message,
      }
      
      console.log("Form Data:", formData)
      alert("Submitted successfully!")
      
      // Reset form if needed
      // setFullName("")
      // setEmail("")
      // setTopic("")
      // setPostcode("")
      // setMessage("")
      // if (itiRef.current) itiRef.current.setNumber("")
   }

   return (
      <form onSubmit={onSubmit}>
         <div className="form-grp">
            <input
               type="text"
               placeholder="Full Name"
               value={fullName}
               onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <span className="text-danger">{errors.fullName}</span>}
         </div>
         
         <div className="form-grp">
            <input
               type="email"
               placeholder="E-mail"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
         </div>
         
         <div className="form-grp">
            <input
               type="text"
               placeholder="Topic"
               value={topic}
               onChange={(e) => setTopic(e.target.value)}
            />
         </div>
         
         <div className="form-grp">
            <label htmlFor="phone">Phone Number</label>
            <input
               ref={phoneInputRef}
               id="phone"
               type="tel"
               placeholder="Enter phone number"
            />
            {errors.phone && <span className="text-danger">{errors.phone}</span>}
         </div>
         
         <div className="form-grp">
            <label htmlFor="postcode">Postcode</label>
            <input
               id="postcode"
               type="text"
               placeholder="Postcode"
               value={postcode}
               onChange={(e) => setPostcode(onlyDigits(e.target.value))}
            />
            {errors.postcode && <span className="text-danger">{errors.postcode}</span>}
         </div>
         
         <div className="form-grp">
            <textarea 
               placeholder="Type Message" 
               value={message} 
               onChange={(e) => setMessage(e.target.value)}
            />
         </div>
         
         <button type="submit" className="btn arrow-btn">
            Send Message <BtnArrow />
         </button>
      </form>
   )
}

export default InstructorForm