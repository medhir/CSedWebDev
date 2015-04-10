//app.js 
var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE', 
		scope: {},
		link: function(scope, elem, attrs) {

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.tries++;
				}
			};
		}
	}
});

app.factory('QuizFactory', function() {
	var questions = [
		{
			question: "How do you declare an HTML page?",
			options: ["<HTML>", "<!DOCTYPE html>", "<html>", "<head>"],
			answer: 1, 
			answerCode: "<!--Declare the page for correct browser rendering-->\n"+
			"<!DOCTYPE html>",
			wrongDescription: "Review how to declare an HTML page. You can use a Google search or go through the tutorials again", 
			rightDescription: "Correct! <!DOCTYPE html> specifies the standards that your webpage uses so the browser renders the page correctly.",
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
});