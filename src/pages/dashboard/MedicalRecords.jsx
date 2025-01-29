import React, { useContext } from "react";
import { Toaster } from "sonner";
import Table from "../../components/Table";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/auth";
import { CiCircleMore } from "react-icons/ci";

const fetchMedicalRecords = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/doctor/getMedicalRecordByPatient/P100001`
    );
    console.log("the response: ", response.data);
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

const MedicalRecords = () => {
  const { user } = useContext(AuthContext);
  const id = user?.id;
  const { data: medicalRecordData, isLoading: medicalRecordDataLoading } =
    useQuery({
      queryKey: ["medicalRecords", id],
      queryFn: () => fetchMedicalRecords(id),
    });
  console.log("in the MedicalRecords.", medicalRecordData.data);
  return (
    <>
      <div className="mx-10 mt-20">
        <Toaster position="top-right" richcolors />
        <div className="flex justify-start items-center">
          <h1 className="m-5 text-5xl font-semibold text-gray-800">
            My Medial Records
          </h1>
          {/* <button
          // onClick={() => setCreateNewPatientModal(true)}
            className="text-gray-900 bg-green-400 hover:bg-green-700 hover:text-white rounded-lg text-lg p-5 h-8 ms-auto inline-flex justify-center items-center"
          >
            Create New Appointment
          </button> */}
        </div>
        <div>
          <div className="p-8">
            <div className="overflow-x-auto bg-white rounded-3xl p-5 border">
              <table className="min-w-full border-collapse">
                <thead className="">
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Full Name
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Patient Id
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Record Id
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Treatment
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Allergies
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {medicalRecordData?.data &&
                    medicalRecordData?.data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-gray-700 font-medium">
                          {item.patientName}
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {item.patientId}
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {item.recordId}
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {item.Treatment}
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {item.Allergies}
                        </td>
                        <td className="px-4 py-2">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${item.color}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          <button
                            className="px-2 py-1 text-gray-500 hover:text-gray-700 text-xl"
                            // onClick={() => onEditClicked(item)}
                          >
                            <CiCircleMore />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
                Previous
              </button>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 text-sm rounded-md ${
                      page === 3
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecords;
