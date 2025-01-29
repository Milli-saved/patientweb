import { DataGrid } from "@mui/x-data-grid";

const AdminTable = ({ data, columns, actions }) => {
  console.log("data", data);

  if (data && data.length > 0 && data[0].DateOfBirth) {
    data.map((date) => {
      date.DateOfBirth = new Date(date.DateOfBirth).toLocaleDateString();
    });
    console.log("data.DateOfBirth", data.DateOfBirth);
  }
  const rowsWithIds =
    data &&
    data.map((row, index) => ({
      ...row,
      id: row._id || Math.round(),
    }));
  // console.log('rowsWithIds', rowsWithIds);
  // console.log('actions', actions);
  // console.log('column', columns);

  const enhancedColumns = [
    ...columns.map((col) => ({
      field: col.field,
      headerName: col.label,
      width: "150",
    })),
    ...(actions
      ? [
          {
            field: "actions",
            headerName: "Actions",
            width: "250",
            renderCell: (params) => (
              <div style={{ display: "block", gap: "0px" }}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={() => action.onClick(params.row)}
                    style={{
                      padding: "5px",
                      backgroundColor: action.color,
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "4px",
                      marginBottom: "5px",
                    }}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            ),
          },
        ]
      : []),
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsWithIds}
        columns={enhancedColumns}
        pageSize={5}
        style={{ padding: "5px" }}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};
export default AdminTable;
