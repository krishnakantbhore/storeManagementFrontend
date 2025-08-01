import React, { useEffect, useState } from "react";
import { Form, useActionData, useParams } from "react-router-dom";
import { getDataById, updateData } from "../_lib/lib";
import toast from "react-hot-toast";
import { section } from "framer-motion/client";
export default function UpdateData() {
const { id } = useParams();

const [data, setData] = useState([]);
const actionData = useActionData();
console.log(actionData);

useEffect(() => {
async function getData() {
    const res = await getDataById(id);
    setData(res.data);
}
getData();
}, [id]);

useEffect(() => {
if (actionData) {
    if (actionData === "update successfully") {
    toast.success(actionData, {
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
    } else {
    toast.error(actionData, {
        icon: "😢😢",
        duration: 3000,
        position: "top-center",
        style: {
        backgroundColor: "red",
        color: "white",
        fontSize: 20,
        width: "25%",
        fontWeight: "500",
        borderRadius: 50,
        },
    });
    }
}
}, [actionData]);

if (!data) return;
const { id: dataId, productName, teacherName, date } = data;

return (
<>
    <div class="main-content d-flex mb-3  justify-content-center align-items-center ">
    <section class="section">
        <div class="section-body">
        <Form method="post">
            <div class="row bg-white rounded  shadow-color p-5  mt-0">
            <div className="col-md-12 text-dark  mt-0 text-center ">
                <legend>Update Data </legend>
                <hr className="hr_color" />
            </div>
            <div className="col-md-6">
                <label htmlFor="employeeId"> EmployeeId-</label>
                <input
                type="number"
                id="employeeId"
                name="id"
                value={dataId}
                readOnly={true}
                className="form-control"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="teacherName"> EmployeeName :-</label>
                <input
                type="text"
                id="teacherName"
                name="teacherName"
                value={teacherName}
                readOnly={true}
                className="form-control"
                />
            </div>

            {/* Column 2 */}

            <div className="col-md-6 mt-3">
                <label htmlFor="productQuantity">ItemQuantity :-</label>
                <input
                type="number"
                id="productQuantity"
                name="productQuantity"
                className="form-control"
                />
            </div>
            <div className="col-md-6 mt-3">
                <label htmlFor="productName">ItemName :-</label>
                <input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                readOnly={true}
                className="form-control"
                />
            </div>

            <div className="col-md-6 mt-3">
                <label htmlFor="productName">Date :-</label>
                <input
                type="text"
                id="date"
                name="date"
                value={date}
                readOnly={true}
                className="form-control"
                />
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-success w-100">Update</button>
            </div>
            </div>
        </Form>
        </div>
    </section>
    </div>
</>
);
}

export async function action({ request }) {
const formData = await request.formData();
const data = Object.fromEntries(formData);

const res = await updateData(data);

return res.data;
}
