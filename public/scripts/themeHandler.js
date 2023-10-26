const root = document.documentElement

const toggleTheme = () => {
	if (root.getAttribute('data-theme') === 'light') {
		root.setAttribute('data-theme', 'dark')
	} else {
		root.setAttribute('data-theme', 'light')
	}
}
