const body= document.body;

function toggleDarkMode() {
	body.classList.toggle('dark-mode');
	localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

//Load preference on page Load
if (localStorage.getItem('darkMode') === 'true') {
	body.classList.add('dark-mode');
}