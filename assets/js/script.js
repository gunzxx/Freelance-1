let tutup = true;
$('#toggle-nav').on('click',()=>{
    if(tutup==true){
        $('#sub1').css('display','flex');
        $('#sub-nav').css('position','relative');
        $('#sub-nav').css('top','0');
        tutup = false;
    }else{
        $('#sub1').css('display', 'none');
        $('#sub-nav').css('position', 'absolute');
        $('#sub-nav').css('top', '-200px');
        tutup = true;
    }
});