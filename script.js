let btn = document.getElementById('AddJob');
let list = document.getElementById("uljoblist");

let btnAddJobs = document.getElementById("btnAddJobs");
let divAddjob = document.getElementById("divAddjob");
let editJob = document.getElementById("divEditJob");
let btnSaveEdits = document.getElementById("btnSaveEdits");
let btnCancelEdits = document.getElementById("btnCancelEdits");


btnAddJobs.addEventListener("click",() =>{
    divAddjobs.className="show";
    editJob.className="hide";
});