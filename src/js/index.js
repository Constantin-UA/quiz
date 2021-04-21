const buttonS = document.querySelector('#sub');
const buttonR = document.querySelector('#rand');
const buttonRes = document.querySelector('#res');
const tableOn = document.querySelector('#table');
const quizIt = document.querySelector('#quiz_items');
const mainForm = document.querySelector('#main-form');
const questTable = [
	[2, 6, 13, 15, 20],
	[3, 7, 10, 11, 23],
	[4, 9, 14, 19, 21],
	[0, 1, 12, 18, 22],
	[5, 8, 16, 17, 24],
];
const questionArr = [
	'1. Вы скрываете или контролируете свои чувства?',

	'2. Вы неохотно обращаетесь за помощью?',

	'3. Вы устанавливаете для себя высокие стандарты, а затем критикуете себя за несоответствие им?',

	'4. Делаете ли Вы что-либо (особенно для других), что Вы в действительности не хотите делать?',

	'5. Есть ли у Вас тенденция делать много дел одновременно?',

	'6. Вы терпеть не можете «сдаваться» или «отступать», всегда надеясь что «уж сейчас-то это сработает»?',

	'7. Для Вас важно быть ПРАВЫМ?',

	'8. Для Вас важно производить хорошее впечатление, нравиться?',

	'9. Есть ли у Вас тенденция начинать что-либо и не заканчивать?',

	'10. Устанавливаете ли Вы себе нереальные временные рамки?',

	'11. Вас довольно легко убедить или уговорить?',

	'12. Вам не нравится отличаться, быть не таким, как все?',

	'13. Склонны ли Вы ставить себя в зависимое положение?',

	'14. Испытываете ли Вы дискомфорт (например, досаду или раздражение) в случае небольшого беспорядка или несоответствия, такого как пятно на одежде или обоях, или инструмент не на месте, или сбивчивый доклад?',
	'15. Могли бы Вы описать себя как быстрого и нетерпеливого в общении с другими?',

	'16. Вы ненавидите, когда Вас прерывают?',

	'17. Вы склонны сравнивать себя (или свои поступки, качества) с другими людьми и чувствовать ниже или выше соответственно?',

	'18. Случается ли, что что Вы топчетесь на месте с нерешаемой проблемой, испытывая чувство, что Вы застряли, но не можете при этом выкинуть ее из головы?',

	'19. Есть ли у Вас тенденция не замечать, насколько усталым, голодным или больным Вы себя чувствуете, но вместо этого «держаться»?',

	'20. Вы склонны говорить одновременно с другими, или заканчивать их фразу за них?',

	'21. Вам нравится объяснять все подробно и точно?',

	'22. Вы предпочитаете приняться за работу («делать дело»), а не обсуждать её.?',

	'23. Вам нравится делать все по-своему?',

	'24. Вам не нравятся конфликты?',

	'25. Есть ли у вас склонность быть мятежником или одним из эксцентричных людей в группе?',
];

let submitted = true;
createQuestion();
createTeble();

buttonR.addEventListener('click', () => {
	for (let i = 0; i < 25; i++) {
		document.querySelector(`input[name="answer_${i}"]`).checked = true;
	}
});

buttonRes.addEventListener('click', () => {
	submitted = true;
	tableOn.className = 'table hiden';
	quizIt.className = 'quiz__items visible';
});

buttonS.addEventListener('click', () => {
	if (submitted) {
		const arrScore = [0, 0, 0, 0, 0];
		for (let i = 0; i < arrScore.length; ) {
			for (const el of questTable) {
				if (forCalc(el) === -1) {
					return;
				} else {
					arrScore[i] = forCalc(el);
					i++;
				}
			}
		}
		tableOn.className = 'table visible';
		quizIt.className = 'quiz__items hiden';
		tableEnterScore(arrScore);
		submitted = false;
	} else {
		console.log('Please reset');
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
		el.innerHTML = '';
		el.insertAdjacentHTML('afterbegin', score[i]);
	}
}

function forCalc(questArr) {
	let score = 0;
	for (let i = 0; i < questArr.length; i++) {
		let x = document.querySelector(
			`input[name="answer_${questArr[i]}"]:checked`
		);
		if (x === null) {
			return -1;
		} else {
			score += parseFloat(x.value);
		}
	}
	return score;
}

function createQuestion() {
	for (let i = 24; i >= 0; i--) {
		const html = `
		<fieldset>
	<legend class="quiz__question">
		${questionArr[i]}
	</legend>
	<input required type="radio" name="answer_${i}" value="1" />Да<br />
	<input required type="radio" name="answer_${i}" value="0" />Нет<br />
	<input required type="radio" name="answer_${i}" value="0.5" />До некоторой	степени<br /></fieldset>
	`;
		quizIt.insertAdjacentHTML('afterbegin', html);
	}
}
