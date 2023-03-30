(async()=>{
// let btn = document.getElementById("AddJob");
let list = document.getElementById("uljoblist");
let btnNewJob = document.getElementById("btnAddNewJob");
let btnAddJobs = document.getElementById("addJobs");
let divAddjob = document.getElementById("AddJob");
let editJob = document.getElementById("editJob");
let btnSaveEdits = document.getElementById("btnSaveEdits");
let btnCancelEdits = document.getElementById("btnCancelEdits");

btnAddJobs.addEventListener("click", () => {
	divAddjob.className = "show";
	editJob.className = "hide";
});
// console.log(btnAddJobs,'click');
btnNewJob.addEventListener("click",addNewJob); 
async function addNewJob(){
 const jobtitle = document.querySelector('input[name="jobtitle"]').value;
 const company = document.querySelector('input[name="company"]').value;
 const jobcategory = document.querySelector('input[name="jobcategory"]').value;
 const region = document.querySelector('input[name="region"]').value;

 const requestData = {
    jobtitle,
    company,    
    jobcategory,
    region,
 };
 await fetch("http://localhost:4000/jobs",{
    method: 'POST',
    headers:{
        "content-type": "application/json",
    },
    body:JSON.stringify(requestData)
 })
}









})();




