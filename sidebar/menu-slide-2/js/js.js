$('document').ready(FuncionInicio());

function FuncionInicio() {
};

$('#botonAbrir').click(function(){
    $('.sidenav').css({"width":"250px"});
    if($('#check').prop('checked')){
        $('.container').css({"marginLeft":"270px"});
        $('#botonAbrir').fadeOut('fast');
        $('.checkbox').fadeOut('fast');
    }
});

$('.closebtn').click(function(){
    $('.sidenav').css({"width":"0"});
//    if($('#check').prop('checked')){
        $('.container').css({"marginLeft":"10px"});
        $('#botonAbrir').fadeIn('fast');
        $('.checkbox').fadeIn('fast');
//    }    
});


