const nameForm = document.querySelector("#name")
const emailForm = document.querySelector("#email")
const phoneForm = document.querySelector("#phone")
const subjectForm = document.querySelector("#subject")
const messageForm = document.querySelector("#message")
const form = document.querySelector('#contact-form')


form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const message = {
            name: nameForm.value,
            email: emailForm.value,
            phone: phoneForm.value,
            subject: subjectForm.value,
            message: messageForm.value
        }


    const response = await fetch("http://127.0.0.1:8000/api/feedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
})