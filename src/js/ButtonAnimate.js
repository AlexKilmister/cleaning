import {gsap, Power2, Power4, Linear} from "gsap/all"

class ButtonAnimate {
	constructor(el) {
		this.el = el
		this.parent = el.parentElement
		this.text = el.querySelector('span')
		this.hover = false
		this.rt
		this.calculatePosition()
		this.attachEventsListener()
		this.rotate()
	}

	attachEventsListener() {
		window.addEventListener('mouseover', (e) => this.onTranslateUp(e))
		window.addEventListener('mousemove', e => this.onMouseMove(e))
		window.addEventListener('click', e => this.onClick(e))
		window.addEventListener('resize', e => this.calculatePosition(e))
	}

	calculatePosition() {
		gsap.set(this.el, {
			x: 0,
			y: 0,
			scale: 1
		})
		gsap.set(this.text, {
			x: 0,
			y: 0
		})
		gsap.set(this.parent, {
			yPercent: -6,
			scale: 1
		})
		const box = this.el.getBoundingClientRect()
		this.x = box.left + (box.width * 0.5)
		this.y = box.top + (box.height * 0.5)
		this.width = box.width
		this.height = box.height
	}

	rotate() {
		this.rt = gsap.timeline()
			.fromTo(this.el, 10,
				{
					rotate: -45,
					ease:Linear.easeNone,
					repeat: -1,
					yoyo: true
				}, {
					rotate: 45,
					ease:Linear.easeNone,
					repeat: -1,
					yoyo: true
				})
	}

	onMouseMove(e) {
		let hover = false
		let hoverArea = (this.hover ? 1 : 0.5)
		let x = e.clientX - this.x
		let y = e.clientY - this.y
		let distance = Math.sqrt(x * x + y * y)

		if (distance < (this.width * hoverArea)) {
			hover = true
			if (!this.hover) {
				this.hover = true
			}
			this.onHover(e.clientX, e.clientY)
		}

		if (!hover && this.hover) {
			this.onLeave()
			this.hover = false
		}

	}

	onTranslateUp(e) {
		const inside = this.el.contains(e.target)
		if (inside) {
			gsap.to(this.parent, {
				yPercent: -55,
				ease: Power2.easeOut,
				duration: 0.4,
				onComplete: () => {
					this.clear()
				}
			})
			//this.rt.paused(true)
			this.rt.clear().to(this.el, 0.4,
				{
					rotate: 0,
					ease:Linear.easeNone,
				})

		}
	}

	onTranslateDown() {
		gsap.to(this.parent, {
			yPercent: -6,
			ease: Power2.easeOut,
			duration: 0.4,
			onComplete: () => {
				this.clear()
			}
		})
	}

	clear() {
		const box = this.el.getBoundingClientRect()
		this.x = box.left + (box.width * 0.5)
		this.y = box.top + (box.height * 0.5)
	}

	onClick(e) {
		const inside = this.el.contains(e.target)
		if (inside) {
			gsap
				.to(this.el, {
					scale: 0.8,
					ease: Power2.easeOut,
					duration: 0.4
				})
			gsap
				.to(this.el, {
					scale: 1.15,
					ease: Power2.easeOut,
					duration: 0.4,
					delay: 0.2
				})
		}
	}

	onHover(x, y) {
		gsap
			.to(this.el, {
				x: (x - this.x) * 0.4,
				y: (y - this.y) * 0.4,
				scale: 1.15,
				ease: Power4.easeNone,
				duration: 0.6
			})
		gsap
			.to(this.text, {
				x: (x - this.x) * 0.1,
				y: (y - this.y) * 0.1,
				ease: Power4.easeNone,
				duration: 0.6
			})
		this.parent.style.zIndex = 100
	}

	onLeave() {
		this.onTranslateDown()
		gsap.to(this.el, {
			x: 0,
			y: 0,
			scale: 1,
			ease: Power2.easeOut,
			duration: 0.7
		})
		gsap
			.to(this.text, {
				x: 0,
				y: 0,
				ease: Power4.easeNone,
				duration: 0.6
			})
		this.rotate()
		this.parent.style.zIndex = 50
	}
}

export default ButtonAnimate
