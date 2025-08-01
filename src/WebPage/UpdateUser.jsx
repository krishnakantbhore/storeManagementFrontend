import React, { useEffect, useRef, useState } from "react";
import { Form, useActionData, useParams, useRevalidator } from "react-router-dom";
import { getAllUserDataById, getDataById, RegisterUser, updateData } from "../_lib/lib";
import toast from "react-hot-toast";
import { section } from "framer-motion/client";
export default function UpdateUser() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const actionData = useActionData();
  const revalidator = useRevalidator();
  console.log(actionData);

  useEffect(() => {
    async function getData() {
      const res = await getAllUserDataById(id);
      setData(res.data);
    }
    getData();
  }, [id]);

  useEffect(() => {
    if (actionData!=null)
    {
       toast.success("update successfully", {
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
         }
       })
      revalidator.revalidate()
      
    }  
  }, [actionData]);

  if (!data) return;
  const { id: dataId,userName,password } = data;

  return (
    <>
      <div class="main-content d-flex mb-3  justify-content-center align-items-center ">
        <section class="section">
          <div class="section-body">
            <Form method="post" >
              <div class="row bg-white rounded  shadow-color p-5  mt-0">
                <div className="col-md-12 text-dark  mt-0 text-center ">
                  <legend>Update Data </legend>
                  <hr className="hr_color" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="employeeId">UserId-</label>
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
                  <label htmlFor="userName"> UserName :-</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    defaultValue={userName}
                    className="form-control"
                  />
                </div>

                {/* Column 2 */}

                <div className="col-md-6 mt-3">
                  <label htmlFor="password">password :-</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    defaultValue={password}
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

  console.log(data)
  // const res = await updateData(data);

   const newData = await RegisterUser(data);
  return newData.data;
}
