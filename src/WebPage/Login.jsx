import React, { useEffect } from "react";
import { Form, useActionData, useLocation, useNavigate} from "react-router-dom";
import { useAuth } from "./Auth";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../_lib/lib";
import { toFormData } from "axios";

export default function Login() {
  const {isLoggedIn, setIsLoggedIn} =useAuth();

 const data = useActionData();
  const path = useLocation();
  const navigate = useNavigate();
  console.log(data)

  useEffect(() => {
      if (data) {
        setIsLoggedIn(true); // Update state
        if (path.pathname === "/login") {
          navigate("/");
        }
      } else {
        if (!data) {
          toast("invalid Data")
        }
      }
    
  },[data,isLoggedIn,setIsLoggedIn,navigate,path.pathname])
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
            <div className="row bg-white rounded shadow-color p-5">
              <div className="col-12 text-dark text-center">
                <legend>Login Here</legend>
                <hr className="hr_color" />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  name="userName"
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  id="password"
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

              {/* <div className="col-12 mb-3 mt-4 text-center  ">
                <span className="text-color">
                  {" "}
                  Don't have an account?{" "}
                  <NavLink to={"/register_form"}>Register here</NavLink>
                </span>
              </div> */}
            </div>
          </Form>
        </section>
      </div>
    </>
  );
}

export async function action({request }) {
  const Request = await request.formData();
  const data = Object.fromEntries(Request);
  console.log(data)
  const newData= await login(data)
  console.log(newData);
  return newData.data;
  
}