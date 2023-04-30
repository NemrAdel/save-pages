let Firstname=document.getElementById('Fname')
let Lastname=document.getElementById('Lname')
let Age=document.getElementById('age')
let Phone=document.getElementById('Phone')
let Id=document.getElementById('id_num')
let submit=document.getElementById('save')
const Regex = /^\S+$/;

function Datasaved(){
    alert('Data is saved')
    console.log('heloo')
}
function checkregex(){
    if (Regex.test(Firstname.value) && 
    Regex.test(Lastname.value) && 
    Regex.test(Age.value) && 
    Regex.test(Phone.value) && 
    Regex.test(Id.value)) return(true)
}
submit.addEventListener('click',()=>{
    checkregex()
    if (checkregex()===true) {
        Datasaved()
    }
    else{
        console.log('not valid')
    }
})