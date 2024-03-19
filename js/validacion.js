
const terminosError = document.getElementById('terminos-y-condicionesbtn');
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");



password2.addEventListener("input", (event) => {
    if (password2.value !== password1.value) {
        password2.setCustomValidity("ERROR");
    } else {
        password2.setCustomValidity("");
    }
});

terminos.addEventListener("click", (event) => {
    if (terminos.checked) {
        terminos.classList.remove("is-invalid");
        terminos.classList.add("is-valid");
        terminosError.classList.add("is-valid");
        terminosError.classList.remove("is-invalid");
    } else {
        terminos.classList.remove("is-valid");
        terminos.classList.add("is-invalid");
        terminosError.classList.remove("is-valid")
        terminosError.classList.add("is-invalid")
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                terminosError.classList.add("is-invalid")
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
