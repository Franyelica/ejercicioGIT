class Persona{
    constructor(nombre, apellido, edad){
        this.nombre= "Maria";
        this.apellido= "Torres";
        this.edad= 23;
        this.metodo1= function getDetalles(){
            document.write("Nombre: "+ this.nombre + "<br>" + "Apellido: "+ this.apellido + "<br>" + "Edad: "+ this.edad);
        }

        var persona1= new Persona ("Maria", "Torres", 24);
        persona1.metodo1();

//class Jugador {}
        class Persona extends Jugador {
            constructor(posicion) {
                super(nombre, apellido, edad, posicion);
                this.posicion = posicion;
                this.metodo2= function getDetalles(){document.write("Nombre: "+ this.nombre + "<br>" + "Apellido: "+ this.apellido + "<br>" + "Edad: "+ this.edad + "Posicion: " + this.posicion);
                } } }

        var jugador1= new Jugador ("Jorge", "Castillo", 20, "delantero");
        jugador1.metodo2();


//class Entrenador {}
        class Jugador extends Entrenador {
            constructor(experiencia, id) {
                super(nombre, apellido, edad, posicion, experiencia, id);
                this.experiencia = experiencia;
                this.id = id;
                this.metodo3= function getDetalles(){document.write("Nombre: "+ this.nombre + "<br>" + "Apellido: "+ this.apellido + "<br>" + "Edad: "+ this.edad + "Experiencia: " + this.experiencia + "<br>" + "ID: " + this.id);
                }
            }
        }
    }  }

var jugadores= [["Julio", "Salazar", 19, "portero"],["Fabio","Guillermo",25,"delantero"],["Jorge", "Castillo", 20, "delantero"]];
console.log(jugadores);