const tooltips = () => {
	const tooltip = document.querySelectorAll('.tooltip')

	tooltip.forEach(el => {
		const circle = el.querySelector('.tooltip__circle')

		circle.addEventListener('click', function () {
			removeClass()
			this.parentElement.classList.add('open')
		})
	})

	function removeClass() {
		tooltip.forEach(el => {
			el.classList.remove('open')
		})
	}
}

export default tooltips
