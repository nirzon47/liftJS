// Gets the html tag
const root = document.documentElement

const toggleTheme = () => {
	// If html tag's data-theme is light, set it to dark and vice versa
	if (root.getAttribute('data-theme') === 'light') {
		root.setAttribute('data-theme', 'dark')
	} else {
		root.setAttribute('data-theme', 'light')
	}
}
