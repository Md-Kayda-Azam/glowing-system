import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


// get elements 
const Staff_add_from = document.getElementById('Staff_add_from');
const Staff_data_list = document.getElementById('Staff_data_list');


Staff_add_from.addEventListener('submit', function (e) {
  e.preventDefault();

  const msg = document.querySelector('.msg');


  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries())

  let {
    name,
    cell,
    photo,
    location
  } = data;

  if (name == '' || cell == '' || location == '') {

    msg.innerHTML = Alert.danger('All fileds are required');

  } else {

    Storage.set('Staffs', data);
    Staff_add_from.reset();
    getAllstaff();

  }



});


function getAllstaff(){

  let data = Storage.get('Staffs');

  let list = '';
  data.map((data, index) => {

    let { name, cell, location, photo} = data;

    list += `
        <tr>
            <td>${ index +1}</td>
            <td>${ name }</td>
            <td>${ cell }</td>
            <td>${ location }</td>
            <td><img style="width:50px; height:50px; object-fit:cover" src="${ photo ? photo : 'assets/img/avater photo.png' }"></td>
            <td>
              <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
              <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger btn-sm onclick="staffDelete(${ index })"><i class="fas fa-trash"></i></button>
            </td>
      </tr> 
    `
  });


  Staff_data_list.innerHTML = list;
}



// Staff Delete
function staffDelete(id){
alert(id)
}