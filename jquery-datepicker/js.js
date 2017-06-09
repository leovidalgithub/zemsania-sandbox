angular.module(  'myCalendar', [] )
	.controller( 'myController', [ '$scope', '$http', '$interval', function( $scope, $http, $interval ) {

        var eventDates = {};
        var eventHours = {};

        eventHours[ 'holidays'    ] = [];
        eventHours[ 'working'     ] = [];
        eventHours[ 'friday'      ] = [];
        eventHours[ 'non_working' ] = [];
        eventHours[ 'intensive'   ] = [];
        eventHours[ 'special'     ] = [];

         function showCalendar( calendar, month ) {
			jQuery( calendar ).datepicker({
				// showButtonPanel: true,
				dateFormat: 'mm-dd-yy',
				defaultDate: new Date( month ), // ( 2014, 2, 1 )
				// onSelect: daySelected,
			    beforeShowDay: function( date ) {
			        var highlight = eventDates[ date ];
			        if ( highlight ) {
			        	if ( highlight.type == 'working' ) {
							return [ true, "showWorking", highlight ];
			        	} else if ( highlight.type == 'holidays' ) {
							return [ true, 'showHolidays', highlight ];
			        	} else if ( highlight.type == 'friday' ) {
							return [ true, 'showFriday', highlight ];
			        	} else if ( highlight.type == 'intensive' ) {
							return [ true, 'showIntensive', highlight ];
			        	} else if ( highlight.type == 'special' ) {
							return [ true, 'showSpecial', highlight ];
			        	} else if ( highlight.type == 'non_working' ) {
							return [ true, 'showNon_working', highlight ];
			        	}
			    	} else {
						return [ true, 'showDefault', highlight ];
			    	}
			     } // beforeShowDay
			});
        }

        function daySelected( date, inst ) {
			// inst.dpDiv.find('.ui-state-default').css('background-color', 'red');
	        eventDates[ new Date( date ) ] = { date : new Date( date ), type : $scope.dayTypes };
	    }

		$scope.fn2 = function() {
			$http.get( 'http://localhost:3000/mongo' )
				.then( function( data ) {
					var calendar = data.data;
					// console.log(calendar);
					$scope.calendarName = calendar.name;
					calendar.groupDays.forEach( function( element ) {
						element.days.days.forEach( function( day ) {
							eventDates[ new Date( day ) ] = { date : new Date( day ), type : element.type };
						});
						element.days.hours.forEach( function( hours ) {
							eventHours[ element.type ].push( { initialHour : hours.initialHour, endHour : hours.endHour } );
						});
					});
					showCalendars();
					showHours();
				})
		};

		function showCalendars() {
			var monthArray = [];
			monthArray = getMonthArrayByYear( '2016' );
			var calendarNumber = 1;
			for ( var i = 0; i < monthArray.length; i++ ) {
				var calendar = '#calendar-' + calendarNumber++; 
				showCalendar( calendar , monthArray[ i ] );
				$( calendar + ' p' ).text( 'Total horas: xyz' );
			};
		}
		function getMonthArrayByYear( year ) {
			var monthArray = [];
			for ( var i = 1; i < 13; i++ ) {
				monthArray.push( i + '/01/' + year );
			}
		}


		function showHours() {
			for ( var key in eventHours ) {
				eventHours[ key ].forEach( function( hours ) {
					$( '#leyend #' + key + 'Leyend span' ).append( hours.initialHour + ' ' + hours.endHour + ' ' );
				});
			}
		}

var aa = [];
		function hoursCalculating() {
			console.log(eventHours);
			// return;
			for ( var key in eventHours ) {
			// 	console.log( key );
				var acum = [];
				eventHours[ key ].forEach( function( element ) {
					var start = moment.utc( element.initialHour, "HH:mm" );
					var end   = moment.utc( element.endHour, "HH:mm" );
					var d     = moment.duration( end.diff( start ) );
					console.log( key + ' ' + d );
					acum.push( d );


				});

					console.log('**************');
					console.log(key);
					console.log(acum);

				if ( acum.length ) {
					var aa;
					acum.forEach( function( element ) {
						aa = element.add( aa );
					});
					eventHours[ key ].total = angular.copy( aa );
				}

				// if ( key == 'intensive' ) {
					// console.log( '**********************' );
					// console.log( key );
					// console.log( aa );
				// }

				// console.log('acum');
				// console.log(acum);
				// eventHours[ key ].total = acum;
			// console.log(aa);
			// console.log( eventHours );
			}
			// console.log( eventHours );
		}

		$interval( function() {
			$scope.fn2();
		}, 100, 1 );

// **************************************************************************************************************************
		$scope.fn = function() {
			hoursCalculating();
			// console.log(eventHours);
			// console.log(eventDates);
			// for ( var key in eventDates ) {
			// 	// console.log( (new Date( key ).getMonth() + 1) + ' - ' + eventDates[key].type );
			// 	console.log( eventDates[ key].type );
			// 	console.log( eventHours[ eventDates[ key ].type ] );
			// }
		};


// **************************************************** TIME CALCULATING ****************************************************
		var start = moment.utc( "0800", "HH:mm" );
		var end   = moment.utc( "1230", "HH:mm" );
		var d     = moment.duration( end.diff( start ) );

		var start2 = moment.utc( "1400", "HH:mm" );
		var end2   = moment.utc( "1745", "HH:mm" );
		var d2     = moment.duration( end2.diff( start2 ) );

		// console.log( d._data.hours );
		// console.log( d._data.minutes );
		// console.log( d2._data.hours );
		// console.log( d2._data.minutes );
		// var e = d.add( d2 );
		// console.log( e );
}]);
