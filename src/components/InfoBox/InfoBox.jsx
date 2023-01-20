import React from "react";
import "./InfoBox.css";
import {FaGetPocket} from 'react-icons/fa';

const InfoBox = React.memo(() => {
  return (
    <div className="app__component_info-box__container app__component__subscribe-card__container">
      <h2>Info box</h2>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Mauris rhoncus</p>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Vestibulum euismod</p>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Cras massa nibh</p>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Vestibulum vehicula</p>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Donec et maximus</p>
      <p className="p__space-mono"><FaGetPocket fontSize={27} color='#ed5f43'/> Praesent ut quam</p>
      
    </div>
  );
})

export default InfoBox;
