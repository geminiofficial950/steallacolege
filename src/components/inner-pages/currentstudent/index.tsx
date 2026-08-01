import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import CurrentStudentOne from './CurrentStudentOne'

const CurrentStudent = () => {
  return (
     <>
         <HeaderOne />
         <main className="main-area fix">
          
            <CurrentStudentOne />
         </main>
         <FooterOne />
      </>
  )
}

export default CurrentStudent