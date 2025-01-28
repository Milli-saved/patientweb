import React, { useState } from "react";
import { Toaster } from "sonner";
import Table from "../../components/Table";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

const CreateNewAppointment = ({ onClose, isOpen }) => {
  const [appointmentData, setAppointmentData] = useState();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#154C79", color: "white" }}>
        Create New Appointment
      </DialogTitle>
      <DialogContent className="mt-10">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Age"
              name="age"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Age"
              name="age"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // label="Full Name"
              type="date"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <DialogActions>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Create
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
const UpdateAppointment = ({ onClose, isOpen, data }) => {
  const [appointmentData, setAppointmentData] = useState(data);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    console.log("update");
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#154C79", color: "white" }}>
        Update Appointment
      </DialogTitle>
      <DialogContent className="mt-10">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // label="Full Name"
              type="date"
              name="fullName"
              // value={patientInfo.fullName}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <DialogActions>
            <Button onClick={handleUpdate} variant="contained" color="primary">
              Update
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const getMyAppointments = () => {
  try {
    const response = axios.get(
      `${import.meta.env.VITE_API_URL}/patient/getPatient/${id}`
    );
    console.log("the ress: ", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const data = [
  {
    name: "Cherry Delight",
    id: "#KP267400",
    branch: "Sheger",
    email: "abdutolla@gmail.com",
    type: "Super Admin",
    status: "Pending",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Kiwi",
    id: "#TL681535",
    branch: "Sheger",
    email: "abdutolla@gmail.com",
    type: "Admin",
    status: "Active",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Mango Magic",
    id: "#GB651535",
    branch: "Sheger",
    email: "abdutolla@gmail.com",
    type: "Super Admin",
    status: "Inactive",
    color: "bg-red-100 text-red-700",
  },
];

const HomePage = () => {
  const { data: appointmentData, isLoading: appointmentDataLoading } = useQuery(
    {
      queryKey: ["myAppointment"],
      queryFn: getMyAppointments,
    }
  );
  const [createNewAppointment, setCreateNewAppointment] = useState(false);
  const [editAppointment, setEditAppointment] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const editIsClicked = (item) => {
    setEditAppointment(true);
    setSelectedRow(item);
  };

  const closeUpdateAppointment = () => {
    setEditAppointment(false);
  };
  const closeCreateNewAppoinement = () => {
    setCreateNewAppointment(false);
  };

  console.log("in the homepage.");
  return (
    <>
      <div className="mx-10 mt-20">
        <Toaster position="top-right" richcolors />
        <div className="flex justify-center items-center">
          <h1 className="m-5 text-5xl font-semibold text-gray-800">
            My Appointments
          </h1>
          <button
            onClick={() => setCreateNewAppointment(true)}
            className="text-gray-900 bg-green-400 hover:bg-green-700 hover:text-white rounded-lg text-lg p-5 h-8 ms-auto inline-flex justify-center items-center"
          >
            Create New Appointment
          </button>
        </div>
        <div>
          <Table onEditClicked={editIsClicked} data={data} />
        </div>
      </div>
      {editAppointment && (
        <UpdateAppointment
          data={selectedRow}
          onClose={closeUpdateAppointment}
          isOpen={editAppointment}
        />
      )}
      {createNewAppointment && (
        <CreateNewAppointment
          isOpen={createNewAppointment}
          onClose={closeCreateNewAppoinement}
        />
      )}
    </>
  );
};

export default HomePage;
