import React, { useEffect, useRef } from "react";
import { Form, useActionData } from "react-router-dom";
import { saveInwordEntry } from "../_lib/lib";
import toast from "react-hot-toast";

export default function Inword() {
  const actionData = useActionData();
  const formRef = useRef();
  // console.log(actionData?.data);

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
    <div class="main-content mt-0 d-flex justify-content-center align-items-center  ">
      <section class="section">
        <div class="section-body">
          <Form method="post" ref={formRef}>
            <div class="row bg-white rounded  shadow-color p-4 1">
              <div className="col-md-12 text-dark  mt-0 text-center ">
                <legend>Inword Entry</legend>
                <hr className="hr_color" />
              </div>

              <div className="col-md-12 mt-3">
                <label htmlFor="name1">Item Name</label>
                <input
                  type="text"
                  id="name1"
                  name={"stockName"}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-12  mt-3">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name={"stockQuantity"}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-12 text-center mt-4">
                <button className="btn btn-light bttonn-color btn-lg  w-25">
                  <span className="text-size">Save</span>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const res = saveInwordEntry(data);
  console.log(data);
  return res;
}
