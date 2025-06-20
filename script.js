 let myform = document.getElementById("user-form");
    let Name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email")
    let course = document.getElementById("course")
    let taskList = document.getElementById("task-list")


    let data = [];
    let serial = 1; 
    myform.addEventListener("submit", function (event) {
        event.preventDefault();
        let formdata = {
            serialNo: serial++,
            Name: Name.value,
            age: age.value,
            email: email.value,
            course: course.value
        };
data.push(formdata);
        Name.value = ""; 
        age.value = ""; 
        email.value = ""; 
        course.value = ""; 
        addsomedata();
    });

    
    function addsomedata() {
        taskList.innerHTML = "";

        if (data.length === 0) {
            taskList.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Empty List</td></tr>`;
            return;
        }

        data.forEach((element, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
            <td>${element.serialNo}</td>
                <td>${element.Name}</td>	
                <td>${element.age}</td>
                <td>${element.email}</td>
                <td>${element.course}</td>

                <td>
                    <button id ="Delete-btn" onclick="deleteTask(${index})">Delete</button>
                    <button id ="edit-btn" onclick="editTask(${index})">Edit</button>
                    </td>
                    `;
            taskList.appendChild(row);
        })

    };

    function deleteTask(index) {
        data.splice(index, 1);
        addsomedata();
    }

    function editTask(index) {
        let item = data[index];
        let newName = prompt("Edit name:", item.name);
        let newAge = prompt("Edit age:", item.age);
        let newEmail = prompt("Edit email:", item.email);
        let newCourse = prompt("Edit course:", item.course);

        if (newName) item.name = newName;
        if (newAge) item.age = newAge;
        if (newEmail) item.email = newEmail;
        if (newCourse) item.course = newCourse;

        addsomedata();
    }