import React from "react";
import HomePage from "./dashboard/HomePage";
import { FaHome } from "react-icons/fa";
import MedicalRecords from "./dashboard/MedicalRecords";
import Feedback from "./dashboard/feedback";
import PersonalInfo from "./dashboard/personalinfo";
import { CiMedicalClipboard } from "react-icons/ci";
import { RiFeedbackLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

const RoleBasedViews = {
  patient: {
    name: "patient",
    routes: {
      "/dashboard": {
        label: "Appointments",
        component: React.createElement(HomePage),
        icons: FaHome,
        bool: true,
      },
      "/medical-record": {
        label: "Medical Records",
        component: React.createElement(MedicalRecords),
        icons: CiMedicalClipboard,
        bool: true,
      },
      "/feedback": {
        label: "Feed Back",
        component: React.createElement(Feedback),
        icons: RiFeedbackLine,
        bool: true,
      },
      "/personalinfo": {
        label: "Personal Info",
        component: React.createElement(PersonalInfo),
        icons: MdManageAccounts,
        bool: true,
      },
    },
  },
};

export { RoleBasedViews };
