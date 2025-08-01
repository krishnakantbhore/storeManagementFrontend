import React, {useEffect, useRef} from "react";
import {Form, useActionData, useLoaderData} from "react-router-dom";
import {getAllEmployeeName, saveOutwordEntry} from "../_lib/lib";
import toast from "react-hot-toast";
import { useAuth } from "./Auth";

export default function Outword() {
  const x = useAuth();
  console.log(x);
  const actionData = useActionData();
  const formRef = useRef();
  // console.log(actionData?.data);

  const loaderData = useLoaderData();
  console.log(loaderData);

  useEffect(() => {
    if (actionData) {
      if (actionData?.data === "save successfully") {
        toast.success(actionData?.data, {
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
        toast.error(actionData?.data, {
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
    formRef.current.reset();
  }, [actionData]);

  return (
    <>
      <div class="main-content d-flex justify-content-center align-items-center ">
        <section class="section">
          <div class="section-body">
            <Form method="post" ref={formRef}>
              <div class="row bg-white rounded  shadow-color p-5 1">
                <div className="col-md-12 text-dark  mt-0 text-center ">
                  <legend>Outword Entry </legend>
                  <hr className="hr_color" />
                </div>
                <div className="col">
                  <label htmlFor="name1">Item Name</label>
                  <input
                    type="text"
                    id="name1"
                    name={"productName"}
                    className="form-control"
                    required={true}
                  />
                </div>
                <div className="col ">
                  <label htmlFor="name1">Techer Name</label>
                  {/* <input type="text" id="name1" name={"teacherName"} className="form-control"
                                        required={true}/> */}
                  <select className="form-control" name={"teacherName"}>
                    <option>Select a Teacher Name</option>
                    {loaderData.map((name) => (
                      <option value={name}> {name}</option>
                    ))}
                  </select>
                </div>
                <div className="col ">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name={"productQuantity"}
                    className="form-control"
                    required={true}
                  />
                </div>
                <div className="col-md-12 text-center mt-4">
                  <button className="btn btn-light bttonn-color btn-lg  w-25">
                    <span className="text-size">Submit</span>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
}

export async function action({request}) {
const formData = await request.formData();
const data = Object.fromEntries(formData)
console.log(data)
const res = saveOutwordEntry(data);
console.log(res)
return res;

}

export async function loader() { 
    const data = await getAllEmployeeName();
    return data.data
}