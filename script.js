







function signIn () {
   
    
let emailIdEl = document.getElementById('emailId').value
let pass = document.getElementById('password').value
console.log(pass)
// let inputMessage = document.getElementById('input-msg')
let snackValue = document.getElementById('snackbar')


let email = 'admin@gmail.com'
let password = "admin"
    // e.preventDefault()


    if ((pass === password) && (email === emailIdEl)) {

        snackValue.className = "show";
        snackValue.innerText = "you have signed in"
        setTimeout(function(){ snackValue.className = snackValue.className.replace("show", "")}, 3000)
        location.replace('dashboard.html')
        
       
    }
    else {
        snackValue.className = "show";
        snackValue.innerText = "Username or Password is Invalid"
        setTimeout(function(){ snackValue.className = snackValue.className.replace("show", "")}, 3000)

        
    }
    
    

}



