//app.js 
var app = angular.module('quizApp', ['ui.codemirror']);

app.factory('QuizFactory', function() {
	var questions = [
		{
			startPrompt: "First off, you will need to create a file that will store the contents of our blog. An index.html page will be our starting point." +
						 " Once we have an index.html page, we will need to declare that the file is using the html standard.",
			question: "How do you declare an HTML page?",
			options: ["<HTML>", "<!DOCTYPE html>", "<html>", "<head>"],
			answer: 1, 
			answerCode: "<!--Declare the page for correct browser rendering-->\n"+
			"<!DOCTYPE html>\n"+
			"\n"+
			"\n"+
			"<!--Click inside this box to edit the code!-->",
			wrongDescription: "Oops! Review how to declare an HTML page. You can use a Google search or go through the tutorials again.", 
			rightDescription: "Correct! <!DOCTYPE html> specifies the standards that your webpage uses so the browser renders the page correctly. Now, open up your text editor and create an index.html page. Go ahead and declare the page as well.",
			tries: 0
		},
		{
			startPrompt: "In order to start creating the DOM (Document Object Model), we will need to wrap our content with a certain tag.",
			question: "How do you wrap the entirety of the code for an HTML file?",
			options: ["<h>", "<title>", "<html>", "<p>"],
			answer: 2,
			answerCode: "<html></html>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <html> tag wraps the entire page. Now, within your index.html page, place the <html> tag under your page declaration.",
			tries: 0
		},
		{
			startPrompt: "There are two main sections of an html page. One contains information about the page, while the other wraps the main content.",
			question: "What is the tag that contains the webpage title and meta information?",
			options: ["<title>", "<metadata>", "<header>", "<head>"],
			answer: 3,
			answerCode: "<!DOCTYPE html>\n"+
				"<html>\n"+
				"\t<head>\n"+
				"\t</head>\n"+
				"</html>",
			wrongDescription: "Oops!",
			rightDescription: "Correct! Now, under the <html> tag, create a <head> section and fill out information concerning your blog. Use a <title> tag to include the title of the page.",
			tries: 0
		},
		{
			startPrompt: "Now that you have a <head> section with your blog's information, we will need to add a tag that wraps the content of your webpage.",
			question: "What tag is used to wrap the main content of a web page?",
			options: ["<main>", "<content>", "<body>", "<section>"],
			answer: 2,
			answerCode: "<!DOCTYPE html>\n"+
				"<html>\n"+
				"\t<head>\n"+
				"\t</head>\n"+
				"\t<body>\n"+
				"\t</body>\n"+
				"</html>",
			wrongDescription: "Oops, that tag is either non-existent or does not correctly describe the main content of the web page.",
			rightDescription: "Correct! <body> is the tag that wraps the content of your webpage, or in this case the index.html page you've created. Go ahead and add this tag to your page!",
			tries: 0
		},
		{
			question: "Let's think about the actual text that will make up the main text part of the blog post. What would this be wrapped in?",
			options: ["<img>", "<p>", "<null>", "<ul>"],
			answer: 1,
			answerCode: "<p></p>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <p> tag wraps longer text sections.",
			tries: 0
		},
		{
			question: "How would you wrap a subheader?",
			options: ["<p>", "<title>", "<h3>", "<h1>"],
			answer: 2,
			answerCode: "<h3></h3>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <h3> tag would be ideal to wrap a subheader.",
			tries: 0
		},
		{
			question: "What if you wanted to include a picture in the text post? What tag would you use then?",
			options: ["<img>", "<p>", "<null>", "<ul>"],
			answer: 0,
			answerCode: "<img></img>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <img> tag wraps an image/picture.",
			tries: 0
		},
		{
			question: "We have thought a lot about tags already, but now let us think about several items that belong together in some sort of list, like the various forms of contact information that might be included in an about me page (For example, a phone number, email address and facebook link). How would we designate those in a way that would group them together in the code?",
			options: ["<li>", "<p>", "<t>", "<n>"],
			answer: 0,
			answerCode: "<li></li>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <li> tag wraps an a list of related items.",
			tries: 0
		},
		{
			question: "If you wanted to make a list like the one referenced in the previous question, but you wanted to make sure that the elements went in a particular order, which tag would help you achieve this?",
			options: ["<ul>", "<ll>", "<li>", "<ol>"],
			answer: 3,
			answerCode: "<ol></ol>",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The <ol> tag, which actually stands for ordered list, would be perfect in this situation.",
			tries: 0
		},
		{
			question: "The next part of the blog that we want to think about is how users will move around the site from page to page. Let's say that there are several pages that they need to be able to navigate to, including a Home page, a Posts page, and an About Me page. How could these items be designated?",
			options: ["They're a list", "They're a paragraph", "They're tags", "They don't matter"],
			answer: 0,
			answerCode: "These various pages could be considered a list",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! These things could actually be considered a list.",
			tries: 0
		},
		{
			question: "Although we established that the various pages we may want to navigate to are a list, how would you wrap the actual way that the user moves from page to page?",
			options: ["<ul>", "<nav>", "<li>", "<ol>"],
			answer: 1,
			answerCode: "<nav></nav?",
			wrongDescription: "Oh no! Review the structure of an HTML page.",
			rightDescription: "Correct! The navigation part of a webpage belongs in the <nav> tag",
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

	$scope.hideCode = function(question) {
		question.showCode = false;
	}

	$scope.editorOptions = {
		lineWrapping : true,
        lineNumbers: true, 
        mode: 'xml',
        viewportMargin: Infinity,
        theme: 'blackboard'
	};
});