//funciones: parámetros obligatorios, opcionales y por defecto

function activar( quien:string, defecto:string= 'batiseñal',
                    opcional?:number ) {
    let mensaje:string;
    if( opcional ) {
        mensaje = `${quien} activó la ${defecto} con ${opcional}`;
    } else {
        mensaje = `${quien} activó la ${defecto}`;
    }
    // console.log(mensaje);
}

activar('Pedro','batiseñal',33);
