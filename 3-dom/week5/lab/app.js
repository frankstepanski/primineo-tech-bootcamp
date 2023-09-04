/*------------------------ Setting up a JSON server ------------------------*/

// Setup your JSON server

/**
 * Documentation: https://www.npmjs.com/package/json-server#getting-started
 *
 * Step 1: In your console, type: npm install json-server
 *
 * Step 2: Create a script in your package.json file:
 *        "scripts": {
 *           "json-server": "json-server --watch db.json"
 *        }
 *
 *         Resources
 *         http://localhost:3000/studentRoster
 *
 * Step 3: Install VSC Extension: Preview on Web Server (Live Server causes a reload on POST/PUT/DELETE)
 *         To open index.html in your browser, right click on the file and select "vscode-preview-server"
 *         https://github.com/typicode/json-server/issues/1106
 * 
 **/

// global variable to store all students
const STUDENT_DATA=[];

// function fetches all students from the API and stores in the STUDENT_DATA array
function fetchStudents(API_URL) {

  // fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  STUDENT_DATA.length = 0; // reset the array

  // fetch returns a promise: https://developer.mozilla.org/en-US/docs/Web/API/fetch
  return fetch(API_URL)
            .then(res => res.json())
            .then(data => {  // chaining promises
                STUDENT_DATA.push(...data);
                console.log(STUDENT_DATA);
            })
            // .then(() => renderStudents()
            .catch(err => console.log(err))
}

// function renders all students to the DOM
function renderStudents() {

    const table = document.querySelector('table');
    const tbody = document.querySelector('tbody');

    tbody.innerHTML = ''; // clear the table for re-rendering

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

    const API_URL = 'http://localhost:3000/studentRoster';

    // add
    return fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(student) // convert JS object to JSON string
            })
            .catch(err => console.log(err))
}

// function deletes a student from the API
function deleteStudent(id) {

    const url = `http://localhost:3000/studentRoster/${id}`;

    fetch(url, {

        method: 'DELETE'
    })
    .catch(err => console.log(err))

  }

function submitHandler() {

    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {

        e.preventDefault();

        const id = Math.floor(Math.random() * (1000 - STUDENT_DATA.length) + STUDENT_DATA.length); // unique id
        const name = form.querySelector('#full-name').value;
        const assignment = form.querySelector('#research-assignment').value;

        const student = {
            id: id,
            fullName: name,
            researchAssignment: assignment
        }

        console.log("student added to API >>>", student);

        // add student to API, re-fetching and then re-rendering the students
        await postStudent(student);

        // fetch students
        await fetchStudents('http://localhost:3000/studentRoster');

        // render students with new student (json-server automatically adds the student to the db.json file)

        // reset the form
        form.reset();
    })

}

// scaffold app (setup the app):
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