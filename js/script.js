function crearUsuario(usuarios){
    let usuario=prompt("Insertar nombre de usuario");
    if (usuarios.has(usuario)){
        alert("Nombre de usuario ya en uso");
    }else{
        let contrasenia=prompt("Insertar contrasenia");
        usuarios.set(usuario,contrasenia);
    }
}
function borrarUsuario(usuarios){
    let usuario=prompt("Insertar nombre de usuario para eliminarlo");
    if (usuarios.has(usuario)){
        usuarios.delete(usuario);
        alert("Usuario eliminado con éxito");
    }else{
        alert("Este usuario no existe");
    }
}
function mostrarUsuarios(usuarios){
    var lista = [];
    for(let valor of usuarios.entries()){
        lista +="["+valor+"] ";
    }
    alert(lista);
}
function menu(){
    var usuarios = new Map();
    do{
        var opcion=prompt("OPCIONES:\n\n1. Nuevo usuario.\n2. Eliminar usuario.\n3. Mostrar usuarios\n4. Salir\n\nEscoge una opción");
  
        switch (opcion){
            case "1": crearUsuario(usuarios); break;
            case "2": borrarUsuario(usuarios); break;
            case "3": mostrarUsuarios(usuarios); break;
        }
    }
    while (opcion!="4")
}

menu();