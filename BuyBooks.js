var app = angular.module('MyApp', ['ngAnimate']);
		app.controller('control', function($scope){
			$scope.b1=0;
			$scope.b2=0;
			$scope.b3=0;
			$scope.b4=0;
			$scope.b5=0;
			$scope.p1=25;
			$scope.p2=20;
			$scope.p3=18;
			$scope.p4=20;
			$scope.p5=22;

			$scope.booksDesc = [
				{name: 'Divergent Series', Author: 'Veronica Roth', Rating: '5/5', Genre: 'Sci-Fi, Dystopia, YA'},
				{name: 'Carve the Mark Series', Author: 'Veronica Roth', Rating: '4/5', Genre: 'Sci-Fi, YA'},
				{name: 'Six of Crows Series', Author: 'Leigh Bardugo', Rating: '4.4/5', Genre: 'Fantasy, YA'},
				{name: 'Folk of the Air', Author: 'Holly Black', Rating: '4.1/5', Genre: 'Fantasy-Fiction'},
				{name: 'The Inheritance Cycle', Author: 'Christopher Paolini', Rating: '4.1/5', Genre: 'YA, ‎High fantasy'},
				];

			$scope.totalAmt = function(){
			return ((parseInt($scope.b1)*25)+(parseInt($scope.b2)*20)+(parseInt($scope.b3)*18)+(parseInt($scope.b4)*20)+(parseInt($scope.b5)*22));
	}
		
	});

	it('should check ngShow', function() {
	  var checkbox = element(by.model('checked'));
	  var checkElem = element(by.css('.check-element'));

	  expect(checkElem.isDisplayed()).toBe(false);
	  checkbox.click();
	  expect(checkElem.isDisplayed()).toBe(true);
	});