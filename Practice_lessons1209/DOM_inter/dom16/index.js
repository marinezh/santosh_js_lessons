const getUserName = () => {
  //   let user = document.querySelector("#user-name");
  //   return user.value;

  return document.querySelector("#user-name").value;
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
});
