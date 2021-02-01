let form = document.querySelector('form')
let suc = document.querySelector('.success')
form.addEventListener('submit', (e)=>{

    e.preventDefault()
    document.getElementById('subit').disabled = true;

    document.getElementById('subit').value='Loading...'
   
    const  raw = {
        "email": form.email.value,
        
    }
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
      headers: {
        'Content-Type': 'application/json',
    },
      redirect: 'follow'
    };
    
    fetch("https://kuizuapp.herokuapp.com/v1/users/sendOtp", requestOptions)
        .then(response => {
         console.log(response) 
         return response.json()
        })
        .then((data) => {
          console.log(data)
          if (data.success) {
            document.getElementById('subit').value='OTP sent'
            window.location.href="forgetpasswordotp.html"
          }
          else{
            suc.style.color='red'
            suc.style.textAlign = 'center'
            suc.style.margin="10px 0"
            suc.textContent= data.message
          }
       
            
           
 

          
          
        } )
        .catch(error => console.log('error', error));
  

})






