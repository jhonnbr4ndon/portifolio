import React from 'react';
import './Style.css';
import { FaArrowUp } from "react-icons/fa";

function FixedIcon() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='containerVoltar' onClick={scrollToTop}>
        <div className="fixedIcon">
            <FaArrowUp/>
        </div>
    </div>
  );
}

export default FixedIcon;
