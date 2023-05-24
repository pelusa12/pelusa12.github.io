let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/firefox1.jpg') {
        miImagen.setAttribute('src', 'images/firefox2.jpg')
} else {
    miImagen.setAttribute('src', 'images/firefox1.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');



function estableceNombreUsuario () {
    let miNombre = prompt('plis pone tu nombre');
    if (!miNombre) {
        estableceNombreUsuario();
    }else
    localStorage.setItem('nombree', miNombre);
    miTitulo.textContent = 'aguante rasin ' + miNombre;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'aguante rasin ' + nombreAlmacenado;
}

