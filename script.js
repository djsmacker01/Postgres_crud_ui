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
                await editJob(id)
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
})();
