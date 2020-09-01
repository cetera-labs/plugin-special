$(function(){
       
    $('.btn.fontsize').click(function(e){
        
        e.preventDefault();
        $('.btn.fontsize').removeClass('active');
        $(this).addClass('active');
        
        $('body').removeClass('fontsize-normal');
        $('body').removeClass('fontsize-small');
        $('body').removeClass('fontsize-big');
        
        $('body').addClass($(this).data('class'));
        
        localStorage.setItem('special_fontsize', $(this).data('class'));
        
    });
    
    $('.btn.fontface').click(function(e){
        
        e.preventDefault();
        $('.btn.fontface').removeClass('active');
        $(this).addClass('active');
        
        $('body').removeClass('fontface-arial');
        $('body').removeClass('fontface-times');
        
        $('body').addClass($(this).data('class')); 

        localStorage.setItem('special_fontface', $(this).data('class'));        
    });    
    
    $('.btn.fontspacing').click(function(e){
        
        e.preventDefault();
        $('.btn.fontspacing').removeClass('active');
        $(this).addClass('active');
        
        $('body').removeClass('fontspacing-small');
        $('body').removeClass('fontspacing-normal');
        $('body').removeClass('fontspacing-big');
        
        $('body').addClass($(this).data('class'));  

        localStorage.setItem('special_fontspacing', $(this).data('class'));
    });       
    
    $('.btn.colors').click(function(e){
        
        e.preventDefault();
        $('.btn.colors').removeClass('active');
        $('.btn.colors.'+$(this).data('class')).addClass('active');
        
        $('body').removeClass('color-1');
        $('body').removeClass('color-2');
        $('body').removeClass('color-3');
        $('body').removeClass('color-4');
        $('body').removeClass('color-5');
        
        $('body').addClass($(this).data('class'));
        
        localStorage.setItem('special_colors', $(this).data('class'));
    });  

    $('.btn.images').click(function(e){
        
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('images-on');
        
        if ($('body').hasClass('images-on')) {
            localStorage.setItem('special_images', 'on');
        }
        else {
            localStorage.setItem('special_images', 'off');
        }
    });   

    $('.btn.setup').click(function(e){
        
        e.preventDefault();
        $('.special-panel.pulldown').toggle();
        
    }); 
    
    $('.btn.clear').click(function(e){
        localStorage.removeItem('special_colors');
        localStorage.removeItem('special_fontsize');
        localStorage.removeItem('special_fontface');
        localStorage.removeItem('special_fontspacing');
        localStorage.removeItem('special_images');
        document.location.reload();
    });     
    
    $('body').addClass('special');
    

    var color = localStorage.getItem('special_colors') || 'color-1';
    $('a.btn.colors.'+color).trigger('click');   

    var fontsize = localStorage.getItem('special_fontsize') || 'fontsize-normal';
    $('a.btn.fontsize.'+fontsize).trigger('click');     

    var fontface = localStorage.getItem('special_fontface') || 'fontface-arial';
    $('a.btn.fontface.'+fontface).trigger('click'); 

    var fontspacing = localStorage.getItem('special_fontspacing') || 'fontspacing-small';
    $('a.btn.fontspacing.'+fontspacing).trigger('click');     
    
    var img = localStorage.getItem('special_images') || 'on';
    if (img == 'on') {
       $('.btn.images').trigger('click'); 
    }
}); 