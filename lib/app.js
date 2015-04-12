//app.js 
var app = angular.module('quizApp', ['ui.codemirror']);

app.factory('QuizFactory', function() {
	var questions = [
		{
			question: "How do you declare an HTML page?",
			options: ["<HTML>", "<!DOCTYPE html>", "<html>", "<head>"],
			answer: 1, 
			answerCode: "<!--Declare the page for correct browser rendering-->\n"+
			"<!DOCTYPE html>\n"+
			"\n"+
			"\n"+
			"<!--Click inside this box to edit the code!-->",
			wrongDescription: "Oops! Review how to declare an HTML page. You can use a Google search or go through the tutorials again.", 
			rightDescription: "Correct! <!DOCTYPE html> specifies the standards that your webpage uses so the browser renders the page correctly.",
			tries: 0
		},
		{
			question: "How do you wrap the entirety of the code for an HTML file?",
			options: ["<h>", "<title>", "<html>", "<p>"],
			answer: 2,
			answerCode: "<html></html>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <html> tag wraps the entire page.",
			tries: 0
		},
		{
			question: "What is the tag that contains the webpage title and meta information?",
			options: ["<title>", "<metadata>", "<header>", "<head>"],
			answer: 3,
			answerCode: "<!DOCTYPE html>\n"+
				"<html>\n"+
				"\t<head>\n"+
				"\t</head>\n"+
				"</html>",
			wrongDescription: "Oops!",
			rightDescription: "Correct!",
			tries: 0
		}
	];

	return {
		list: function() {
			return questions; 
		}
	};
});

app.controller('QuizController', function($scope, QuizFactory) {
	$scope.questions = QuizFactory.list();

	$scope.checkAnswer = function(question) {
		if(!$('input[name=answer]:checked').length) return;

		var ans = $('input[name=answer]:checked').val();

		if(ans == question.options[question.answer]) {
			question.correct = true;
			question.tries = 0;
		}
		else {
			question.correct = false;
			question.tries++;
		}
	};

	$scope.showCode = function(question) {
		question.showCode = true;
	};

	$scope.editorOptions = {
		lineWrapping : true,
        lineNumbers: true, 
        mode: 'xml',
        viewportMargin: Infinity,
        theme: 'blackboard'
	};
});