/* creacion de un objeto literal */
const natalia = {
    name: 'natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS", 
    ],
    /* hacer que natalia pueda actualizar sus cursosAprobados */
    /* aprobarCursos: function(){} */
    aprobarCursos(nevoCursito){
        this.cursosAprobados.push(nevoCursito);
    }
};

/* crear un prototipo  */
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /* this.aprobarCurso = function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    } */
}
/* agregamos un metodo por fuera de la funcion a esto se le llama prototype */
Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso a la Introduccion a la Produccion de videojuegos",
        "Curso de Creacion de Personajes",
    ]
)
