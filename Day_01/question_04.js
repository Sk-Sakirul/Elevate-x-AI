function loginUser(username, password) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        res(true);
      } else {
        res(false);
      }
    }, 1000);
  })
}

async function startLogin(username, password) {
  try {
    const isAuthenticated = await loginUser(username, password);
    if (isAuthenticated) {
      console.log("Login Successful");
    } else {
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.log(error.message);
  }
}

startLogin("admin", "1234");
startLogin("admin", "wrong");
