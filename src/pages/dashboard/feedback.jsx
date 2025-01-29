import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Toaster } from "sonner";
import ExportTable from "../../components/ExportTable";
import AdminTable from "../../components/AdminTable";

const columns = [
  { label: "Feedback ID", field: "feedbackID" },
  { label: "Date", field: "date" },
  { label: "Content", field: "content" },
  { label: "To", field: "toWhom" },
  { label: "Full Name", field: "patientName" },
  { label: "Phone Number", field: "patientPhone" },
  { label: "Email", field: "patientEmail" },
  { label: "Sub city", field: "patientSubCity" },
  { label: "Woreda", field: "patientWoreda" },
  { label: "House Number", field: "patientHouseNumber" },
  { label: "Emergency Contact", field: "patientEmergencyContact" },
];

const Feedback = () => {
  let data = [];
  return (
    <>
      {/* <div className="mx-10 mt-20">
        <Toaster position="top-right" richcolors />
        <div className="flex justify-center items-center">
          <h1 className="m-5 text-5xl font-semibold text-gray-800">
            Feedbacks
          </h1>
          <button
            // onClick={() => setCreateNewAppointment(true)}
            className="text-gray-900 bg-green-400 hover:bg-green-700 hover:text-white rounded-lg text-lg p-5 h-8 ms-auto inline-flex justify-center items-center"
          >
            Add My Feedback
          </button>
        </div>
        <div>
              </div>
            </div>
         */}
      <>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Toaster position="top-right" />

          {/* Title */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={5}
          >
            <Typography
              variant="h1"
              component="h1"
              fontSize="2.5rem"
              fontWeight="bold"
              color="text.primary"
            >
              Feedbacks
            </Typography>
          </Box>
          <Box mb={5}>
            <div className="flex justify-between">
              <Typography
                variant="h2"
                component="h2"
                fontSize="1.875rem"
                fontWeight="bold"
                color="text.primary"
                mb={2}
              >
                My Feedback List
              </Typography>
              <div className="flex">
                <Typography>
                  <ExportTable data={data} fileName="Feedback from patient" />
                </Typography>
                {/* <div className="mx-5">
                  <Button
                    variant="outlined"
                    // onClick={() => setCreateNewAppointment(true)}
                  >
                    Add My Feedback
                  </Button>
                </div> */}
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AdminTable data={data} columns={columns} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    </>
  );
};

export default Feedback;
