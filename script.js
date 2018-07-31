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
				if(isNaN(firstNum)){
					firstNum = 0;
				}
				this.result = firstNum + secondNum;
				break;
			case "-":
				if(isNaN(firstNum)){
					firstNum = 0;
				}
				this.result = firstNum - secondNum;
				break;
			case "/":
				if(isNaN(firstNum)){
					firstNum = 0;
				}
				this.result = firstNum / secondNum;
				break;
			case "*":
				if(isNaN(firstNum)){
					firstNum = 0;
				}
				this.result = firstNum * secondNum;
				break;
			case "^":
				if(isNaN(firstNum)){
					firstNum = 0;
				}
				this.result = Math.pow(firstNum, secondNum);
				break;
			case "Square root of ":
				this.result = Math.sqrt(secondNum);
				break;
		}
	};
};