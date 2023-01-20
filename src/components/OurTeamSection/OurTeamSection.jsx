import React from "react";
import "./OurTeamSection.css";
import { Header, OurSectionTeamFeature } from "../index";
import { ourTeamData } from "../../constants/data";


const OurTeamSection = React.memo(() => {
  return (
    <div className="app__about-us__our-team-section_container">
      <Header
        data={{
          title: "Meet",
          highlightedWord: "our team",
          description:
            "Maecenas imperdiet ante eget hendrerit posuere  Nunc urna libero congue semper feugiat",
        }}
      />
      <div className="app__about-us__our-team-section_container__features lg__padding">
        {ourTeamData.map((item, index) => <OurSectionTeamFeature key={`${item.name}__${index}`} data={item}/>)}
      </div>
    </div>
  );
})

export default OurTeamSection;
