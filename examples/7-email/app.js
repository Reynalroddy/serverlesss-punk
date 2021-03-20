const nameInput = document.querySelector('.name-input')
const emailInput = document.querySelector('.email-input')
const subjectInput = document.querySelector('.subject-input')
const messageInput = document.querySelector('.message-input')
const form = document.querySelector('.form')
const btn = document.querySelector('.submit-btn')
const alert = document.querySelector('.alert')
const title = document.querySelector('.title')
alert.style.display = 'none'


form.addEventListener("submit",async (e)=>{

e.preventDefault();

alert.style.display = "none";
btn.disabled = true;
btn.innerHTML = `<span class="sending"></span>`



const name = nameInput.value 
const email = emailInput.value 
const subject = subjectInput.value 
const message = messageInput.value 
const data = {name,email,subject,message}
try {
    await axios.post('/api/7-email',{

        data
    })

    nameInput.value = '';
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
} catch (error) {
    console.log(error)
    alert.style.display = "block";
    alert.textContent = error.response.data
}
btn.disabled = false
btn.innerHTML = "send"
})