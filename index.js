// Add your code here
const nameEmail = {
    name: "sarah",
    email: "SarahColgate@yahoo.com"
}
const bodyE = documemnt.querySelector("body")
// create  submitData function
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name,email})

    })
    .then(resp => {return resp.json()})
    .then( resp => document.querySelector("body").append(resp.id))
    .catch(error => document.body.append(error.message))
    
}
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     }); 