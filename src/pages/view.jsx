import React from "react";
import HomePage from "./dashboard/HomePage";
import { FaHome } from "react-icons/fa";
import MedicalRecords from "./dashboard/MedicalRecords";
import { CiMedicalClipboard } from "react-icons/ci";

const RoleBasedViews = {
  patient: {
    name: "patient",
    routes: {
      "/dashboard": {
        label: "Appointments",
        component: React.createElement(HomePage),
        icons: FaHome,
      },
      "/medical-record": {
        label: "Medical Records",
        component: React.createElement(MedicalRecords),
        icons: CiMedicalClipboard,
      },
    },
  },
};

export { RoleBasedViews };
