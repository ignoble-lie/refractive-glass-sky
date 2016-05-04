export function calculate() {

	var n1 = 1.00,
		n2 = 1.5,
		n3 = 1.000277,

		t = 1, // m
		r = 100 * (10**3), // 100 km
		asin = Math.asin,
		sin = Math.sin,
		tan = Math.tan;

	var A = degreeToRadian(60)
	var B = asin(n1 * sin(A) / n2)
	var s = t * tan(B)
	var theta = s / r
	var C = B + theta
	var D = asin(n2 * sin(C) / n3)

	return {
		A: round(5, radianToDegree(A)),
		B: round(5, radianToDegree(B)),
		C: round(5, radianToDegree(C)),
		D: round(5, radianToDegree(D)),
		t: t + 'm',
		r: r/1000 + 'km',
		n1,
		n2,
		n3,
		'ϑ' : round(5, radianToDegree(theta)),
		s: round(3, s)
	}
}


function degreeToRadian(deg) {
	return deg * Math.PI / 180
}

function radianToDegree(rad) {
	return rad * 180 / Math.PI
}

function round(digits, num){
	switch(digits){
		case 2:
			return Math.round((num + 0.00001) * 100) / 100
		case 3:
			return Math.round((num + 0.000001) * 1000) / 1000
		case 4:
			return Math.round((num + 0.000001) * 10000) / 10000
		case 5:
			return Math.round((num + 0.0000001) * 100000) / 100000
	}
}

