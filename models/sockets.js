

class Sockets {

    constructor(io){
        this.io = io;

        this.socketEvents()

    }

    socketEvents(){
        // On conection
        this.io.on('connection', (socket) => { 

            // Escuchar evento: mensaje-cliente
            socket.on("mensaje-cliente", (data)=> {
                console.log(data);
                this.io.emit("mensaje-server", data)

            })


        });

    }

}


module.exports = Sockets