import {gsap, ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const header = () => {
	ScrollTrigger.create({
		start: 'top -200',
		end: 99999,
		toggleClass: {className: 'header-main--fixed', targets: '.header-main'}
	});
}

export default header
