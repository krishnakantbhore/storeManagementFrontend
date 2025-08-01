import react from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { RegisterUser } from "../_lib/lib";

export default function Register_form() {
  const navigate = useNavigate();
  const data = useActionData();
  if (data) navigate("/");
  return (
    <>
      <div
        className="main-content justify-content-center   mt-0 align-items-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
          marginLeft: "160px",
          marginTop: "-100px ",
        }}
      >
        <section className="section mt-0 " style={{ maxWidth: "400px" }}>
          <Form method="POST">
            <div className="row bg-white text-dark rounded shadow-color p-5">
              <span
                style={{
                  marginLeft: "21.5rem",
                  marginTop: "-2rem",
                  cursor: "pointer",
                }}
                onClick={() => window.history.back()}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>

              <div className="col-12 text-dark text-center">
                <legend>Register Here</legend>
                <hr className="hr_color" />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="name1">Username:</label>
                <input
                  type="text"
                  id="name1"
                  className="form-control"
                  name="userName"
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="quantity">Password:</label>
                <input
                  type="text"
                  id="quantity"
                  name="password"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-12 text-center mt-4">
                <button
                  className="btn btn-light bttonn-color btn-lg w-100"
                  type="submit"
                >
                  <span className="text-size">Submit</span>
                </button>
              </div>
            </div>
          </Form>
        </section>
      </div>
    </>
  );
}

export async function action({ request }) {
  
  const requests = await request.formData();
  const data = Object.fromEntries(requests);
  console.log(data)
  const newData = await RegisterUser(data);
  return newData.data;
}