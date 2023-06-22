
//variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
//--------------------
//funciones

//funcion de botones, en donde se hace sus escuchadores de evento en diferentes funciones.

function iniciarJuego(){

    //esta varaible se crea para esconder partes del juego

    //oculta seccion de ataque
    let seccionAtaque = document.getElementById('ataques')
    seccionAtaque.style.display = 'none'

    //ocultar seccion de mensaje

    let seccionMensaje = document.getElementById('mensaj')
    seccionMensaje.style.display = 'none'
    

    //----------------------    

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)   

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    //Ocultar el boton de reinicio

    let seccionReinicio = document.getElementById('reiniciar')
    seccionReinicio.style.display = 'none'

    //----------------
   
}

//-----------------

//Boton de seleccionar mascota

function selecionarMascotaJugador(){
   
   
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipego = document.getElementById('capipego')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    
    if(inputHipodoge.checked){
            // alert("Seleccionate a Hipodoge") 
            spanMascotaJugador.innerHTML = 'Hipodoge'
    }   else if(inputCapipego.checked){
          //  alert("Seleccionate a Capipego") 
            spanMascotaJugador.innerHTML = 'Capipego'
            }   else if(inputRatigueya.checked){
           //     alert("Seleccionate a Ratigueya")
                spanMascotaJugador.innerHTML = 'Ratigueya'
                }   else if(inputLangostelvis.checked){
           //         alert("Seleccionate a Langostelvis")
                    spanMascotaJugador.innerHTML = 'Langostelvis'
                    }   else if(inputTucapalma.checked){
            //            alert("Seleccionate a Tucapalma")
                        spanMascotaJugador.innerHTML = 'Tucapalma'
                        }   else if(inputPydos.checked){
                 //           alert("Seleccionate a Pydos")
                            spanMascotaJugador.innerHTML = 'Pydos'
                            }   else{
                                alert("No seleccionasteis ninguna Mascota. Elige una y prepárate para luchar")
                                }

     
    //Condicional para validar que el jugador si selecciono una mascota y desbloqueadr los botones de batalla, además
    //Se mete la función de la seleccion de mascota enemigo para que se vea más organizado una vez se desbloqueen los botones.
    
         if(inputHipodoge.checked || inputCapipego.checked || inputLangostelvis.checked || inputTucapalma.checked || inputRatigueya.checked || inputPydos.checked){
            document.getElementById('boton-fuego').disabled = false
            document.getElementById('boton-agua').disabled = false
            document.getElementById('boton-tierra').disabled = false

                //reaparecer seccion ataque
                let seccionAtaque = document.getElementById('ataques')
                seccionAtaque.style.display = 'block'

                //reaparecer seccion mensaje
                let seccionMensaje = document.getElementById('mensaj')
                seccionMensaje.style.display = 'block'

                //Desaparecer seleccion de mascotas
                let seccionSelecionarMascotas = document.getElementById('banners')
                seccionSelecionarMascotas.style.display = 'none'

                //ocultar reglas

                let seccionRegla = document.getElementById('reglamento')
                seccionRegla.style.display = 'none'
    
                //-------------------

            selecionarMascotaEnemigo()
        }   else {
            document.getElementById('boton-fuego').disabled = true
            document.getElementById('boton-agua').disabled = true
            document.getElementById('boton-tierra').disabled = true
            }
 
}

//--------------

//Seleccionar mascota enemigo aleatorio.

function selecionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

        if(ataqueAleatorio == 1){
            spanMascotaEnemigo.innerHTML = 'Hipodoge'
        }   else if(ataqueAleatorio == 2){
            spanMascotaEnemigo.innerHTML = 'Capipego'
            }   else if(ataqueAleatorio == 3){
                spanMascotaEnemigo.innerHTML = 'Ratigueya'
                }   else if(ataqueAleatorio == 4){
                    spanMascotaEnemigo.innerHTML = 'Langostelvis'
                    }   else if(ataqueAleatorio == 5){
                        spanMascotaEnemigo.innerHTML = 'Tucapalma'
                        }   else{
                            spanMascotaEnemigo.innerHTML = 'Pydos'
                            }
}

//---------------------------

// funcion de valores aleatorios

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

//----------------------

// funciones de botones de batalla jugador - enemigo

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
   
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
   
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
   
}


function ataqueAleatorioEnemigo(){

    let enemigo = aleatorio(1,3)

    if(enemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }   else if(enemigo == 2){
        ataqueEnemigo = 'AGUA'
        }   else {
            ataqueEnemigo = 'TIERRA'
            }

    combate()      
}

//-------------------

//funcion de batalla

function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE 🤔")        
      } else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo== 'AGUA')){
        crearMensaje("En hora buena ¡GANAS 🥳!")  
        vidasEnemigo = vidasEnemigo - 1 
        spanVidasEnemigo.innerHTML = vidasEnemigo
        } else{
            crearMensaje("Perdiste 😢!")
            vidasJugador = vidasJugador - 1
            spanVidasJugador.innerHTML = vidasJugador
            } 

      revisarVidas()      
}


//------------------------------


//funcion de batalla
function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeGanador("Ganasteis, eres el rey de MOKEPON 🏆🏆🏆")
    }   else if(vidasJugador == 0){
        crearMensajeGanador("Perdisteis, mejora tu estrategia y vuelve a intentarlo 😉😉😉")
        }


}

//------------------------------

//Funcion para crea mensajes en el pie de pagina

function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    seccionMensaje.appendChild(parrafo)
}

//-------------------


//Funcion para crea mensajes de quien gana o pierde

function crearMensajeGanador(final){
    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Disteis todo de ti y estoy orgullo, ' + final

    seccionMensaje.appendChild(parrafo)

    document.getElementById('boton-fuego').disabled = true
    document.getElementById('boton-agua').disabled = true
    document.getElementById('boton-tierra').disabled = true
    document.getElementById('boton-mascota').disabled = true

    //Reaparecer el boton de reinicio 

    let seccionReinicio = document.getElementById('reiniciar')
    seccionReinicio.style.display = 'block'

    //------------------

}

//------------------------------

//Funcion de reiniciar juego
function reiniciarJuego(){
    location.reload()
}


//---------------------------------


//cargar window y que el script de java funcione correctamente.

window.addEventListener('load', iniciarJuego)

//------------------------------