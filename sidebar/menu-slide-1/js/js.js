$('document').ready(FuncionInicio());

function FuncionInicio() {
};

$('#botonAbrir').click(function(){
    $('.sidenav').addClass('menuAbierto');
    $('.container-fluid').addClass('containerAbierto');
    $('#botonAbrir').text('(abierto)');
});

$('.closebtn').click(function(){
    $('.sidenav').removeClass('menuAbierto');
    $('.container-fluid').removeClass('containerAbierto');
    $('#botonAbrir').text('Abrir Menú');
});
