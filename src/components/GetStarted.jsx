import React from 'react';
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className={`bg-blue-gradient w-[140px] h-[140px] rounded-full cursor-pointer p-[2px] ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} rounded-full flex-col bg-primary w-[100%] h-[100%]`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className={`font-poppins mr-2 font-medium text-[18px] leading-[23px]`}>
                <span className='text-gradient'>Get</span>
            </p>
            <img src={arrowUp} alt="up arrow" className={`w-[23px] h-[23px] object-contain`} />

        </div>

        <div className={`${styles.flexStart}`} >
        <p className={`font-poppins mr-2 font-medium text-[18px] leading-[23px]`}>
                <span className='text-gradient'>Started</span>
            </p>

        </div>

      </div>
    </div>
  )
}

export default GetStarted
