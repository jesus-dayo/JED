$(document).ready(
		function() {
			// Create two variable with the names of the months and days in an
			// array
			var monthNames = [ "January", "February", "March", "April", "May",
					"June", "July", "August", "September", "October",
					"November", "December" ];
			var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday",
					"Thursday", "Friday", "Saturday" ]

			// Create a newDate() object
			var newDate = new Date();
			// Extract the current date from Date object
			newDate.setDate(newDate.getDate());
			// Output the day, date, month and year
			$('#cDate').val(
					dayNames[newDate.getDay()] + " " + newDate.getDate() + ' '
							+ monthNames[newDate.getMonth()] + ' '
							+ newDate.getFullYear());
			var timeString;
			var seconds;
			var minutes;
			var hours;
			
			function updateTime(){
				timeString = hours + ":" + minutes + ":" +seconds;
				$('#cTime').val(timeString);
			}
			
			setInterval(function() {
				// Create a newDate() object and extract the seconds of the
				// current time on the visitor's
				seconds = new Date().getSeconds();
				// Add a leading zero to seconds value
				seconds = (seconds < 10 ? "0" : "") + seconds;
				updateTime();
			}, 1000);

			setInterval(function() {
				// Create a newDate() object and extract the minutes of the
				// current time on the visitor's
				minutes = new Date().getMinutes();
				// Add a leading zero to the minutes value
				minutes = (minutes < 10 ? "0" : "") + minutes;
				updateTime();
			}, 1000);

			setInterval(function() {
				// Create a newDate() object and extract the hours of the
				// current time on the visitor's
				hours = new Date().getHours();
				// Add a leading zero to the hours value
//				$("#hours").html((hours < 10 ? "0" : "") + hours);
				hours = (hours < 10 ? "0" : "") + hours;
				updateTime();
			}, 1000);
});