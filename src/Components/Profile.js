import React from "react";
import "./Profile.css";
import profile_image from "../Images/N.jpg";

const Profile = () => {
  return (
    <div className="main">
      <div className="top"></div>
      <div className="profile-down">
        <img src={profile_image} alt="" />
        <div className="profile-title">Napat Kullpakarn</div>
        <div className="profile-text">
          รหัสนักศึกษา: 6301895 อายุ: 21  คณะ: วิศวกรรมศาสตร์ สาขาคอมพิวเตอร์ 
          <p/>
          'ขอแค่ได้ทำตัวไร้สาระไปวันๆก็โอเคแล้ว'
        </div>
        <div className="profile-button">
          <a href="#">CPE499 React</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;