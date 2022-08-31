// Add your code here
const submitData = {
    userName: "Nicholas",
    userEmail: "Ndikwe",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("not good");
      console.log(error.message);
    });