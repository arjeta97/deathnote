let firstname= document.querySelector("#fistname");
let lastname= document.querySelector("#lastname");
let death= document.querySelector("#death");
let enter= document.querySelector("#enter");

enter.addEventListener('click', function(){
    if(firstname.value.trim()=="" || lastname.value.trim()=="" || death.value.trim()==""){
        alert("Please fill out the form");
    } else {
        let new_row = document.createElement("tr");
        let new_fisrtname = document.createElement("td");
        let new_lastname = document.createElement("td");
        let new_death = document.createElement("td");

        new_fisrtname.innerHTML = firstname.value
        new_lastname.innerHTML = lastname.value
        new_death.innerHTML = death.value

        new_row.appendChild(new_fisrtname);
        new_row.appendChild(new_lastname);
        new_row.appendChild(new_death)
        tbody.appendChild(new_row);

        firstname.value = "";
        lastname.value = "";
        death.value = "";


    }
});