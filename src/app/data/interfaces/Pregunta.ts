export interface Pregunta {
    pais: string ,
    capital: string | null,
    bandera: string | null,
    descripcion: String | null,
    pregunta: string,
    respuesta: string,
    opciones: string[],
}
