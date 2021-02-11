const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const product = urlParams.get('questionid')
let form = document.querySelector('form')


const loaderprofile = ()=>{

  var requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': retrieveToken()
    },
    redirect: 'follow'
  };
  
  fetch(`https://kuizuapp.herokuapp.com/v1/questions/${product}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      loader(result)
   
    })
    .catch(error => console.log('error', error));

  const loader=(data) =>{
    console.log(data)
      let opt = document.querySelectorAll('.option')
      console.log(opt)
      opts = Array.from(opt)
      let cor = opts.filter((opt)=>{
        return data.data.correctOptionIndex == opts.indexOf(opt)
      })
      cor[0].style.background='rgb(143, 240, 143)'
      form.question.value=data.data.question

      // form.correct.value=data.data.options[0]
      // form.Incorrect1.value=data.data.options[1]
      // form.Incorrect2.value=data.data.options[2]
      // form.Incorrect3.value=data.data.options[3]


      let correct =document.querySelector('.question p')
      correct.textContent = data.data.question
      let incorrect1 = document.querySelector('.incorrect1 p')
      incorrect1.textContent = data.data.options[0]
      let incorrect2 = document.querySelector('.incorrect2 p')
      incorrect2.textContent = data.data.options[1]
      let incorrect3 = document.querySelector('.incorrect3 p')
      incorrect3.textContent = data.data.options[2]
      let incorrect4 = document.querySelector('.incorrect4 p')
      incorrect4.textContent = data.data.options[3]

 
      
    }
    

}


loaderprofile()

let accept = document.querySelector('.accept')
let reject = document.querySelector('.reject')
let edit = document.querySelector('.edit')


accept.addEventListener('click',()=>{
  accept.textContent = 'loading ...'
  var requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': retrieveToken()
    },
    redirect: 'follow'
  };
  
  fetch(`https://kuizuapp.herokuapp.com/v1/questions/approve/${product}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      // loader(result)
      accept.textContent = 'Question Accepted'
      // accept.disabled=true
      // reject.disabled=true
      // edit.disabled=true
    })
    .catch(error => console.log('error', error));
})

reject.addEventListener('click',()=>{
  reject.textContent='Loading...'
  var requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': retrieveToken()
    },
    redirect: 'follow'
  };
  
  fetch(`https://kuizuapp.herokuapp.com/v1/questions/delete/${product}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      reject.textContent='Question Deleted'
      accept.disabled=true
      reject.disabled=true
      edit.disabled=true
      

      const myFunction=()=> {
        setTimeout(()=>{
          location.href='questions.html'
        }, 3000);
      }
      myFunction()



      // loader(result)
   
    })
    .catch(error => console.log('error', error));
})