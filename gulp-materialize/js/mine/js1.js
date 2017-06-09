// this is js1
$(document).ready(function(){
    $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .6, // Opacity of modal background
          inDuration: 2000, // Transition in duration
          outDuration: 1000, // Transition out duration
          startingTop: '40%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log( 'Opened!' );
            // console.log( modal, trigger );
          },
          complete: function() {
              console.log( 'Closed' );
          }
        }
      );
});
