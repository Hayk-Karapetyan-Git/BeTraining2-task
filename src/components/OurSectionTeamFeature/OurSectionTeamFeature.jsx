import React from 'react'
import "./OurSectionTeamFeature.css"

const OurSectionTeamFeature = React.memo(({data}) => {
  const {name, description, profession, image} = data;
return (
  <div className='app__about-us__our-team-section_container__feature-container'>
    <img src={image} alt="name" />
    <h3>{profession}</h3>
    <h2>{name}</h2>
    <p className='p__space-mono'>{description}</p>
  </div>
)
})

export default OurSectionTeamFeature
