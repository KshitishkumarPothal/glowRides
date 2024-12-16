import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton, useUser } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catagory from './Catagory'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function Home() {
  const {user, isSignedIn} = useUser();
  return (
    <div>

      {
        !isSignedIn && <SignInButton mode='modal'>
            <Button>sign in</Button>
         </SignInButton>
      }
        

        {/* header */}
        <Header/>

        {/* hero secion */}
        <Hero/>

        {/* catagory */}
        <Catagory/>

        {/* most search car */}
        <MostSearchedCar/>

        {/* info section */}
        <InfoSection/>

        {/* Footer */}
        <Footer/>
    </div>
    
  )
}

export default Home