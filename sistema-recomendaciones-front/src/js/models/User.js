export class User {
    constructor(id_usuario) {
        this.id_usuario = id_usuario;
    }

    get_id_usuario() {
        return this.id_usuario;
    }

    ver_contenido(contents) {
        for (let i = 0; i < contents.length; i++) {
            let content = contents[Math.floor(Math.random() * contents.length)];
            console.log(content);
            console.log(`El usuario ${this.id_usuario} está viendo el contenido ${content.titulo} con duracion ${content.duracion}`);
            const tiempo_random = Math.floor(Math.random() * content.duracion);
            setTimeout(() => {
                console.log(`El usuario ${this.id_usuario} ha terminado de ver el contenido ${content.titulo}`);
                const history = {
                    user_id: this.id_usuario,
                    content_id: content._id,
                }
                fetch('http://localhost:3000/api/history', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(history)
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error('Error:', error));
            }, tiempo_random * 1000);
        }
    }


}