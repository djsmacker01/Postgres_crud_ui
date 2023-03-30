(async()=>{
let btn = document.getElementById("AddJob");
let list = document.getElementById("uljoblist");

let btnAddJobs = document.getElementById("addJobs");
let divAddjob = document.getElementById("AddJob");
let editJob = document.getElementById("editJob");
let btnSaveEdits = document.getElementById("btnSaveEdits");
let btnCancelEdits = document.getElementById("btnCancelEdits");

btnAddJobs.addEventListener("click", () => {
	divAddjob.className = "hide";
	editJob.className = "hide";
});
console.log(btnAddJobs,'click');
})();
