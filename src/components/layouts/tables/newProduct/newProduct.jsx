import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button, Dialog } from "@mui/material";
import { MdOutlineTune } from "react-icons/md";
import {  deleteAPI, getAPI } from "../../../../service/api";
import CreateOrEditNewProduct from "../../../dialog/newProduct/createOrEditNewProduct";
import toast from "react-hot-toast";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const NewProductTable = () => {
  const [AllData, setAllData] = React.useState({});
  const [edit, setEdit] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleCreateClickOpen = () => {
    setEdit(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function actionCellRenderer(params) {
    const handleButtonClick = (action) => {
      EditOrDelete(params.data, action); // Pass data and action to EditOrDelete function
    };
    return (
      <div className="flex h-full">
        <button
          class="action-button update flex justify-center w-full items-center h-full "
          data-action="update"
          onClick={() => handleButtonClick("update")}
        >
          <FaEdit />
        </button>
        <button
          class="action-button update flex justify-center w-full items-center h-full "
          data-action="update"
          onClick={() => handleButtonClick("delete")}
        >
          <FaTrash />
        </button>
      </div>
    );
  }
  const gridRef = useRef();

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(
    () => ({ height: "500px", width: "100%", minWidth: "200px" }),
    []
  );
  const [rowData, setRowData] = useState([]);
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);
  const [columnDefs, setColumnDefs] = useState([
    { field: "title" },
    { field: "price" },
    { field: "description" },

    
    {
      headerName: "action",
      minWidth: 150,
      cellRenderer: actionCellRenderer,
      editable: false,
      colId: "action",

      onCellClicked: (e) => EditOrDelete(e),
    },
  ]);
  function EditOrDelete(data, action) {
    if (action === "update") {
      setOpen(true);
      setEdit(true);
      setAllData(data);
      // Handle update action
    } else if (action === "delete") {
      console.log(data, "data");

      deleteAPI("newProduct/" + data._id)
        .then((resp) => {
          toast.success("Successfully deleted!");
          onGridReady();
          handleClose();
        })
        .catch((err) => toast.error("something went wrong."));
      // Handle delete action
      console.log("Delete action clicked for data:", data);
    }
  }
 
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    getAPI("newProduct").then((resp) => {
      let sample = [];
      sample = resp.data;
      const flatData = sample.map((row) => ({
        ...row,
        // courseDescription:
        //   row.courseDescription && row.courseDescription.length > 10
        //     ? row.courseDescription.substring(0, 10) + "..."
        //     : row.courseDescription,
      }));
      setRowData(flatData);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-between items-start sm:flex-row sm:items-center ">
        <div className="">
          <div
            style={{ width: "140px" }}
            className="text-gray-900  sm-px-5 sm-py-2.5 py-0 text-center inline-flex items-center  me-2 mb-2"
          >
            New Product
          </div>
        </div>

        <div className="">
          <button
            type="button"
            className=" text-black-900 bg-[#c7c7c7] hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 items-center flex justify-center"
            onClick={handleCreateClickOpen}
            style={{ width: "200px", background: "black", color: "#fff" }}
          >
            Add New Product
          </button>
        </div>
      </div>
      <div style={containerStyle}>
        <div
          class="flex items-center justify-between  "
          style={{ color: "black", fontSize: "14px" }}
        >
          <Button
            variant="outlined"
            startIcon={<MdOutlineTune />}
            style={{ color: "black", borderColor: "black" }}
          >
            Filter
          </Button>
          <div className="flex-1 p-5">
            <input
              type="text"
              placeholder="Search ....."
              class="filter-input w-full"
              onInput={onFilterTextBoxChanged}
              id="filter-text-box"
            />
          </div>
        </div>
        <br />
        <h2 className="text-[#828282] font-bold">
          {rowData && rowData.length} Result Found
        </h2>
        <br />
        <div style={gridStyle} className={"ag-theme-quartz"}>
          <AgGridReact
            suppressExcelExport={true}
            rowData={rowData}
            ref={gridRef}
            columnDefs={columnDefs}
            // autoGroupColumnDef={autoGroupColumnDef}
            defaultColDef={defaultColDef}
            // suppressRowClickSelection={true}
            // groupSelectsChildren={true}
            // rowSelection={"multiple"}
            // rowGroupPanelShow={"always"}
            // pivotPanelShow={"always"}
            pagination={true}
            onGridReady={onGridReady}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <CreateOrEditNewProduct
          handleClose={handleClose}
          edit={edit}
          AllData={AllData}
          onGridReady={onGridReady}
        />
      </Dialog>
    </div>
  );
};

export default NewProductTable;
