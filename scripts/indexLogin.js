let user = localStorage.getItem("tripUser");

const div = document.querySelector(".list>ul>a");

// console.log(div)
if (user) {
  div.innerText = "";
  const btn = document.createElement("button");
  btn.innerText = "Log Out";
  btn.addEventListener("click", logoutUser);
  btn.setAttribute("id", "btn");

  div.append(btn);
  div.removeAttribute("href");
}

function logoutUser() {
  localStorage.removeItem("tripUser");
  location = "index.html";
}
