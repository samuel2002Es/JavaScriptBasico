class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

class leariningPaths{
    constructor({
        name,
        courses = [],
    }){
        /* con un # se acen privados las variables */
        this._name = name;
        this.courses = courses;
    }
    /* poner de tipo get nos permite no llamarlo con parentesis */
    get name(){
        return this._name;
    }
    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}
const escuelaWeb = new leariningPaths({
    name: "Escuela de desarrollo web",
    courses: [ 
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
    });
const escuelaData = new leariningPaths({
    name: "Escuela de Data sciense",
    courses: [ 
        "Curso Introduccion a la Produccion de VGS",
        "Curso de Unreal Engine",
        "Curso de Unioty 3D",
    ],
});
const escuelaVgs= new leariningPaths({
    name: "Escuela de videojuegos",
    courses: [ 
        "Curso Introduccion a la Produccion de VGS",
        "Curso de Unreal Engine",
        "Curso de Unioty 3D",
    ],
},);

class Student extends leariningPaths {
    constructor(
        {
            name,
            email,
            username,
            twitter = undefined,
            instagram = undefined,
            facebook = undefined,
            approvedCourses = [],
            leariningPaths = [],
        }
    ){
            this.name = name;
            this.email= emai;
            this.username= username;
            this.socialMedia = {
                twitter: twitter,
                instagram: instagram,
                facebook: facebook,
            }
            this.approvedCourses = approvedCourses;
            this.leariningPaths = leariningPaths;
    }
}

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juandc',
    email: 'juandc@gmail.com',
    twitter : 'juandc@gmail',
});

const miguelito = new Student({
    name: 'migelito',
    username: 'miguelito',
    email: 'miguel@gmail.com',
    twitter : 'miguel@gmail',
});