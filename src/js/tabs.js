
const tabs = () => {
	const navLink = document.querySelectorAll('.js-tabs-nav a')
	const tabs = document.querySelectorAll('.js-tabs')

	tabs.forEach(el => {
		el.querySelector('.js-tabs-nav a').parentElement.classList.add('active')
		el.querySelector('.js-tabs-panel').classList.add('active')
	})



	navLink.forEach(el => {
		el.addEventListener('click', function (e) {
			e.preventDefault()
			const link = this
			const id = link.getAttribute('href')
			const tabs = link.closest('.js-tabs')

			tabs.querySelector('.js-tabs-nav li.active').classList.remove('active')
			link.parentElement.classList.add('active')
			if(tabs.querySelector('.js-tabs-panel.last')) {
				tabs.querySelector('.js-tabs-panel.last').classList.remove('last')
			}
			tabs.querySelector('.js-tabs-panel.active').classList.add('last')
			tabs.querySelector('.js-tabs-panel.active').classList.remove('active')
			tabs.querySelector(id).classList.add('active')
		})
	})
}

export default tabs
