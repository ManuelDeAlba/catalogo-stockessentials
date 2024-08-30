const ACENTOS = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};

export function eliminarAcentos(str){
    return str.split("").map(letra => ACENTOS[letra] || letra).join("");
}