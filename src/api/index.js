
export default function fetchTodos(){
  return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(todos => todos)
        .catch(err => err);

}