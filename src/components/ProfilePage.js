import React from "react";
import Profile from "../css/Profile.css";
import LeaveApplication from "./LeaveApplication";
const ProfilePage = () => {
  return (
    <div className="newcontainerflex">
      <div className="h-screen mx-16  items-center justify-center">
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          className="w-24 h-24  mt-2 mx-28 object-cover rounded-full"
          alt="Profile"
        />
        <div>
          <h2 className="  mt-2 fontsize font-bold text-cyan-600  mx-10 ">
            Vijay [23cs184]
          </h2>
          <div>
            <h3 className="mx-31  mt-2">Designation: Senior Executive HR</h3>
            <h3 className="mx-31  mt-2">Reporting Manager: Selvandrum</h3>
          </div>

          <div className="mx-3  mt-2">
            <h3 className=" mt-2">DOJ: 2024-06-03</h3>
            <h3 className=" mt-2">Function: Probation</h3>
            <h3 className=" mt-2">Department: Human Resources</h3>
            <h3 className=" mt-2">Band Level: Individual Contributor</h3>
            <h3 className=" mt-2">Location: Coimbatore</h3>
          </div>
        </div>
      </div>
      <LeaveApplication />
    </div>
  );
};

export default ProfilePage;
