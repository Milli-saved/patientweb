import React from "react";
import { Toaster } from "sonner";

const HomePage = () => {
  console.log("in the homepage.");
  return (
    <>
      <div className="mx-10">
        <Toaster position="top-right" richcolors />
        <div className="flex justify-center items-center">
          <h1 className="m-5 text-5xl font-semibold text-gray-800">
            My Appointments
          </h1>
          {/* <button
            // onClick={() => setCreateNewPatientModal(true)}
            className="text-black bg-green-400 hover:bg-green-700 hover:text-white rounded-lg text-lg p-5 h-8 ms-auto inline-flex justify-center items-center"
          >
            Create New patient Record
          </button> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
