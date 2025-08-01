import React from "react";
import { Form, NavLink, useActionData } from "react-router-dom";
import { getInwordReport } from "../_lib/lib";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
export default function SearchableTable() {
  // print
  const componentPDF = useRef();

  const filteredData = useActionData();

  const handleDownloadCSV = () => {
    const csvContent = [
      ["SR NO", "Item Name", "Quantity", "Date"],
      ...filteredData.map((row, index) => [
        index + 1,
        row.item,
        row.quantity,
        row.date,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "outward_report.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Outword Report",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <div className="main-content">
      <div className="section">
        <div className="row ">
          <div className="container ">
            {/* 🔹 Search Bar */}
            <div className="card p-3 shadow">
              <h4 className="text-center mb-3">Search Items</h4>

              <Form method={"POST"}>
                <div className="row text-center">
                  <div className="col-md-6 text-center">
                    <input type="date" className="form-control" name={"date"} />
                  </div>

                  <div className=" col-md-6  text-">
                    <button type="submit" className="btn btn-primary">
                      Search Items
                    </button>
                  </div>
                </div>
              </Form>
            </div>

            {/* Buttons */}
            <div className="mt-3  ml-2 justify-content-between">
              <button
                className="btn btn-primary btn-sm shadow ml-2"
                onClick={handlePrint}
              >
                Print
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-success btn-sm shadow"
                onClick={handleDownloadCSV}
              >
                CSV
              </button>
            </div>

            {/* 🔹 Table */}
            <div className="mt-4">
              <div ref={componentPDF} style={{ width: "100%" }}>
                <table className="table table-bordered table-striped text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">SR NO</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Date</th>
                      {/*<th>Status</th>*/}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.length > 0 ? (
                      filteredData?.map((row, index) => (
                        <tr key={row.id}>
                          <th>{index + 1}</th>
                          <td>{row.stockName}</td>
                          <td>{row.stockQuantity}</td>
                          <td>{row.date}</td>
                          {/*<td>*/}
                          {/*  <NavLink>*/}
                          {/*    <button className="btn btn-primary"> Edit</button>*/}
                          {/*  </NavLink>*/}
                          {/*  &nbsp; &nbsp;*/}

                          {/*    <button className="btn btn-danger"> Delete</button>*/}

                          {/*</td>*/}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-danger">
                          No results found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);
  data = data.date.split("-");

  //  to reverce a date

  let newData = "";
  for (let i = data.length - 1; i >= 0; i--) {
    newData += data[i] + "/";
  }
  newData = newData.slice(0, newData.length - 1);
  console.log(newData);

  const res = await getInwordReport(newData);
  console.log(res.data);

  return res.data;
}
