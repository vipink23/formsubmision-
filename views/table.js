// // const form = document.querySelector("form");

// function fetchAddressData() {
//   return axios.get("http://localhost:5001/address/"); 
// }

// function deleteAddress(id) {
//   axios
//     .delete("http://localhost:5001/address/" + id)
//     .then((e) => {
//       console.log(e.data);
//       location.reload();
//     })
//     .catch((e) => console.log(e));
// }
// function fetchSingleAddress(id) {
//   return axios.get(`http://localhost:5001/address/${id}`);
// }


// function updateAddress(id, updatedAddress) {
//     // Make a PUT or PATCH request to update the address data
//     // Replace 'PUT_OR_PATCH_ENDPOINT' with the actual API endpoint for updating addresses
//     return axios.patch(`http://localhost:5001/address/${id}`, updatedAddress);
//   }


// function populateEditForm(address) {
//   console.log(address, "ddadadda");
//   console.log(address.name);
//   console.log(address.phone);
//   console.log(address.address);
//   console.log(address.city);
//   console.log(address.pincode);

// //   document.querySelector("#name").value = address.name;

//     document.querySelector("#name").value = address.name ||'';
//     document.querySelector("#phone").value = address.phone || '';
//     document.querySelector("#address").value = address.address || '';
//     document.querySelector("#city").value = address.city || '';
//     document.querySelector("#pincode").value = address.pincode || '';
  
// }

// // Function to handle the edit button click
// function editAddress(id) {
//   fetchSingleAddress(id)
//     .then((response) => {
//         console.log(response.data,'respose');
//       const address = response.data;
//       console.log(address,'adrrrr');
//       const editForm = document.querySelector("form");

//     //  window.location.href = "/views/Form.html";
//       populateEditForm(address);
//       console.log(address,'addresssssss');


//       editForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const updatedAddress = {
//           name: document.querySelector("#name").value,
//           phone: document.querySelector("#phone").value,
//           address: document.querySelector("#address").value,
//           city: document.querySelector("#city").value,
//           pincode: document.querySelector("#pincode").value,
//         };

//         updateAddress(id, updatedAddress)
//           .then(() => {
//             // Reload the table data after successful update
//             location.reload();
//           })
//           .catch((error) => {
//             console.error("Error updating address:", error);
//           });
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching address data:", error);
//     });
// }

// // Function to display address data in the HTML table
// function displayAddressData(addresses) {
//   console.log(addresses, "display");
//   const tbody = document.querySelector("#addressTable tbody");

//   addresses.forEach((address) => {
//     const id = address._id;
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${address.name}</td>
//       <td>${address.phone}</td>
//       <td>${address.address}</td>
//       <td>${address.city}</td>
//       <td>${address.pincode}</td>
//       <td>
//         <button onclick="editAddress('${id}')">Edit</button>
//         <button onclick="deleteAddress('${id}')">Delete</button>
//       </td>

//     `;
//     tbody.appendChild(row);
//   });
// }

// // Main entry point
// document.addEventListener("DOMContentLoaded", () => {
//   fetchAddressData()
//     .then((response) => {
//       console.log(response, "axios");
//       const addresses = response.data;
//       displayAddressData(addresses);
//     })
//     .catch((error) => {
//       console.error("Error fetching address data:", error);
//     });
// });
