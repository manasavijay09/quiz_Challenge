var previousdashboard=JSON.parse(localStorage.getItem("codequiz")) || []
let recordsEl =document.getElementById("records");
let recordsHTML =""
for(let i=0;i<previousdashboard.length;i++){
  recordsHTML += `<tr><td>${previousdashboard[i].user}<td><td>${previousdashboard[i].finalscore}</td></tr>`
}
recordsEl.innerHTML = recordsHTML