function toggleMode() {
  //Assigning the HTML element to the HTML const.
  const html = document.documentElement;
  //Using the toggle function to add or remove the 'light' class on the HTML tag.
  html.classList.toggle("light");
  //Assigning the constant 'img' to the selection of the image in the 'img' element of the 'profile' class div.
  const img = document.querySelector("#profile img");
  //Checking in the HTML element if a 'light' class exists.
  if(html.classList.contains("light")) {
    //If the 'light' class exists in the HTML element, add the image for the light theme.
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    //If the 'light' class is not assigned to the HTML element, add the image for the dark 
    img.setAttribute("src", "./assets/avatar.png");
  }
}


