async function fetchData(){
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let result = await response.json();

    // result.forEach((todo)=> {
    //         console.log(todo.title);
    // })

    result.filter((todo) => todo.completed).forEach((todo) => console.log(todo.title))
    // console.log(result)
  } catch (error) {
    console.log(error.message)
  }
}

fetchData();