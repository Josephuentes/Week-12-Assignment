var selectedRow = null

//show alerts
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 2000)
}

//clear fields
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#studentNumber").value = "";
}

//create
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //get form values
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const studentNumber = document.querySelector("#studentNumber").value

    //validate
    if(firstName == "" || lastName == "" || studentNumber == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector(".student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${studentNumber}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");
             
        }
        else{
            selectedRow.children[0].textcontent = firstName;
            selectedRow.children[1].textcontent = lastName;
            selectedRow.children[2].textcontent = studentNumber;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearFields()
    }
});

//update data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textcontent;
        document.querySelector("#lastName").value = selectedRow.children[1].textcontent;
        document.querySelector("#studentNumber").value = selectedRow.children[2].textcontent;
    }
});

//delete data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert ("Student Data Deleted", "danger");
    }
})

console.log(document.querySelector("#student-list"))