
var update = document.getElementById( 'update' );
var del = document.getElementById( 'delete' );
var can = document.getElementById( 'can' );
var trash = document.getElementsByClassName("trash");

//this works brah
vader.addEventListener( 'click', function() {
	fetch( 'quotes', {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				'name': 'Darth Vader',
				'quote': 'I find your lack of faith disturbing.'
			})
		})
		.then( response => {
			if ( response.ok ) return response.json()
		})
		.then( data => {
			console.log( data )
		});
});

//this also works
del.addEventListener( 'click', function() {
	fetch( 'quotes', {
		method: 'delete',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( {
			'name': 'Darth Vader'
		})
	}).then( function( response ) {
		window.location.reload()
	})
} );

can.addEventListener( 'click', function() {
	fetch( 'quotes', {
		method: 'deleteToo',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( {
			'name': 'ford'
		})
	}).then( function( response ) {
		window.location.reload()
	})
} );



// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//       	alert('hi');
//       	fetch( 'quotes', {
// 		method: 'delete',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify( {
// 			'name': this
// 			} )
// 		} ).then( function( response ) {
// 			window.location.reload()
// 		} )

//       });
//     });

