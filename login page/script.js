let sign = async () => {
  let Username = document.querySelector("#username").value;
  let Password = document.querySelector("#pass").value;
  let Email = document.querySelector("#emai").value;

  let msg = await axios.get("https://6267d311786383364225964a.mockapi.io/logintask");

  for (let i of msg.data) {
    if (i.Email == Email) {
      alert("Email already Exist!!");
      return;
    }
  }

  axios
    .post("https://6267d311786383364225964a.mockapi.io/logintask", {
      Username: Username,
      Email: Email,
      Password: Password,
    })
    .then((result) => {
      alert("sign up successfull");
    })
    .catch((error) => {
      alert("Error!!");
    });
};

let log = async () => {
  let msg = await axios.get("https://6267d311786383364225964a.mockapi.io/logintask");

  let Email = document.querySelector("#email").value;
  let Password = document.querySelector("#password").value;
  for (let i of msg.data) {
    if (i.Email == Email && i.Password == Password) {
      alert("Login Successfull");
      return;
    }
  }

  alert("Username or Password Incorrect!!");
};

let pas = () => {
  alert("Click the Click sent to your Email to change Password");
  result;
};