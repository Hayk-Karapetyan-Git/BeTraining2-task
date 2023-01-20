import React from 'react'
import './Teachers.css'
import { Header, SubscribeSection, TeachersFeature } from '../../components'
import {teachersData, ourTeamData} from '../../constants/data'


const Teachers = React.memo( () => {
  return (
    <div className='app__teachers-section__container'>
      <div className="app__about-us__heading section__padding">
        <Header data={teachersData} />
      </div>
      <div className='app__teachers-section__container_teacher-features'>
        {ourTeamData.map((teacher, index) => <TeachersFeature key={`${teacher.name}__${index}`} data={teacher} style={index}/>)}
      </div>
      <SubscribeSection/>
    </div>
  )
})

export default Teachers
