/**
 * Class: ECMAScript para conversão e geração de cores HTML E HEXADECIMAL
 * @author Wanderlei Silva do Carmo <wander.silva@gmail.com>
 * @version 20221117.0
 * @licence MIT
 */

 class WSColor {

    constructor(red=255,green=255,blue=255){

        this.redLevel = red;
        this.greenLevel = green;
        this.blueLevel = blue;

    }

    getRedLevel(){
        return this.redLevel;
    }

    getGreenLevel(){
        return this.greenLevel;
    }

    getBlueLevel(){
        return this.blueLevel;
    }

    getRGB(){
        
        return `#${this.decToHex(this.redLevel)}${this.decToHex(this.greenLevel)}${this.decToHex(this.blueLevel)}`.toUpperCase();
    } 

    decToHex(n){
        return n.toString(16).padStart(2,'0')
    }

} 


//Testando o método.
const color = new WSColor(30,200,40);

//console.log(color.getRGB());
let r = color.getRedLevel();
let g = color.getGreenLevel();
let b = color.getBlueLevel();

//console.log(color.decToHex(100).padStart(2,'0'))
console.log(color.getRGB())

