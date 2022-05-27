const form = document.querySelector('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}


// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} không hợp lệ`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} phải có ít nhất ${min} ký tự`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} phải có ít nhất ${max} ký tự`
		)
	} else {
		showSuccess(input)
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords không trùng khớp')
	}
}

// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, email, password, password2])) {
		checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
	}
})

function dieu_huong_0(){
    location.assign("http://127.0.0.1:5500/index.html");
}
// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([username, email, password, password2])) {
		checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
	}
})


