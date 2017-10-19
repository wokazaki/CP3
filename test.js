var myApp = angular.module('runawayBride', []);
myApp.controller('BrideController', function($scope){
		$scope.x = 1000;
    $scope.y = 1000;
		var h = 0;
    $scope.runAway = function()
		{
			var d = Math.round(Math.random() * 3);
			if(h > 10 && h < 20)
			{
				$('h3').text("");
				$('h1').text("Come on, you just aren't trying hard enough");
			}
			if(h > 20 && h < 30)
			{
				$('h1').text("You just need to have faith and be patient");
			}
			if(h > 30 && h < 40)
			{
				$('h1').text("Be the person you want to marry");
			}
			if(h > 40 && h < 50)
			{
				$('h1').text("It's all part of God's plan");
			}
			if(h > 50 && h < 60)
			{
				$('h1').text("You'll find the right one eventually");
			}
			if(h > 60 && h < 70)
			{
				$('h1').text("It'll all work out in the end");
			}
			if(h > 70 && h < 80)
			{
				$('h1').text("It's all in God's timing");
			}
			if(h > 80 && h < 90)
			{
				$('h1').text("\"If there were a perfect woman, what makes you think she would be interested in you?\"");
			}
			if(h > 90 && h < 100)
			{
				$('h1').text("At least you have nieces and nephews");
			}
			if(h > 100 && h < 110)
			{
				$('h1').text("Maybe you should finish that degree");
			}
			if(h > 110 && h < 120)
			{
				$('h1').text("And get a dog");
			}
			if(h > 120 && h < 130)
			{
				$('h1').text("Have you ever heard of Tinder?");
			}
			if(h > 130 && h < 140)
			{
				$('h1').text("Have you ever heard of Tinder?");
			}
			if(h > 140 && h < 150)
			{
				$('h1').text("Well, we still love you and we're praying for you");
			}
			h++;
			if(d == 0)
			{
				//console.log('left');
				n = parseInt($('#target').css('left'));
				//console.log(n);
				if(parseInt($('#target').css('left')) < 200 )
				{
					$('#target').css('left', n + 300);
				}
				else
				{
					$('#target').css('left', n - 300);
				}
			}
			else if(d == 1)
			{
				//console.log('right');
				n = parseInt($('#target').css('left'));
				//console.log(n);
				if(parseInt($('#target').css('left')) > 1000)
				{
					$('#target').css('left', n - 300);
				}
				else
				{
					$('#target').css('left', n + 300);
				}
			}
			else if(d == 2)
			{
				//console.log('up');
				n = parseInt($('#target').css('top'));
				//console.log(n);
				if(parseInt($('#target').css('top')) < 50)
				{
					$('#target').css('top', n + 150);
				}
				else
				{
					$('#target').css('top', n - 150);
				}
			}
			else if (d == 3)
			{
				//console.log('down');
				n = parseInt($('#target').css('top'));
				//console.log(n);
				if(parseInt($('#target').css('top')) > 500)
				{
					$('#target').css('top', n - 150);
				}
				else
				{
					$('#target').css('top', n + 150);
				}
			}

			/*var x = Math.random() * 1400;
      var y = Math.random() * 700;
      console.log(x);
      console.log(y);
      console.log("Poop");
      $('#target').css('left', x);
      $('#target').css('top', y);*/

    };

});
