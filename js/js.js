/**
 * 
 */
$(document).ready(function(){
	  var currentPosition = 0;
	  var slideWidth = 330;
	  var slides = $('.slide');
	  var numberOfSlides = slides.length;
	
	  // manageControls: Hides and Shows controls depending on currentPosition
	  function manageControls(position){
          		if(position >= 3)
                {
                    position=0;
                    currentPosition=0;
                }
		// Hide left arrow if position is first slide
		if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
		// Hide right arrow if position is last slide
		if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
	  } 
    
       // Hide left arrow control on first load
	  manageControls(currentPosition);
    
	  // Create event listeners for .controls clicks
	  $('.control').bind('click', function(){
		// Determine new position
        if ($(this).attr('id')=='rightControl') currentPosition++;
        else currentPosition--;
	
		// Hide / show controls
		manageControls(currentPosition);
		// Move slideInner using margin-left
		$('#slideInner').animate({
		  'marginLeft' : slideWidth*(-currentPosition)
		});
	  });
	  
	  function Aplay(){
		// Determine new position
		currentPosition++;
	
		// Hide / show controls
		manageControls(currentPosition);
		// Move slideInner using margin-left
		$('#slideInner').animate({
		  'marginLeft' : slideWidth*(-currentPosition)
		});
          setTimeout(function(){Aplay();},2000);
	  }
	  setTimeout(Aplay(),2000);
	  
});