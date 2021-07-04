import {gsap, ScrollTrigger, Power2, Power4} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const animateScroll = () => {
	const btnMain = document.querySelector('.js-button')
	const wrapBtnMain = btnMain.parentElement
	const advantages = document.querySelector('.js-advantages')
	const tabs = document.querySelector('.js-animate-tabs')

	if(advantages) {
		gsap.set('.advantages__item', {yPercent: 20})
		gsap.timeline({
			scrollTrigger: {
				trigger: advantages,
				start: "0 100%"
			}
		})
			.staggerTo('.advantages__item', 0.8,{
				yPercent: 0,
				ease: Power4.easeNone
			}, 0.1)
	}

	if(tabs) {
		gsap.set(tabs, {yPercent: 10})
		gsap.set('.sidebar-column', {opacity: 0, xPercent: -100})
		gsap.timeline({
			scrollTrigger: {
				trigger: tabs,
				start: "50% 80%",
				once: true,
				toggleClass: {targets: tabs, className: "is-active"}
			}
		})
			.to(tabs, 0.8,{
				yPercent: 0,
				ease: Power4.easeNone
			})
			.to('.sidebar-column', 0.8, {
				opacity: 1,
				xPercent: 0,
				ease: Power4.easeNone
			})
			.staggerFrom('.tabs-nav li', 0.8, {
				xPercent: -20,
				ease: Power4.easeNone
			}, 0.1, '-=0.6')
	}

	if(btnMain) {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.js-promo',
				start: "60% 50%",
				toggleActions: "play none none reverse"
			},
			defaults: {duration: 0.5}
		})
			.to(btnMain, {
				yPercent: 35,
				scale: 0.9,
				ease: Power2.easeInOut
			})

		gsap.timeline({
			scrollTrigger: {
				trigger: '.js-animate-tabs',
				start: "80% 100%",
				toggleActions: "play none none reverse"
			},
			defaults: {duration: 0.5}
		})
			.to(btnMain, {
				yPercent: 150,
				scale: 0,
				ease: Power2.easeInOut
			})
			.to(wrapBtnMain, {
				display: 'none',
				ease: Power2.easeInOut
			})
	}

}

export default animateScroll
