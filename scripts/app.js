function submithandler(e) {
  e.preventDefault();
  document.querySelector("#studentName").innerText =
    document.querySelector("#student").value;
  document.querySelector("#studentDOB").innerText =
    document.querySelector("#dateOfBirth").value;
  document.querySelector("#studentClassResult").innerText =
    document.querySelector("#studentClass").value;
  document.querySelector("#studentRoll").innerText =
    document.querySelector("#studentRollNumber").value;
  document.querySelector("#studentContact").innerText = document.querySelector(
    "#studentCONTACTNumber"
  ).value;

  let profilePic = document.getElementById("profile-pic");
  let inputFile = document.getElementById("input-file");
  if (inputFile.files.length > 0) {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    console.log(profilePic.src);
  }

  document.querySelector(".cardContainer").style.display = "flex";
  document.querySelector(".formContainer").style.display = "none";
}

function clearhandler() {
  document.querySelector("#student").value = "";
  document.querySelector("#dateOfBirth").value = "";
  document.querySelector("#studentClass").value = "";
  document.querySelector("#studentRollNumber").value = "";
  document.querySelector("#studentCONTACTNumber").value = "";
  document.querySelector("#input-file").value = "";
}

document
  .getElementById("studentForm")
  .addEventListener("submit", submithandler);

function prinIdCard() {
  window.print();
}

function backToForm() {
  document.querySelector(".cardContainer").style.display = "none";
  document.querySelector(".formContainer").style.display = "flex";
}
