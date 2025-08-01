import React, {useState} from "react";
import {NavLink, useActionData, useLoaderData} from "react-router-dom";
import {getAllEmployeeData, getInwordReport} from "../_lib/lib";

export default function Employ_list() {
  const data=useLoaderData();
  console.log(data)

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
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Department Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Appointment Type</th>
                                    <th scope="col">Division Type</th>
                                    <th scope="col">Joining Date</th>
                                    <th scope="col">Mobile Number</th>

                                </tr>
                                </thead>
                                <tbody>

                                    {data.map((item,i)=>(
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{item.employeeName}</td>
                                            <td>{item.employeeDepartment}</td>
                                            <td>{item.employeeDesignation}</td>
                                            <td>{item.employeeAppointmentType}</td>
                                            <td>{item.employeeDevisionType}</td>
                                            <td>{item.employeeJoiningDate}</td>
                                            <td>{item.employeeMobileNumber}</td>


                                        </tr>
                                    ))}

                                    {/*<td>*/}
                                    {/*            <NavLink>*/}
                                    {/*                <button className="btn btn-primary"> Edit</button>*/}
                                    {/*            </NavLink>*/}
                                    {/*            &nbsp;*/}
                                    {/*            &nbsp;*/}
                                    {/*            <NavLink>*/}
                                    {/*                <button className="btn btn-danger"> Delete</button>*/}
                                    {/*            </NavLink>*/}
                                    {/*        </td>*/}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function loader(){
    const res= await getAllEmployeeData();
    return res.data;

}
