(function() {
    const FORM = document.querySelector(".siteFooter__form")

    const FORM_INPUT_NAME = FORM.querySelector(".name")
    const FORM_INPUT_EMAIL = FORM.querySelector(".email")
    const FORM_INPUT_MESSAGE = FORM.querySelector(".message")

    let success = true
    FORM.addEventListener

    FORM.addEventListener("submit", function(event) { //on click -> start function
        event.preventDefault() // prevents to refresh or redirect
        if(FORM_INPUT_NAME.value == "") { // checks if name input is empty
            alert("Navn er ikke udfyldt!") // error message
        } else if(FORM_INPUT_EMAIL.value == "") { // checks if email input is empty
            alert("Emailen er ikke udfyldt!") // error message
        } else if(FORM_INPUT_MESSAGE.value == "") { // checks if message input is empty
            alert("Beskeden er ikke udfyldt!") // error message
        } else {
            FORM.submit() // submit successful
        }
    })

    const URL_STRING = window.location.href
    const URL_OBJECT = new URL(URL_STRING)

    if(URL_OBJECT.searchParams.get("navn")) {
        let userName = URL_OBJECT.searchParams.get("navn")
        let userEmail = URL_OBJECT.searchParams.get("email")
        let thankYouMessage = `Hej ${userName} - Tak for din besked. Vi sender en mail til ${userEmail} snarest muligt.`
        FORM.innerHTML = thankYouMessage
    }
})()