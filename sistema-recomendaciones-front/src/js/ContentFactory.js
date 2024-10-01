import { Content } from "./models/Content.js";

export class ContentFactory {
    constructor() {
    }

    //Funcion para generar un objeto de tipo Content con data random. Estructura de data:
    /*
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    categoria: {
        type: [String],
        required: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    etiquetas: { //Arreglo de string
        type: [String],
        default: [],
    }
     */
    generateContent() {
        const contents = [
            {
                id_content: 1,
                titulo: "Sinfonía No.5",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 330,
                etiquetas: ["Clásica", "Sinfonía", "Orquesta"]
            },
            {
                id_content: 2,
                titulo: "El Señor de los Anillos",
                tipo: "video",
                categoria: ["Peliculas"],
                duracion: 178,
                etiquetas: ["Fantasía", "Aventura", "Épica"]
            },
            {
                id_content: 3,
                titulo: "Tutorial de JavaScript",
                tipo: "video",
                categoria: ["Educación"],
                duracion: 45,
                etiquetas: ["Programación", "Desarrollo Web", "Tutorial"]
            },
            {
                id_content: 4,
                titulo: "Podcast de Tecnología",
                tipo: "audio",
                categoria: ["Podcast"],
                duracion: 60,
                etiquetas: ["Tecnología", "Innovación", "Entrevistas"]
            },
            {
                id_content: 5,
                titulo: "Documental de la Naturaleza",
                tipo: "video",
                categoria: ["Documentales"],
                duracion: 90,
                etiquetas: ["Naturaleza", "Animales", "Educativo"]
            },
            {
                id_content: 6,
                titulo: "Canción Pop 2024",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 4,
                etiquetas: ["Pop", "Actual", "Éxito"]
            },
            {
                id_content: 7,
                titulo: "Serie de Ciencia Ficción",
                tipo: "video",
                categoria: ["Series"],
                duracion: 50,
                etiquetas: ["Ciencia Ficción", "Drama", "Futurista"]
            },
            {
                id_content: 8,
                titulo: "Ebook de Cocina Italiana",
                tipo: "documento",
                categoria: ["Libros"],
                duracion: 300,
                etiquetas: ["Cocina", "Italiana", "Recetas"]
            },
            {
                id_content: 9,
                titulo: "Curso de Diseño Gráfico",
                tipo: "video",
                categoria: ["Educación"],
                duracion: 120,
                etiquetas: ["Diseño", "Gráfico", "Creatividad"]
            },
            {
                id_content: 10,
                titulo: "Albúm de Jazz Clásico",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 60,
                etiquetas: ["Jazz", "Clásico", "Instrumental"]
            },
            {
                id_content: 11,
                titulo: "Película de Acción",
                tipo: "video",
                categoria: ["Peliculas"],
                duracion: 130,
                etiquetas: ["Acción", "Thriller", "Emocionante"]
            },
            {
                id_content: 12,
                titulo: "Serie de Comedia",
                tipo: "video",
                categoria: ["Series"],
                duracion: 25,
                etiquetas: ["Comedia", "Humor", "Entretenimiento"]
            },
            {
                id_content: 13,
                titulo: "Audiolibro de Fantasía",
                tipo: "audio",
                categoria: ["Libros"],
                duracion: 480,
                etiquetas: ["Fantasía", "Aventura", "Narración"]
            },
            {
                id_content: 14,
                titulo: "Video de Yoga para Principiantes",
                tipo: "video",
                categoria: ["Salud"],
                duracion: 30,
                etiquetas: ["Yoga", "Salud", "Bienestar"]
            },
            {
                id_content: 15,
                titulo: "Documental de Historia",
                tipo: "video",
                categoria: ["Documentales"],
                duracion: 80,
                etiquetas: ["Historia", "Educativo", "Cultura"]
            },
            {
                id_content: 16,
                titulo: "Canción Rock Clásico",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 5,
                etiquetas: ["Rock", "Clásico", "Guitarra"]
            },
            {
                id_content: 17,
                titulo: "Curso de Fotografía",
                tipo: "video",
                categoria: ["Educación"],
                duracion: 90,
                etiquetas: ["Fotografía", "Arte", "Técnicas"]
            },
            {
                id_content: 18,
                titulo: "Serie de Misterio",
                tipo: "video",
                categoria: ["Series"],
                duracion: 45,
                etiquetas: ["Misterio", "Suspenso", "Intriga"]
            },
            {
                id_content: 19,
                titulo: "Película de Animación",
                tipo: "video",
                categoria: ["Peliculas"],
                duracion: 100,
                etiquetas: ["Animación", "Familia", "Aventura"]
            },
            {
                id_content: 20,
                titulo: "Ebook de Desarrollo Personal",
                tipo: "documento",
                categoria: ["Libros"],
                duracion: 250,
                etiquetas: ["Desarrollo Personal", "Autoayuda", "Motivación"]
            },
            {
                id_content: 21,
                titulo: "Podcast de Salud Mental",
                tipo: "audio",
                categoria: ["Podcast"],
                duracion: 50,
                etiquetas: ["Salud Mental", "Bienestar", "Consejos"]
            },
            {
                id_content: 22,
                titulo: "Video de Entrenamiento en Casa",
                tipo: "video",
                categoria: ["Salud"],
                duracion: 40,
                etiquetas: ["Entrenamiento", "Fitness", "Hogar"]
            },
            {
                id_content: 23,
                titulo: "Canción de Música Electrónica",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 6,
                etiquetas: ["Electrónica", "Dance", "Ritmo"]
            },
            {
                id_content: 24,
                titulo: "Documental de Viajes",
                tipo: "video",
                categoria: ["Documentales"],
                duracion: 70,
                etiquetas: ["Viajes", "Cultura", "Aventura"]
            },
            {
                id_content: 25,
                titulo: "Serie de Drama",
                tipo: "video",
                categoria: ["Series"],
                duracion: 55,
                etiquetas: ["Drama", "Emocional", "Relaciones"]
            },
            {
                id_content: 26,
                titulo: "Película de Terror",
                tipo: "video",
                categoria: ["Peliculas"],
                duracion: 95,
                etiquetas: ["Terror", "Suspenso", "Miedo"]
            },
            {
                id_content: 27,
                titulo: "Curso de Marketing Digital",
                tipo: "video",
                categoria: ["Educación"],
                duracion: 110,
                etiquetas: ["Marketing", "Digital", "Negocios"]
            },
            {
                id_content: 28,
                titulo: "Albúm de Música Latina",
                tipo: "audio",
                categoria: ["Musica"],
                duracion: 50,
                etiquetas: ["Latina", "Bailable", "Ritmos"]
            },
            {
                id_content: 29,
                titulo: "Ebook de Programación en Python",
                tipo: "documento",
                categoria: ["Libros"],
                duracion: 350,
                etiquetas: ["Programación", "Python", "Desarrollo"]
            }]
        return contents;
    }

    //Funcion para generar un string random de longitud n

}