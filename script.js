const toggleHeart = document.getElementById("heart");
toggleHeart.addEventListener("click", () => {
  toggleHeart.classList.toggle("fa-solid");
  if (toggleHeart.classList == "fa-reguler fa-heart fa-solid")
    { toggleHeart.style.color = "red";
    }else {
      toggleHeart.style.color = "white";
    }
})