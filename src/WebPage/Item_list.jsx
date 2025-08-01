import React from "react";
import { getAllData } from "../_lib/lib";
import {   useLoaderData } from "react-router-dom";

export default function Item_list() {
  const data = useLoaderData();
  // if (!data || typeof data == "string") {
  //   console.log("you are not authenticated");
  //   return;
  // }
  console.log(data);
  return (
    <>
      <div className="main-content">
        <div className="section">
          <div className="row ">
            <table className="table w-100 table-bordered table-striped text-center  ">
              <thead className="thead-secondary">
                <tr>
                  <th scope="col" className="text-center">
                    SR NO
                  </th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((row, index) => (
                  <tr>
                    <th className="text-center">{index + 1}</th>
                    <td>{row.productName}</td>
                    <td>{row.productQuantity}</td>
                    {/*<td>*/}
                    {/*  <NavLink >*/}
                    {/*    <button className="btn btn-primary"> Edit</button>*/}
                    {/*  </NavLink>*/}
                    {/*  &nbsp;*/}
                    {/*  &nbsp;*/}

                    {/*    <button className="btn btn-danger"> Delete</button>*/}

                    {/*</td>*/}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const res = await getAllData();
  return res.data;
}
