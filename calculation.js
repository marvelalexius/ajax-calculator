window.onload = function() {
	var keys = document.getElementsByTagName('button');

	for (var i = 0; i < keys.length; i++) {
		keys[i].onclick = function() {

			var operators = ['/', '*', '-', '+', '%'],
				lastOperator = '',
				decimalAdded = false;

			var keyValue = this.innerHTML,
				detail = document.getElementById('detail'),
				detailValue = detail.innerHTML,
				result = document.getElementById('result-value');

			switch (keyValue) {
				case 'C':
					detail.innerHTML = '';
					result.innerHTML = 0;
					break;
				case '/':
				case '*':
				case '%':
					var lastChar = detail.innerHTML(detail.innerHTML.length -1);
					if (operators.indexOf(lastChar) == -1) {
						detail.innerHTML += this.innerHTML
					}
					break;
				case '-':
					result.innerHTML = eval(detail.innerHTML);
				case '+':
					detail.innerHTML += this.innerHTML;
					break;
				case '=':
					result.innerHTML = eval(detail.innerHTML);
				default:
					detail.innerHTML += this.innerHTML;
					break;
			}

			// detail.innerHTML += this.innerHTML;
		}
	}
}