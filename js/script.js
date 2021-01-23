fetch('https://api.github.com/users/dhruvp4u')
  .then(response => response.json())
  .then(data => {
      document.querySelector("#repos").innerHTML = data["public_repos"];
      document.querySelector("#followers").innerHTML = data["followers"];
      document.querySelector("#following").innerHTML = data["following"];
    });