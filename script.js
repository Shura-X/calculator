let str = document.querySelector('.prompt').textContent;



let yellow = '#FFA800';

let down = function(e) {
	switch (e.key) {
		case '1':
			$('.one').css('color', yellow)
			str = str + '1'
			$(".prompt").text(str);
			break;

		case '2':
			str = str + '2'
			$(".prompt").text(str);
			$('.two').css('color', yellow)
			break;

		case '3':
			str = str + '3'
			$(".prompt").text(str);
			$('.three').css('color', yellow)
			break;

		case '4':
			str = str + '4'
			$(".prompt").text(str);
			$('.four').css('color', yellow)
			break;

		case '5':
			str = str + '5'
			$(".prompt").text(str);
			$('.five').css('color', yellow)
			break;

		case '6':
			str = str + '6'
			$(".prompt").text(str);
			$('.six').css('color', yellow)
			break;

		case '7':
			str = str + '7'
			$(".prompt").text(str);
			$('.seven').css('color', yellow)
			break;

		case '8':
			str = str + '8'
			$(".prompt").text(str);
			$('.eight').css('color', yellow)
			break;

		case '9':
			str = str + '9'
			$(".prompt").text(str);
			$('.nine').css('color', yellow)
			break;

		case '0':
			str = str + '0'
			$(".prompt").text(str);
			$('.null').css('color', yellow)
			break;


		case 'Escape':
			str = '';
			$(".prompt").text(str);
			break;

		case 'Backspace':
			str = str.slice(0, str.length-1) + '';
			$('.prompt').text(str);
			$('.del').css('color', yellow)
			break;

		case 'Enter':
			str = eval( str );
			$('.prompt').text(str);
			$('.is').css('color', yellow)
			break;

		case '+':
			str = str + '+';
			$('.prompt').text(str);
			$('.plus').css('color', yellow)
			break;

		case '-':
			str = str + '-';
			$('.prompt').text(str);
			$('.minus').css('color', yellow)
			break;

		case '*':
			str = str + '*';
			$('.prompt').text(str);
			$('.multiply').css('color', yellow)
			break;

		case '/':
			str = str + '/';
			$('.prompt').text(str);
			$('.divide').css('color', yellow)
			break;

		case '(':
			str = str + '(';
			$('.prompt').text(str);
			$('.open').css('color', yellow)
			break;

		case ')':
			str = str + ')';
			$('.prompt').text(str);
			$('.close').css('color', yellow)
			break;

		case '.':
			str = str + '.';
			$('.prompt').text(str);
			$('.point').css('color', yellow)
			break;
	}
};

let up = function(e) {
	$('div:not(.cancel)').css('color', 'black')
}

document.addEventListener('keydown', down);
document.addEventListener('keyup', up);





$(".one").click(function(e) {
	str = str + '1'
	$(".prompt").text(str)
});

$(".two").click(function(e) {
	str = str + '2'
	$(".prompt").text(str)
});

$(".three").click(function(e) {
	str = str + '3'
	$(".prompt").text(str)
});

$(".four").click(function(e) {
	str = str + '4'
	$(".prompt").text(str)
});

$(".five").click(function(e) {
	str = str + '5'
	$(".prompt").text(str)
});

$(".six").click(function(e) {
	str = str + '6'
	$(".prompt").text(str)
});

$(".seven").click(function(e) {
	str = str + '7'
	$(".prompt").text(str)
});

$(".eight").click(function(e) {
	str = str + '8'
	$(".prompt").text(str)
});

$(".nine").click(function(e) {
	str = str + '9'
	$(".prompt").text(str)
});

$(".null").click(function(e) {
	str = str + '0'
	$(".prompt").text(str)
});


$('.cancel').click(function(e) {
	str = ''
	$(".prompt").text(str)
});


$('.plus').click(function(e) {
	str = str + '+';
	$('.prompt').text(str)
});


$('.minus').click(function(e) {
	str = str + '-';
	$('.prompt').text(str)
});


$('.multiply').click(function(e) {
	str = str + '*';
	$('.prompt').text(str)
});


$('.divide').click(function(e) {
	str = str + '/';
	$('.prompt').text(str)
});


$('.open').click(function(e) {
	str = str + '(';
	$('.prompt').text(str)
});


$('.close').click(function(e) {
	str = str + ')';
	$('.prompt').text(str)
});


$('.point').click(function(e) {
	str = str + '.';
	$('.prompt').text(str)
})


$('.x2').click(function(e) {
	//alert(typeof +str)
	let res = Math.pow(+str, 2);
	//alert(typeof res)

	if (typeof res != 'number') {
		alert('Введите корректное значение')
	} else if ( !isFinite(res) ) {
		alert('Введите корректное значение')
	} else {
		str = res;
		$('.prompt').text(str)
	}
});


$('.x3').click(function(e) {
	let res = Math.pow(+str, 3);
	//alert(typeof res)

	if (typeof res != 'number') {
		alert('Введите корректное значение')
	} else if ( !isFinite(res) ) {
		alert('Введите корректное значение')
	} else {
		str = res;
		$('.prompt').text(str)
	}
});


$('.root').click(function(e) {
	let res = Math.sqrt(+str);

	if (typeof res != 'number') {
		alert('Введите корректное значение')
	} else if ( !isFinite(res) ) {
		alert('Введите корректное значение')
	} else {
		str = res;
		$('.prompt').text(str)
	}
})






$('.del').click(function(e) {
	str = str.slice(0, str.length-1) + '';
	$('.prompt').text(str)
});


$('.is').click(function(e) {
	str = eval( str );
	$('.prompt').text(str)
});

