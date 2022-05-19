/* expor hace referencia a lo unico que se va a cargar en nuestro archivo, lo demas sera ignorado de tal forma que estamos protegiendo nuestro url que es secreto  */
export class PlatziClass{
    constructor({
        name, 
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    /* metodos */
    reproducir(){
        VideoPlay(this.videoID);
    }
    pausar(){
        VideoStop(this.videoID);
    }
}

function VideoPlay(id){
    const url = "http://samuelesguapo.com/"+id;
    console.log("Se esta reproduciendo");
}
function VideoStop(id){
    const url = "http://samuelesguapo.com/"+id;
    console.log("Se ha pausado");
}