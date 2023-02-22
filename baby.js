function Add(){
    let name = document.getElementById('inputname').value;
    let surname = document.getElementById('inputsurname').value;
    let gender = document.getElementById('inputgender').value;    
    let birthdate = document.getElementById('inputbirthdate').value;
    let table = document.getElementById('table')
    let item = document.createElement('tr')
    let initem1 = document.createElement('td')
    let initem2 = document.createElement('td')
    let initem3 = document.createElement('td')
    let initem4 = document.createElement('td')
    if (name == "" || surname == "" || birthdate == ""){
        alert("ข้อมูลไม่ครบ")
    }
    else {
    initem1.style.textAlign = "center"
    initem2.style.textAlign = "center"
    initem3.style.textAlign = "center"
    initem4.style.textAlign = "center"
    initem1.innerText = name;
    initem2.innerText = surname;
    initem3.innerText = gender;
    initem4.innerText = birthdate;
    item.appendChild(initem1)
    item.appendChild(initem2)
    item.appendChild(initem3)
    item.appendChild(initem4)
    table.appendChild(item)
    }
}
