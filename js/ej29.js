window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnIngresar").addEventListener("click", tateti);
}

function tateti() {
    let ganar, posJugador1, posJugador2;
    let intentos = 0;

    posJugador1 = Number(document.querySelector("#txtJugador1").value);
    posJugador2 = Number(document.querySelector("#txtJugador2").value);


    switch (posJugador1) {
        case 1:
            {
                document.querySelector("#pos1").src = "imagenes/x.png";
                intentos += 1;
                if ("imagenes/x.png" === document.querySelector("#pos2").src && "imagenes/x.png" === document.querySelector("#pos3").src && "imagenes/x.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("imagenes/x.png" === document.querySelector("#pos4").src && "imagenes/x.png" === document.querySelector("#pos7").src && "imagenes/x.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("imagenes/x.png" === document.querySelector("#pos5").src && "imagenes/x.png" === document.querySelector("#pos9").src && "imagenes/x.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }

                break;
            }
        case 2:
            {
                document.querySelector("#pos2").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos2").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos2").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 3:
            {
                document.querySelector("#pos3").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos2").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos9").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 4:
            {
                document.querySelector("#pos4").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos4").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos4").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 5:
            {
                document.querySelector("#pos5").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos9").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos2").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 6:
            {
                document.querySelector("#pos6").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos4").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 7:
            {
                document.querySelector("#pos7").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 8:
            {
                document.querySelector("#pos8").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos2").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
        case 9:
            {
                document.querySelector("#pos9").src = "imagenes/x.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/x.png" === document.querySelector("#pos7").src) {
                    alert("Ganó el jugador 1");
                    ganar = true;
                }
                break;
            }
    }
    switch (posJugador2) {
        case 1:
            {
                document.querySelector("#pos1").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos2").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5circulo500/imagenes/circulo.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }

                break;
            }
        case 2:
            {
                document.querySelector("#pos2").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos8").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 3:
            {
                document.querySelector("#pos3").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos2").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 4:
            {
                document.querySelector("#pos4").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos6").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 5:
            {
                document.querySelector("#pos5").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos2").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos8").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos6").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 6:
            {
                document.querySelector("#pos6").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 7:
            {
                document.querySelector("#pos7").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos4").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 8:
            {
                document.querySelector("#pos8").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos2").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos9").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }
        case 9:
            {
                document.querySelector("#pos9").src = "imagenes/circulo.png";
                intentos += 1;
                if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos6").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos3").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos1").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos5").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                } else if ("http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos8").src && "http://127.0.0.1:5500/imagenes/circulo.png" === document.querySelector("#pos7").src) {
                    alert("Ganó el jugador 2");
                    ganar = true;
                }
                break;
            }


    }

    if (!ganar && intentos === 9) {
        alert("Empate!!");
    }

}