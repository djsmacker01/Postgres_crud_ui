(async () => {
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

	// Add new job to database
	btnNewJob.addEventListener("click", addNewJob);
	async function addNewJob() {
		const jobtitle = document.querySelector('input[name="jobtitle"]').value;
		const company = document.querySelector('input[name="company"]').value;
		const jobcategory = document.querySelector(
			'input[name="jobcategory"]',
		).value;
		const region = document.querySelector('input[name="region"]').value;

		const requestData = {
			jobtitle,
			company,
			jobcategory,
			region,
		};
		await fetch("http://localhost:4000/jobs", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(requestData),
		});
	}

	//Displays the list of jobs
	await getJobList();

	async function getJobList() {
		const response = await fetch("http://localhost:4000/jobs");
		const { result:data } = await response.json();
		console.table(data);

		for (let index = 0; index < data.length; index++) {
			let { id, jobtitle, company, jobcategory } = data[index];

            let li = document.createElement('tr');
            li.textContent =`${jobtitle} ${company} ${jobcategory}`

            btnEdit = document.createElement('button');
            btnEdit.textContent ="Edit";
            btnEdit.addEventListener('click', async()=>{
                await editJobs(id)
            })

            btnDelete = document.createElement('button');
            btnDelete.textContent ="Delete";
            btnDelete.addEventListener("click", async () => {
                await deleteJob(id)
            })

            li.innerHTML = `${id} - ${jobtitle}  (${jobcategory})`;
            li.append(btnEdit);
            li.append(btnDelete);
            list.append(li);



		}
	}

    //Delete the job entry

    // Edit the job entry
   async function editJob(jobId){
    divAddjob.className = "hide";
	editJob.className = "show";

    //fetch the job with the specified ID
    const response = await fetch(`http:localhost:4000/jobs/${jobId}`,{
          method : "GET",
        });
    const {result:arryOfJob}= await response.json();   

    document.querySelector('input[name="editJobId"]').value = arryOfJob[0].id;
    document.querySelector('input[name="editJobtitle"]').value = arryOfJob[0].jobtitle;
    document.querySelector('input[name="editCompany"]').value = arryOfJob[0].company;
    document.querySelector('input[name="editJobCategory"]').value = arryOfJob[0].jobcategory;
    document.querySelector('input[name="editRegion"]').value = arryOfJob[0].region;


   }
	// Save the edit job
   btnSaveEdits.addEventListener("click", async() => {
   await saveEdits()
   })

  async function saveEdits() {
    let id = document.querySelector('input[name="editJobId"]').value;
	let jobtitle = document.querySelector('input[name="editJobtitle"]').value;
	let company = document.querySelector('input[name="editCompany"]').value;
	let jobcategory = document.querySelector('input[name="editJobCategory"]').value;
	let region = document.querySelector('input[name="editRegion"]').value;

		let saveJob = {
			id: parseInt(id, 10),
			jobtitle,
			jobcategory,
			company,
			region,
		};


		await fetch(`http://localhost:4000/jobs/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(saveJob), // body data type must match "Content-Type" header
		});

   }

   // Cancel the edit job
   btnCancelEdits.addEventListener("click", async() => {
    	divAddJob.className = "hide";
		editJob.className = "hide";
   });

    

    
    
})();
