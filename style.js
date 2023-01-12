
const teclado = document.querySelectorAll("input")

for(i=1;i<teclado.length;i++ ){
    
    const teclas =teclado[i].value

    teclado[i].onclick = function (){
         document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[0].value + teclas
        }
}

