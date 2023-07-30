const form = document.querySelector("form");
const messageName=document.querySelector('#error-name')
const messageStandard=document.querySelector('#error-std')
const messageSubject=document.querySelector('#error-sub')
const messageMark=document.querySelector("#error-mark")
let err

let studentId=null

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
       // Get form field values
       const name = form.elements.name.value;
       const standard = form.elements.standard.value;
       const subject = form.elements.subject.value;
       const mark = form.elements.mark.value;
     
     
      //  console.log("Name:", name);
       // console.log("Phone:", phone);
       // console.log("Address:", address);
       // console.log("City:", city);

    // validation
    
      err = [];
     if(name == '' || name === null){
      err.push('Please enter the name')
      console.log('enter name');
      
     }
     messageName.innerHTML = err.join('<br>')
     
     err=[]
     if(standard == '' || standard === null){
      err.push('Please enter the standard')
      console.log('enter standard');
     }
     messageStandard.innerHTML=err.join('<br>')
     err=[]
     if(subject =='' || subject == null){
      err.push('Please enter the subject')
     }
     messageSubject.innerHTML=err.join('<br>')


     err=[]
     if(mark =='' || mark == null){
      err.push('Please enter the mark')
     }
      if(isNaN(mark)){
        err.push('marks should be a number')
     }
     messageMark.innerHTML=err.join('<br>')
     if (err.length > 0) {
      // If there are errors, don't proceed with form submission
      return;
    }
    
 


     
       const datas = {
         name: name,
         standard: standard,
         subject: subject,
         mark: mark,
       };
  if(!studentId){
    console.log(datas,'submit');
  axios
    .post("http://localhost:5001/student", datas)
    .then((e) => {
    console.log('succefully');
   location.reload();
    })
    .catch((e) => {
      console.log(e.message);
    });
  }else{

   axios.patch('http://localhost:5001/student/'+studentId, datas).then((e)=>{
    console.log('succefully');
    location.reload();
   }).catch((e)=>{
    console.log(e.message);
   })
   console.log(datas,'edit');
  }
}




// Attach the handleSubmit function to the form's submit event
form.addEventListener("submit", handleSubmit);






function fetchStudentData() {
  return axios.get("http://localhost:5001/student/"); 
}

function fetchSingleStudent(id){
  return axios.get("http://localhost:5001/student/"+id)
}

function displayStudentData(students) {
  console.log(students, "display");
  const tbody = document.querySelector("#Student-table tbody");

  students.forEach((student) => {
    const id = student._id;
    // console.log(id,'stuend iddd');
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.standard}</td>
      <td>${student.subject}</td>
      <td>${student.mark}</td>
      <td>
        <button class="edit-btn" onclick="editStudent('${id}')">Edit</button>
        <button class="delete-btn" onclick="deleteStudent('${id}')">Delete</button>
      </td>

    `;
    tbody.appendChild(row);
  });
}


function deleteStudent(id) {
  axios
    .delete("http://localhost:5001/student/" + id)
    .then((e) => {
      console.log(e.data);
     location.reload();
    })
    .catch((e) => console.log(e));
}

function editStudent(id){
  fetchSingleStudent(id).then((e)=>{
    console.log(e.data,'dataaaaa');
    populateEditForm(e.data);
  })
}

function populateEditForm(student) {
  console.log(student.mark, "ddadadda");

  // Set the addressId as a data attribute in the form
  studentId=student._id
  // document.querySelector("#addressId").value = address._id;

  // Fill the form fields with the address data
  document.querySelector("#name").value = student.name;
  document.querySelector("#standard").value = student.standard ;
  document.querySelector("#subject").value = student.subject ;
  document.querySelector("#mark").value = student.mark;
 
}


document.addEventListener("DOMContentLoaded", () => {
  fetchStudentData()
    .then((response) => {
      console.log(response, "axios");
      const students = response.data;
      console.log(students,'student');
      displayStudentData(students);
    })
    .catch((error) => {
      console.error("Error fetching address data:", error);
    });
});