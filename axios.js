
//axios GLOBAL
axios.defaults.headers.common['X-Auth_Token'] = 'some token';  


// GET REQUEST
function getTodos() {
  //console.log('GET Request');
  /*
  //method 1
  axios({
      method : 'get',
      url : 'https://jsonplaceholder.typicode.com/todos',
      param : {
          _limit : 5
      }
  }).then(res => showOutput(res))
     .catch(err => console.log(err));
     */
    //Method 2
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
  //console.log('POST Request');
  /*
  //method 1
  axios({
    method : 'post',
    url : 'https://jsonplaceholder.typicode.com/todos',
    data : {
        title : 'New todo',
        completed : false
    }
}).then(res => showOutput(res))
   .catch(err => console.log(err));
   */
  //method 2
  axios
  .post('https://jsonplaceholder.typicode.com/todos',{
    title : 'New Todo',
    completed : false
    })
   .then(res => showOutput(res))
   .catch(err => console.log(err));
}

// PUT(update entore resourec)/PATCH REQUEST
function updateTodo() {
  //console.log('PUT/PATCH Request');
  /*
  axios
  .put('https://jsonplaceholder.typicode.com/todos/1',{
    title : 'Updated Todo',
    completed : true
    })
   .then(res => showOutput(res))
   .catch(err => console.log(err));*/
   axios
   .patch('https://jsonplaceholder.typicode.com/todos/1',{
     title : 'Updated Todo',
     completed : true
     })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
 }


// DELETE REQUEST
function removeTodo() {
  //console.log('DELETE Request');
  axios
  .delete('https://jsonplaceholder.typicode.com/todos/1')
   .then(res => showOutput(res))
   .catch(err => console.log(err));
}


// SIMULTANEOUS DATA
function getData() {
  //console.log('Simultaneous Request');
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
  .then(axios.spread((todos,posts) => showOutput(posts)))
  .catch(err => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  //console.log('Custom Headers');
  const config ={
      headers :{
          'Content-Type' : 'application/json',
          Authorization : 'sometoken'
      }
  }
  axios
  .post('https://jsonplaceholder.typicode.com/todos',{
    title : 'New Todo',
    completed : false
    },
    config
    )
   .then(res => showOutput(res))
   .catch(err => console.log(err));
}


// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  //console.log('Transform Response');
  const options ={
      method : 'post',
      url : 'https://jsonplaceholder.typicode.com/todos',
      data : {
          title : 'Hello world'
      },
      transformResponse : axios.defaults.transformResponse.concat(data => {
          data.title = data.title.toUpperCase();
          return data;
      })
  }
  axios(options).then(res => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
 
 // console.log('Error Handling');
 axios
 .get('https://jsonplaceholder.typicode.com/todoss')
 .then(res => showOutput(res))
 .catch(err => {
     if (err.response){
         console.log(err.response.data);
         console.log(err.response.status);
         console.log(err.response.header);

         if (err.response.status === 404){
             alert ('Error : page Not found');
         }else if (err.request){
             console.log(err.request);
         }else {
             console.log(err.mesage);
         }
        }
 });

 
}
//axios instNCE
const axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});
axiosInstance.get('/comments').then(res => showOutput(res));
// CANCEL TOKEN
function cancelToken() {
  //console.log('Cancel Token');
  axios
 .get('https://jsonplaceholder.typicode.com/todoss',{
     cancelToken : SourceBuffer.token
 })
 .then(res => showOutput(res))
 .catch(thrown =>{
     if(axios.isCancel(thrown) ){
         console.log('Request canceled',thrown.message);
     }
 });
 if(true){
    SourceBuffer.cancel('REquest camceled')
 }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config;
}, error => {
    return Promise.reject(error);
})

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

