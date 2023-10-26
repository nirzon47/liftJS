// Correct has the correct alert box
// Incorrect has the incorrect alert box
var correct = document.getElementById('correct')
var incorrect = document.getElementById('incorrect')

/**
 * Evaluates if the first answer is correct and displays the appropriate message.
 *
 * @return {undefined} This function does not return a value.
 */
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

/**
 * A function that handles the logic for determining if the second option is the correct answer.
 *
 * @return {undefined} This function does not return a value.
 */
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
