import React, { useState } from "react";
import { NavLink, useActionData, useLoaderData, useRevalidator } from "react-router-dom";
import { deleteUserDataById, getAllEmployeeData, getAllUserData, getInwordReport } from "../_lib/lib";
import toast from "react-hot-toast";

export default function UserList() {
  const data = useLoaderData();
  console.log(data);
  const revalidator=useRevalidator()
 async function handleDelete(id) {
   // eslint-disable-next-line no-restricted-globals
   const getReponce = confirm("you want to delete this entry?");
   if (getReponce) {
     await deleteUserDataById(id);
     toast("delete successfully", {
       icon: "👍👍",
       duration: 2000,
       position: "top-center",
       style: {
         backgroundColor: "green",
         color: "white",
         fontSize: 20,
         width: "20%",
         fontWeight: "500",
         borderRadius: 50,
       },
     });
     revalidator.revalidate();
   }
 }
  return (
    <div className="main-content">
      <div className="section">
        <div className="row ">
          <div className="container ">
            {/* 🔹 Search Bar */}
            {/*<div className="card p-3 shadow">*/}
            {/*    <h4 className="text-center mb-3">Search Items</h4>*/}

            {/*    <form method={"/"}>*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-6">*/}
            {/*                <input*/}
            {/*                    type="date"*/}
            {/*                    className="form-control"*/}
            {/*                    name={"date"}*/}

            {/*                />*/}
            {/*            </div>*/}
            {/*            <button type="submit"    className="btn btn-primary">Search Items</button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}

            {/*/!* 🔹 Table *!/*/}
            <div className="mt-3">
              <table className="table table-bordered table-striped text-center">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Sr.no</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Password</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.userName}</td>

                      <td>{item.password}</td>
                      <td>
                        <NavLink to={`${item.id}`}>
                          <button className="btn btn-primary"> Edit</button>
                        </NavLink>
                        &nbsp; &nbsp;
                        <NavLink>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            {" "}
                            Delete
                          </button>
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const res = await getAllUserData();
  return res.data;
}
