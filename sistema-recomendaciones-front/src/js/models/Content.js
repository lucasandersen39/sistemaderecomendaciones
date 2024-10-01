export class Content {
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
    etiquetas: {
        type: [String],
        default: [],
    }
    */
    constructor(titulo, tipo, categoria, duracion, etiquetas) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.categoria = categoria;
        this.duracion = duracion;
        this.etiquetas = etiquetas;
    }

    get_content() {
        return {
            titulo: this.titulo,
            tipo: this.tipo,
            categoria: this.categoria,
            duracion: this.duracion,
            etiquetas: this.etiquetas
        }
    }


}