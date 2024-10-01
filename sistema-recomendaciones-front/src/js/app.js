"uses strict"
import { ContentFactory } from "./ContentFactory.js";
import { User } from "./models/User.js";
document.addEventListener('DOMContentLoaded', function () {
    /*  const contentFactory = new ContentFactory();
     const contents = contentFactory.generateContent();
 
     contents.forEach(content => {
         fetch('http://localhost:3000/api/contents', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(content)
         })
             .then(response => response.json())
             .then(data => console.log(data))
             .catch(error => console.error('Error:', error));
     }); */
    // const contents = [];
    fetch('http://localhost:3000/api/contents', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(response => response.json())
        .then(data => {
            // contents.push(data)
            console.log(data);
            crear_usuarios(data);
        }
        )
        .catch(error => console.error('Error:', error));

    function crear_usuarios(contenido) {
        /*  for (let i = 1; i <= 10; i++) {
             const user = new User(i);
             user.ver_contenido(contenido);
         } */

    }
    fetch('http://localhost:3000/api/history/2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => console.log("History ", data))
        .catch(error => console.error('Error:', error));




});