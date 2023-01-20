import React from 'react'
import {aboutData} from "../../constants/data"
import { Header, MaurisSection, OurTeamSection, SubscribeSection } from '../../components'
import './AboutUs.css'

const AboutUs = React.memo(() => {
  return (
    <div>
      <div className="app__about-us__heading section__padding">
        <Header data={aboutData} />
      </div>
      <MaurisSection/>
      <OurTeamSection/>
      <SubscribeSection/>

    </div>
  )
})

export default AboutUs
