
document.addEventListener('DOMContentLoaded', (evt)=>{

 
    const form1 = document.querySelector('form');

    form1.addEventListener('submit', (evt) =>{
        evt.preventDefault();

        paintBoxCreatedColor(evt);

    });


    form1.querySelectorAll('.bx').forEach( el => {
            
            el.addEventListener('change', () => {
                 paintBoxCreatedColor();
            });
    });

    
});



const paintBoxCreatedColor = (evt) => {

            //console.log(evt.target.txtColorRed.value);
        
            let R = parseInt(document.forms[0].txtColorRed.value);
            let G = parseInt(document.forms[0].txtColorGreen.value);
            let B = parseInt(document.forms[0].txtColorBlue.value);
    
            console.log(R)
    
            //Testando o método.
            const color = new WSColor(R,G,B);
    
            //console.log(color.getRGB());
            // let r = color.getRedLevel();
            // let g = color.getGreenLevel();
            // let b = color.getBlueLevel();
    
            console.log(color.getRGB());        
            
            let rgb = color.getRGB();
            document.querySelector('.box-created-color').style.backgroundColor = rgb
            document.querySelector('#cor-hexa').textContent = rgb


} 
