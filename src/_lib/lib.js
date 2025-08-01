// import axios from "axios";

// export async function saveOutwordEntry(data){

//     const res = await axios.post("http://localhost:8080/saveOutwordData", data);
//     return res;

// }

// export async function saveInwordEntry(data){
//     const res = await axios.post("http://localhost:8080/saveInword", data);
//     return res;
// }

// export async function getInwordReport(date){
//     const res = await axios.get(`http://localhost:8080/getAllInwordDataByDate?date=${date}`);
//     return res;
// }

// export async  function getOutwordDataByTeacherName(name){
//     const res = await axios.get(`http://localhost:8080/getOutwordDataByTeacherName?teacherName=${name}`);
//     return res;
// }

// export async function getOutwordReportByName(name){
//     const res = await axios.get(`http://localhost:8080/getOutwordReportByName?teacherName=${name}`)
//     return res;
// }
// export async  function getOutwordDataByDate(date){
//     const res = await axios.get(`http://localhost:8080/getOutwordDataByDate?date=${date}`);
//     return res;
// }

// export async  function getOutwordReportByDate(date){
//     const res = await axios.get(`http://localhost:8080/findByDateReport?date=${date}`);
//     return res;
// }


// export async  function getAllData( ){
//     const res = await axios.get(` http://localhost:8080/getAllData`,);
//     return res;
// }

// export async function getDataById(id){
//     const res = await axios.get(` http://localhost:8080/getById?id=${id}`)
//     return res;
// }

// export async function updateData(data){
//     const res = await axios.post(` http://localhost:8080/updateOutwordData`, data)
//     return res;
// }

// export async function deleteDataById(id){
//     const res = await axios.get(` http://localhost:8080/deleteById?id=${id}`)
//     return res;
// }

// export async function saveEmployeeData(data){
//     const res = await axios.post(` http://localhost:8080/saveEmployee`, data)
//     return res;
// }

// export async function getAllEmployeeData(){
//     const res = await axios.get(`http://localhost:8080/getAllEmployeeData`);
//     return res;
// }

// export async function getAllEmployeeName() {
//     const res = await axios.get(`http://localhost:8080/findTeacherName`);
//     return res;
// }

// export async function getOutwordDataByDepartment(department) {
//     const res = await axios.get(`http://localhost:8080/getOutwordDataByDeparment?departmentName=${department}`);
//     return res;
// }

// export async function login(data) {
//     const res = await axios.post(`http://localhost:8080/login`, data)
//     return res;
// }

// export async function RegisterUser(data) {
//     const res = await axios.post(`http://localhost:8080/createUser`, data)
//     return res;
// }

// export async function getAllUserData() {
//     const res = await axios.get(`http://localhost:8080/getAllUsers`);
//     return res;
// }

// export async function getAllUserDataById(id) {
//     const res = await axios.get(`http://localhost:8080/getAllUsersById?id=${id}`);
//     return res;
// }

// export async function deleteUserDataById(id) {
//     const res = await axios.delete(`http://localhost:8080/deleteById/${id}`);
//     return res;
// }



import axios from "axios";

export async function saveOutwordEntry(data) {

    const res = await axios.post("https://jiajamatastore-production.up.railway.app/saveOutwordData", data);
    return res;

}

export async function saveInwordEntry(data) {
    const res = await axios.post("https://jiajamatastore-production.up.railway.app/saveInword", data);
    return res;
}

export async function getInwordReport(date) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getAllInwordDataByDate?date=${date}`);
    return res;
}

export async function getOutwordDataByTeacherName(name) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getOutwordDataByTeacherName?teacherName=${name}`);
    return res;
}

export async function getOutwordReportByName(name) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getOutwordReportByName?teacherName=${name}`)
    return res;
}
export async function getOutwordDataByDate(date) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getOutwordDataByDate?date=${date}`);
    return res;
}

export async function getOutwordReportByDate(date) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/findByDateReport?date=${date}`);
    return res;
}


export async function getAllData() {
    const res = await axios.get(` https://jiajamatastore-production.up.railway.app/getAllData`,);
    return res;
}

export async function getDataById(id) {
    const res = await axios.get(` https://jiajamatastore-production.up.railway.app/getById?id=${id}`)
    return res;
}

export async function updateData(data) {
    const res = await axios.post(` https://jiajamatastore-production.up.railway.app/updateOutwordData`, data)
    return res;
}

export async function deleteDataById(id) {
    const res = await axios.get(` https://jiajamatastore-production.up.railway.app/deleteById?id=${id}`)
    return res;
}

export async function saveEmployeeData(data) {
    const res = await axios.post(` https://jiajamatastore-production.up.railway.app/saveEmployee`, data)
    return res;
}

export async function getAllEmployeeData() {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getAllEmployeeData`);
    return res;
}

export async function getAllEmployeeName() {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/findTeacherName`);
    return res;
}

export async function getOutwordDataByDepartment(department) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getOutwordDataByDeparment?departmentName=${department}`);
    return res;
}

export async function login(data) {
    const res = await axios.post(`https://jiajamatastore-production.up.railway.app/login`, data)
    return res;
}

export async function RegisterUser(data) {
    const res = await axios.post(`https://jiajamatastore-production.up.railway.app/createUser`, data)
    return res;
}

export async function getAllUserData() {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getAllUsers`);
    return res;
}

export async function getAllUserDataById(id) {
    const res = await axios.get(`https://jiajamatastore-production.up.railway.app/getAllUsersById?id=${id}`);
    return res;
}

export async function deleteUserDataById(id) {
    const res = await axios.delete(`https://jiajamatastore-production.up.railway.app/deleteById/${id}`);
    return res;
}
