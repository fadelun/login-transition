const buttonEnter = document.querySelectorAll('.btn-enter')
const formPage = document.querySelector(".form-page")
const formWrapperOne = document.querySelector(".form-wrapper-one")
const formWrapperTwo = document.querySelector(".form-wrapper-two")
const messageOne = document.querySelector(".message-one")

function handleButtonEnter() {
    if (formPage.classList.contains("side-move")) {
        formPage.classList.remove("side-move");
        formWrapperOne.classList.remove("form-wrapper-hidden")
        formWrapperTwo.classList.add('form-wrapper-hidden')
        messageOne.classList.remove("message-hidden")
    } else {
        formPage.classList.add('side-move')
        formWrapperOne.classList.add('form-wrapper-hidden')
        formWrapperTwo.classList.remove("form-wrapper-hidden")
        messageOne.classList.add("message-hidden")
    }
    // displayTransition()
}

buttonEnter.forEach(button => {
    button.addEventListener('click', handleButtonEnter)
})

function displayTransition() {
    setTimeout(() => {
        if (formPage.classList.contains('side-move')) {
            formWrapperOne.style.display = "none"
        }
    }, 1000);

    if (!formPage.classList.contains('side-move')) {
        formWrapperOne.style.display = ""

    }



}
