const buttonS = document.querySelector('#sub');
const buttonR = document.querySelector('#rand');
const buttonRes = document.querySelector('#res');
const tableOn = document.querySelector('#table');
const questTable = [
	[3, 7, 14, 16, 21],
	[4, 8, 11, 12, 24],
	[5, 10, 15, 20, 22],
	[1, 2, 13, 19, 23],
	[6, 9, 17, 18, 25],
];

let submitted = true;
createTeble();

buttonR.addEventListener('click', () => {
	for (let i = 1; i < 26; i++) {
		document.querySelector(`input[name="answer_${i}"]`).checked = true;
	}
});

buttonRes.addEventListener('click', () => {
	submitted = true;
});

buttonS.addEventListener('click', () => {
	if (submitted) {
		const arrScore = [0, 0, 0, 0, 0];
		for (let i = 0; i < arrScore.length; ) {
			for (const el of questTable) {
				arrScore[i] = forCalc(el);
				i++;
			}
		}
		tableEnterScore(arrScore);
		submitted = false;
	} else {
		alert('Click Reset');
	}
});

function createTeble() {
	const arrDr = [
		'Будь совершенным',
		'Радуй других',
		'Спеши',
		'Будь сильным',
		'Пытайся',
	];
	for (let i = 0; i < arrDr.length; i++) {
		document
			.getElementById(`tdLogo${i}`)
			.appendChild(document.createTextNode(arrDr[i]));
	}
}

function tableEnterScore(score) {
	for (let i = 0; i < score.length; i++) {
		let el = document.getElementById(`tdScore${i}`);
		let nEl = document.createTextNode(score[i]);
		el.appendChild(nEl);
	}
}

function forCalc(questionArr) {
	let score = 0;
	for (let i = 0; i < questionArr.length; i++) {
		score += parseFloat(
			document.querySelector(`input[name="answer_${questionArr[i]}"]:checked`)
				.value
		);
	}
	return score;
}
