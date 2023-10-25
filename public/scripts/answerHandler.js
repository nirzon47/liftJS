var correct = document.getElementById('correct')
var incorrect = document.getElementById('incorrect')

const qOne = () => {
	correct.classList.add('opacity-0')
	incorrect.classList.add('opacity-0')

	if (document.getElementById('1').checked) {
		correct.classList.remove('opacity-0')
	} else {
		incorrect.classList.remove('opacity-0')
	}
}

const qTwo = () => {
	correct.classList.add('opacity-0')
	incorrect.classList.add('opacity-0')

	if (document.getElementById('1').checked) {
		incorrect.classList.remove('opacity-0')
	} else {
		correct.classList.remove('opacity-0')
	}
}
