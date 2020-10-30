window.addEventListener("load", function() {

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    response.json().then(function (json) {
    
        json.sort(function(a,b) {
            return b.hoursInSpace - a.hoursInSpace;
        });

        let container = document.getElementById("container");
         for (let i = 0; i < json.length; i++) {
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li class="active">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(', ')}</li>
                </ul>
            </div>
            <img class="avatar" src=${json[i].picture}>
            </div>
            `;
         }
         let activeColor = document.getElementsByClassName("active");
         for (let j = 0; j < activeColor.length; j++) {
             if (json[j].active === true) {
                activeColor[j].style.color="green"; 
             }
         }

        });
    });
});
