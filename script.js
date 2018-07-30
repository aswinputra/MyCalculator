var app = angular.module("myApp",[]);
app.controller("calculatorCtrl", calculatorCtrl);

function calculatorCtrl(){
	this.result = 0;
	
	this.operatorClick = function(button){
		if(button==="Square root"){
			this.operator = "Square root of ";
		}else{
			this.operator = button;
		}
	};
	
	this.calculate = function(){
		var firstNum = parseFloat(this.number1);
		var secondNum = parseFloat(this.number2);
		switch(this.operator){
			case "+":
				this.result = firstNum + secondNum;
				break;
			case "-":
				this.result = firstNum - secondNum;
				break;
			case "/":
				this.result = firstNum / secondNum;
				break;
			case "*":
				this.result = firstNum * secondNum;
				break;
			case "^":
				this.result = Math.pow(firstNum, secondNum);
				break;
			case "Square root of ":
				this.result = Math.sqrt(secondNum);
				break;
		}
	};
};