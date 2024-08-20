import React, { useState } from "react";
import "../css/LeavAplication.css";

const LeaveApplication = () => {
  const [selectedHalf, setSelectedHalf] = useState(null);

  const [selectedHalf1, setSelectedHalf1] = useState(null);

  const handleHalfDayClick = (half) => {
    setSelectedHalf(selectedHalf === half ? null : half);
  };

  const handleHalfDayClick1 = (half) => {
    setSelectedHalf1(selectedHalf1 === half ? null : half);
  };

  return (
    <div>
      <div className="my-10 marginbottom flex flex-row">
        <div>
          <h3 className="font-bold fontsizing">Select Leave to Apply</h3>
        </div>
        <div className="mx-20">
          <select
            className="block font-bold w-96 p-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
            required
          >
            <option value="">Select</option>
            <option value="sick">Sick Leave</option>
            <option value="casual">Casual Leave</option>
            <option value="annual">Annual Leave</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-x-32">
        <div className="borderforform items-center roun">
          <label
            htmlFor="fromDate"
            className="block text-gray-700 font-bold mb-2 mx-12"
          >
            From Date
          </label>
          <input
            id="fromDate"
            className="backgroundcolor my-2 mx-12 p-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
            type="date"
            placeholder="From Date"
          ></input>
          <div className="borderbottom"></div>
          <div className="flex flex-row items-center justify-between mx-9 my-3">
            <div className="flex flex-row items-center">
              <h3 className="mr-4">First Half</h3>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedHalf === "first"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleHalfDayClick("first")}
              >
                {selectedHalf === "first" ? "✔️" : "Select"}
              </button>
            </div>
            <div className="flex flex-row items-center">
              <h3 className="mr-4">Second Half</h3>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedHalf === "second"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleHalfDayClick("second")}
              >
                {selectedHalf === "second" ? "✔️" : "Select"}
              </button>
            </div>
          </div>
        </div>
        <div className="borderforform items-center">
          <label
            htmlFor="endDate"
            className="block text-gray-700 font-bold mb-2 mx-12"
          >
            End Date
          </label>
          <input
            id="endDate"
            className="backgroundcolor my-2 mx-12 p-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
            type="date"
            placeholder="End Date"
          ></input>
          <div className="borderbottom"></div>
          <div className="flex flex-row items-center justify-between mx-9 my-3">
            <div className="flex flex-row items-center">
              <h3 className="mr-4">First Half</h3>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedHalf1 === "first"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleHalfDayClick1("first")}
              >
                {selectedHalf1 === "first" ? "✔️" : "Select"}
              </button>
            </div>
            <div className="flex flex-row items-center">
              <h3 className="mr-4">Second Half</h3>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedHalf1 === "second"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleHalfDayClick1("second")}
              >
                {selectedHalf1 === "second" ? "✔️" : "Select"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className=" my-8 fontsizeing">Select Leave Reason</h3>
      <div className=" flex flex-row gap-x-32">
        <select
          className=" block h-10 font-bold w-96 p-2 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          required
        >
          <option value="">Select</option>
          <option value="sick">Sick Leave</option>
          <option value="casual">Casual Leave</option>
          <option value="annual">Annual Leave</option>
        </select>
        <div className=" flex  flex-col reasonforleavetext ">
          <label className="martgintopchange">Reason For the Leave</label>
        </div>
        <input type="text" className=" reasonforleave   "></input>
      </div>
      <button className=" bg-blue-900 w-24  rounded-sm my-11 mariginforbuytton">
        Apply Leave
      </button>
    </div>
  );
};

export default LeaveApplication;
