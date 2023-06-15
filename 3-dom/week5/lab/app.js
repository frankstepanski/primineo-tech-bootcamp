/*------------------------ Setting up a JSON server ------------------------*/

// Setup your JSON server

/**
 * Documentation: https://www.npmjs.com/package/json-server#getting-started
 *
 * Step 1: In your console, type: npm install json-server
 *
 * Step 2: Create a script in your package.json file:
 *        "scripts": {
 *           "json:server": "json-server --watch db.json"
 *        }
 *
 *         Resources
 *         http://localhost:3000/studentRoster
 *
 *         Above is the URL we'll use for our CRUD operations. 
 *         It will dyanmically update as we add, delete, and update students.
 * 
 **/

// global variable to store all students
const STUDENT_DATA=[];

// function fetches all students from the API and stores in the STUDENT_DATA array
function fetchStudents(API) {

  // with jQuery (not recommended 👎)
  // $.get(api_url_here).then(data => console.log(data))

  // fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  STUDENT_DATA.length = 0; // reset the array

  // fetch returns a promise: https://developer.mozilla.org/en-US/docs/Web/API/fetch
  return fetch(API)
            .then(res => res.json())
            .then(data => {  // chaining promises
                STUDENT_DATA.push(...data);
                console.log(STUDENT_DATA);
            })
            .catch(err => console.log(err))
}

// function renders all students to the DOM
function renderStudents() {

    const table = document.querySelector('table');
    const tbody = document.querySelector('tbody');

    console.log("*** renderinStudents =>", `${STUDENT_DATA.length} students`);

    for (let i = 0; i < STUDENT_DATA.length; i++) {

        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdName = document.createElement('td');
        const tdAssignment = document.createElement('td');
        const tdDelete = document.createElement('td');

        tdId.textContent = STUDENT_DATA[i].id;
        tdName.textContent = STUDENT_DATA[i].fullName;
        tdAssignment.textContent = STUDENT_DATA[i].researchAssignment;
        tdDelete.textContent = '🗑';
        tdDelete.classList.add('delete');

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAssignment);
        tr.appendChild(tdDelete);

        tbody.appendChild(tr);

        tdDelete.addEventListener('click', () => {
            deleteStudent(STUDENT_DATA[i].id);
            tr.remove();
        })

        table.appendChild(tbody);
        
    }
}

// function adds a student to the API
function postStudent(student) {

    const url = 'http://localhost:3000/studentRoster';

    // add
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(data => STUDENT_DATA.push(...data))
}

// function deletes a student from the API
function deleteStudent(id) {

    const url = `http://localhost:3000/studentRoster/${id}`;

    fetch(url, {

        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => STUDENT_DATA.filter(data => data.id !== id))

  }

function submitHandler() {

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const id = STUDENT_DATA.length + 1;
        const name = form.querySelector('#full-name').value;
        const assignment = form.querySelector('#research-assignment').value;

        const student = {
            id: id,
            fullName: name,
            researchAssignment: assignment
        }

        postStudent(student);
    })

}

// boilerplate app (to start the app):
// note: async means that a function defined inside will return a promise
addEventListener('DOMContentLoaded', async () => {

    // fetch students:
    // await: makes a function wait for a promise (makes asynchrnous code look synchronous)
    await fetchStudents('http://localhost:3000/studentRoster');
    
    // render students
    renderStudents();

    // attach event listeners:
    submitHandler();

});