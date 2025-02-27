document.addEventListener("DOMContentLoaded", () => {
    let tiempo = '';
    let marcaReloj = document.getElementById('marcador');
    let formato12h = false; //true si es 12h y false para 24h

    function tiempoActual(){
        //con esto obtenemos la fecha y hora actual
        let obteberTiempo = new Date()
    
        //con eso obtenemos solo la h, m y s, solo los dos primeros numeros
        let hora = obteberTiempo.getHours().toString().padStart(2, '0');
        let minutos = obteberTiempo.getMinutes().toString().padStart(2, '0');
        let segundos = obteberTiempo.getSeconds().toString().padStart(2, '0');
        
        let periodo = '';
        let horaMostrar = hora;
    
        if (formato12h){
            periodo = hora >= 12 ? " P.M " : " A.M ";
            horaMostrar = hora % 12 || 12;
        }else{
            horaMostrar = hora;
        };
        //con esto concatenamos las variables anteriormente definidas
        tiempo = `${horaMostrar}: ${minutos}  ${segundos}${ formato12h ? periodo: "  "}`;
    
        //con eso actualiza el html cada segundo
        marcaReloj.innerText = tiempo;
    
        //con esto damos un tiempo de 1 segundo
        setTimeout(tiempoActual, 1000);
    }
    
    tiempoActual();
    
    function formato(){
        let btn = document.getElementById('btn');
    
        if(btn){
            btn.addEventListener("change", () => {
               formato12h = btn.checked;
               tiempoActual();
            });
        };
    }
    
    formato();
    
    function colores(event){
        let color = event.target.value;
        let prueba = document.getElementById('prueba');
        prueba.style.background = color;
    }    
    document.getElementById("color").addEventListener("input", colores);
});

