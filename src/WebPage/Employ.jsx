import react, {useEffect, useRef} from "react";
import {Form, useActionData} from "react-router-dom";
import {saveEmployeeData} from "../_lib/lib";
import toast from "react-hot-toast";
import { div } from "framer-motion/client";

export default function Employ() {
const actionData=useActionData();
const formRef=useRef();
useEffect(() => {
if (actionData) {
    toast("save successfully", {
            icon: '👍👍',
            duration: 2000,
            position: 'top-center',
            style: {
                backgroundColor: "green",
                color: "white",
                fontSize: 20,
                width: "20%",
                fontWeight: "500",
                borderRadius: 50,
            }
        }
        )
}
formRef.current.reset();
}, [actionData])
return (
<div class="main-content d-flex mb-3  justify-content-center align-items-center ">
<section class="section">
<div class="section-body">
                <Form method="post" ref={formRef}>
                    
                <div class="row bg-white rounded  shadow-color p-5  mt-0">
                <div className="col-md-12 text-dark  mt-0 text-center ">

<legend>Employ Registration </legend>
<hr className="hr_color" />
</div>
                            {/* Column 1 */}
                            <div className="col-md-6">
                                <label htmlFor="employeeName"> Name :-</label>
                                <input type="text" id="employeeName" name="employeeName"
                                    required={true}  className="form-control"/>
                            </div>



                            {/* Column 2 */}
                        <div className="col-md-6 ">
                                <label htmlFor="employeeMobileNumber">Mobile :-</label>
                                <input type="number" required={true} id="employeeMobileNumber" name="employeeMobileNumber" className="form-control"/>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label htmlFor="employeeJoiningDate">Join Date :-</label>
                                <input type="date" id="employeeJoiningDate"  required={true} name="employeeJoiningDate" className="form-control"/>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label htmlFor="employeeDevisionType">Division</label>
                                <select id="employeeDevisionType" name="employeeDevisionType" required={true} className="form-control">
                                    <option value="">Select Appoiment</option>
                                    <option value="commerce">Grant</option>
                                    <option value="Non Grant">Non Grant</option>
                                    <option value="CHB">CHB</option>
                                </select>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label htmlFor="employeeAppointmentType">Appoiment Type</label>
                                <select id="employeeAppointmentType"  required={true} name="employeeAppointmentType" className="form-control">
                                    <option value="">Select Appoiment</option>
                                    <option value="commerce">Permanant</option>
                                    <option value="Temporary">Temporary</option>
                                    <option value="CHB">CHB</option>
                                </select>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label htmlFor="employeeDepartment">Department</label>
                                <select id="employeeDepartment" name="employeeDepartment" required={true} className="form-control">
                                    <option value="">Select Department</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="computer">computer</option>
                                    <option value="office">office</option>
                                    <option value="library">library</option>
                                    <option value="exam">exam</option>
                                    <option value="scollership">scollership</option>
                                    <option value="nss">NSS</option>
                                    <option value="zoology">zoology</option>
                                    <option value="botony">botony</option>
                                    <option value="math">Math</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="marathi">Marathi</option>
                                    <option value="economics">economics</option>
                                    <option value="Geography">Geography</option>
                                    <option value="hindi">hindi</option>
                                    <option value="english">english</option>
                                    <option value="sport">sport</option>

                                </select>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label htmlFor="employeeDesignation">
                                    Designation</label>
                                <select id="employeeDesignation" name="employeeDesignation" required={true} className="form-control">
                                    <option value="">Select Designation</option>
                                    <option value={"teacher"}> Teacher</option>
                                    <option value={"cleark"}>Cleark</option>
                                    <option value={"peon"}>Peon</option>
                                    <option value={"librarian"}>Librarian</option>
                                    <option value={"labatendant"}>Labatendant</option>
                                    <option value={"labassistant"}>Labassistant</option>
                                    <option value={"storeKiper"}>StoreKiper</option>
                                </select>
                            </div>


                            <div className="col-md-12 text-center mt-4">
            <button className="btn btn-light bttonn-color btn-lg  w-25"><span className="text-size">Submit</span></button>
            </div>
                        </div>
                    </Form>

                
            </div>
            
</section>      
        </div>


);
}

export async function action({request}){
const formData=await request.formData();
const data=Object.fromEntries(formData)
console.log(data);
const res=await saveEmployeeData(data);
return res.data;
}