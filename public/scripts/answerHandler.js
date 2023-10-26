var correct = document.getElementById('correct')
var incorrect = document.getElementById('incorrect')

var firstIsAnswer = () => {
	correct.classList.add('opacity-0')
	incorrect.classList.add('opacity-0')

	if (document.getElementById('1').checked) {
		correct.classList.remove('opacity-0')
	} else if (document.getElementById('2').checked) {
		incorrect.classList.remove('opacity-0')
	} else {
		return
	}
}

var secondIsAnswer = () => {
	correct.classList.add('opacity-0')
	incorrect.classList.add('opacity-0')

	if (document.getElementById('1').checked) {
		incorrect.classList.remove('opacity-0')
	} else if (document.getElementById('2').checked) {
		correct.classList.remove('opacity-0')
	} else {
		return
	}
}
