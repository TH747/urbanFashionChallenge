

function toggleMode() {

console.log ("Dark Mode Activated")

  // const toggleButton = document.getElementById("button");
  const wrapper = document.getElementsByClassName ("wrapper")[0];

  if (wrapper.classList.contains("dark")){
    wrapper.classList.remove("dark");
    wrapper.classList.add("light");
  } else {
    wrapper.classList.remove("light");
    wrapper.classList.add("dark");
  }

  
}