import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { toast, Toaster } from "sonner";
import Table from "../../components/Table";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

const createAppoinment = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/appointment/createAppointment`,
      appointmentData
    );
    console.log("the response: ", response);
    return response.data;
  } catch (error) {
    return error;
  }
};

const updateAppointment = async (data) => {
  try {
    const id = data.id;
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/appointment/updateAppointment/${id}`,
      appointmentData
    );
    console.log("the response: ", response);
    return response.data;
  } catch (error) {
    return error;
  }
};

const CreateNewAppointment = ({ onClose, isOpen }) => {
  const { user } = useContext(AuthContext);
  console.log("the user: ", user);
  const [appointmentData, setAppointmentData] = useState({
    patientId: user?.PatientID,
    createdBy: "",
    appointmentDate: "",
    reason: "",
    status: "scheduled",
    createdAt: new Date(),
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const createAppointmentMutation = useMutation({
    mutationFn: createAppoinment,
    onSuccess: () => {
      toast.success("Created Appointment Successfully");
      onClose();
    },
    onError: () => {
      toast.error("Error while creating Appointment.");
      onClose();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", appointmentData);
    createAppointmentMutation.mutate(appointmentData);
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#154C79", color: "white" }}>
        Create New Appointment
      </DialogTitle>
      <DialogContent className="mt-16">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Patient Id"
              name="pateintId"
              value={appointmentData.patientId}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Created by"
              name="createdBy"
              value={appointmentData.createdBy}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Reason"
              name="reason"
              value={appointmentData.reason}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Appointment Date"
              type="date"
              name="appointmentDate"
              value={appointmentData.appointmentDate}
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

  const updateAppointmentMutation = useMutation({
    mutationFn: updateAppointment,
    onSuccess: () => {
      toast.success("update successful");
      onClose();
    },
    onError: () => {
      toast.error("Error while updatind appointment.");
      onClose();
    },
  });

  const handleUpdate = () => {
    console.log("update", appointmentData);
    updateAppointmentMutation.mutate(appointmentData);
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#154C79", color: "white" }}>
        Update Appointment
      </DialogTitle>
      <DialogContent className="mt-16">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Patient Id"
              name="pateintId"
              value={appointmentData.patientId}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Created by"
              name="createdBy"
              value={appointmentData.createdBy}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Reason"
              name="reason"
              value={appointmentData.reason}
              fullWidth
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Appointment Date"
              type="date"
              name="appointmentDate"
              value={appointmentData.appointmentDate}
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
        <div className="flex justify-between items-center">
          <h1 className="m-5 text-5xl font-semibold text-gray-800">
            My Appointments
          </h1>
          <div className="flex justify-end items-end">
            <Button
              variant="outlined"
              onClick={() => setCreateNewAppointment(true)}
              // className="text-gray-900 bg-green-400 hover:bg-green-700 hover:text-white rounded-lg text-lg p-5 h-8 ms-auto inline-flex justify-center items-center"
            >
              Create New Appointment
            </Button>
          </div>
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
