
const prices = {
	basic: { default: '19.99', alternate: '199.9' },
	professional: { default: '24.99', alternate: '249.9' },
	master: { default: '39.99', alternate: '399.9' },
}


const priceElements = new Map([
	['basic', document.querySelector('.pricing-box__basic li:first-child')],
	['professional', document.querySelector('.pricing-box__prosessional li:first-child')],
	['master', document.querySelector('.pricing-box__master li:first-child')],
])


const annuallyElem = document.querySelector('.pricing-header__switch-container p:first-child')
const monthlyElem = document.querySelector('.pricing-header__switch-container p:last-child')


const updatePricesAndColors = isChecked => {

	for (const [key, element] of priceElements) {
		const { default: defaultPrice, alternate } = prices[key]
		const dollarSpan = element.querySelector('span')
		if (dollarSpan) {
			dollarSpan.nextSibling.nodeValue = isChecked ? alternate : defaultPrice
		}
	}

	// Updating the colors
	if (isChecked) {
		annuallyElem.style.color = '#696EDD'
		monthlyElem.style.color = ''
	} else {
		monthlyElem.style.color = '#696EDD'
		annuallyElem.style.color = ''
	}
}

document.getElementById('switch-price').addEventListener('change', e => updatePricesAndColors(e.target.checked))
