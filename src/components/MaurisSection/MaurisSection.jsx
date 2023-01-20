import React from "react";
import "./MaurisSection.css";
import { aboutPic1, aboutPic2 } from "../../constants/images";
import { FaCheck } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const MaurisSection = React.memo(() => {
  const navigate = useNavigate()
  return (
    <div className="app__mauris-section__container">
      <div className="app__mauris-section__container_main lg__padding">
        <div className="app__mauris-section__container_main-img">
          <img src={aboutPic1} alt="about" />
          <p className="p__space-mono">
            <FaCheck fontSize={15} /> Fusce ut velit laoreet tempus arcu
          </p>
          <p className="p__space-mono">
            <FaCheck fontSize={15} /> Nam vel justo cursus faucibus lorem eget
          </p>
        </div>
        <div className="app__mauris-section__container_main-text">
          <h2 className="headtext__roboto">
            Mauris accumsan, massa non commodo diam arcu
          </h2>
          <p className="p__space-mono">
            Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit
            amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut
            egestas justo, vitae molestie ante. Integer magna purus, commodo in
            diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim
            facilisis, massa justo varius purus, non dictum elit nibh ut massa.
          </p>
          <p className="p__space-mono">
            Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet
            ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a,
            semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut,
            pellentesque nibh.
          </p>
          <p className="p__space-mono">
            Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque
            velit dolor, suscipit in ligula a, suscipit rhoncus dui.
          </p>
          <button className="custom__button" onClick={() => {navigate('/about'); window.scrollTo(0, 0)}}>Read more</button>
        </div>
      </div>
      <div className="app__mauris-section__container_bg-photo_custom__padding">
        <div className="app__mauris-section__container_bg-photo ">
          <img src={aboutPic2} alt="" />
          <h2>Mauris mollis loborits</h2>
          <h2>turpis eget</h2>
          <button className="custom__button" onClick={() => {navigate('/contact'); window.scrollTo(0, 0)}}>Sign up now</button>
        </div>
      </div>
    </div>
  );
})

export default MaurisSection;
