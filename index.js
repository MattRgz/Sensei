class Ninja{
    constructor(nombre,salud,velocidad,fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        console.log(this.nombre)
    }
    showStats(){
        let stats = {
            nombre: this.nombre,
            fuerza: this.fuerza,
            velocidad: this.velocidad,
            salud: this.salud,
        }
        console.log(stats)
    }
    drinkSake(){
        this.salud+=10;
    }
}
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre,200,10,10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.')
    }
}
let superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();