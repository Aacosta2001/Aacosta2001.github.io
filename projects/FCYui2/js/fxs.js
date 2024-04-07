//DECLARACIÓN DE VARIABLES
juego = {"botones":$(".game button"),"frente":$(".front"),"posterior":$(".back")};
botoninit = $("#init");
tarjeta = {"all":$(".card"),"text":$("#text"),"date":$("#date"),"image":$("#image")};
audios = [$("#t1")[0],$("#t2")[0]]
cartaSel1 = null;
cartaSel2 = null;
cartasDestapadas = 0;
parejas = 0;
init = false;

//ASIGNANDO EL ARREGLO DE IMAGENES
cartas = [{"url":"./imgs/IMG_6260.webp","text":`Yo con gusto recibo las hermosas flores que me has traído y las guardo con amor y cariño. Me parecen un regalo hermoso, tanto como lo fue la noche de ayer.`,"date":" — 08/15/2022"},{"url":"./imgs/IMG_6321.webp","text":`Me conmueve encontrarme ahora, y los días anteriores, con las flores que me entregas con tanto cariño. Mi corazón no puede sentirse más feliz de tener la honra de recibir todos los regalos que me das, con sus diferentes significados. 
Yo por mi parte no tengo flores, ni otros regalos especiales, pero tengo la poesía que mi corazón susurra cuando hablo contigo. Mis encantadores versos, desde los más románticos hasta los más perversos, te los dedico con un profundo amor.`,"date":" — 08/17/2022"},{"url":"./imgs/IMG_6357.webp","text":`La confianza se cultiva, como a una flor delicada, se cuida y se alimenta con amor y cariño. Me alegra saber que estoy siendo un buen jardinero.`,"date":" — 08/18/2022"},{"url":"./imgs/IMG_6391.webp","text":`Dormí rato después, me quedé despierto escuchando música viejita de los 80 en inglés, que me daba una muy buena vibra esa noche mientras pensaba en ti.
Acepto tu hermoso regalo, como aceptaré todos y cada uno de los que quieras darme, sin embargo no quiero que te sientas estresada cuando se te agoten las ideas. Tu profundo amor y cariño es el mejor regalo que puedo recibir.`,"date":" — 08/19/2022"},{"url":"./imgs/IMG_6472.webp","text":`Yo cuidaré de esa confianza mientras pueda hacerlo.
Y la voy a ayudar a crecer, hasta que pueda ser libre.
Igual que tu amor.`,"date":" — 08/20/2022"},{"url":"./imgs/IMG_6502.webp","text":`"Son especialmente hermosas por su forma
Pero con una gota descendiendo
Tu eres hermoso, pero sigue habiendo gotas de sangre de heridas bajando"`,"date":" — 08/20/2022"},{"url":"./imgs/IMG_6505.webp","text":`De nuevo encontrarme con tus hermosas flores me hace sonreír, así que estaré comenzando mi día con una sonrisa.
Debo admitirlo, tus regalos son sumamente hermosos, los adoro bastante.
Por mi parte, te deseo un excelente día. Que puedas descansar, hacer todo lo que te propongas y que seas feliz.`,"date":" — 08/21/2022"},{"url":"./imgs/IMG_6525.webp","text":`Me alegra de nuevo encontrarme que tu precioso regalo, más aún sabiendo que con ellos expresas lo que sientes sin miedo.
Yo por mi parte me siento feliz sabiendo que te encuentras en tu viaje, espero que puedas disfrutarlo mucho y conocer muchas cosas nuevas.
Te amo.`,"date":" — 08/22/2022"},{"url":"./imgs/IMG_6680.webp","text":`+ Oh, cariño. Adoro tus regalos, pero hoy es tu día. Hoy tú eres la que debe recibir regalos hermosos, estoy a tu servicio.
- ¡Que aceptes dije!
+ Está bien, las acepto, no me pegues.`,"date":" — 08/25/2022"},{"url":"./imgs/IMG_6742.webp","text":`Siempre y cuando sea un bonito recuerdo en tu memoria yo... Estaré feliz donde sea que esté.`,"date":" — 08/26/2022"},{"url":"./imgs/IMG_6899.webp","text":`Dos locos que ya no confiaban en el amor.
Solo querían divertirse.
Terminaron enamorados.`,"date":" — 08/29/2022"},{"url":"./imgs/IMG_7144.webp","text":`Qué lindo despertar para escucharte en VC.`,"date":" — 08/31/2022"},{"url":"./imgs/IMG_7350.webp","text":`Buenos días, corazón.
Qué manera de dar los buenos días más animada, me da la impresión de que estás de buen humor hoy.
Acepto tus hermosas flores al igual que acepto tu profundo amor. Iré a desayunar de inmediato.
Te deseo que tengas un buen día en clases hoy, cuídate mucho. Te amo.`,"date":"  — 09/02/2022"},{"url":"./imgs/IMG_8010.webp","text":`Buenos días, corazón.
Qué hermosas flores me traes hoy, rosas blancas que simbolizan pureza...
Unas hermosas flores como tú.`,"date":" — 09/11/2022"},{"url":"./imgs/IMG_9189.webp","text":`Yui, esas flores son lindas, pero ni con tanta belleza pueden superar lo hermoso que es este texto que me dedicas.

Me cuesta dejar de pensar que estoy siendo un problema para ustedes cuando todo parece un caos tan intenso, nunca fue mi intención hacerles perder el equilibrio sino hacerles sentir mi amor hasta donde tuviese que llegar.

Eres tan hermosa, tan romántico y llena de amor para entregar, hay tanto amor en ti que creo que a este mundo roto podrías alimentar y hacerlo crecer en un mundo lleno de cosas hermosas.

Lo que sea que haya pasado, es cosa del pasado ya, no tiene relevancia porque ya no volverá a afectar. Lo único que del pasado queda son los momentos hermosos que siempre voy a recordar, y esos son los que más vale la pena atesorar.`,"date":" — 03/02/2023"},{"url":"./imgs/IMG_9220.webp","text":`Siempre es tan placentero y sumamente lindo encontrarse con tus regalos.

Sin embargo temo decir que estás equivocada con lo del ser más bello, porque no hay nada más hermoso que tú cuando sonríes. Igual de mi parte te deseo un excelente día, que te vaya bien en clases y que tengan un día tranquilo todas.`,"date":" — 03/04/2023"},{"url":"./imgs/IMG_9346.webp","text":`Qué hermosa manera de despertar, encontrándose con un regalo tan hermoso como el que tú me das.
Recibo tus flores con un inmenso cariño y te envío un millón de besos, y la mejor de las suertes para su examen importante. Espero que les vaya muy bien el día de hoy, ¡te amo!`,"date":" — 03/07/2023"},{"url":"./imgs/IMG_2059.webp","text":`Buenos días, Yui cariño. Gracias por tus versos y tu poema a la fuerza del amor, y por esas flores hermosas que me entregas con tanto cariño.`,"date":" — 04/22/2023"},{"url":"./imgs/IMG_6260.webp","text":`Yo con gusto recibo las hermosas flores que me has traído y las guardo con amor y cariño. Me parecen un regalo hermoso, tanto como lo fue la noche de ayer.`,"date":" — 08/15/2022"},{"url":"./imgs/IMG_6321.webp","text":`Me conmueve encontrarme ahora, y los días anteriores, con las flores que me entregas con tanto cariño. Mi corazón no puede sentirse más feliz de tener la honra de recibir todos los regalos que me das, con sus diferentes significados. 
Yo por mi parte no tengo flores, ni otros regalos especiales, pero tengo la poesía que mi corazón susurra cuando hablo contigo. Mis encantadores versos, desde los más románticos hasta los más perversos, te los dedico con un profundo amor.`,"date":" — 08/17/2022"},{"url":"./imgs/IMG_6357.webp","text":`La confianza se cultiva, como a una flor delicada, se cuida y se alimenta con amor y cariño. Me alegra saber que estoy siendo un buen jardinero.`,"date":" — 08/18/2022"},{"url":"./imgs/IMG_6391.webp","text":`Dormí rato después, me quedé despierto escuchando música viejita de los 80 en inglés, que me daba una muy buena vibra esa noche mientras pensaba en ti.
Acepto tu hermoso regalo, como aceptaré todos y cada uno de los que quieras darme, sin embargo no quiero que te sientas estresada cuando se te agoten las ideas. Tu profundo amor y cariño es el mejor regalo que puedo recibir.`,"date":" — 08/19/2022"},{"url":"./imgs/IMG_6472.webp","text":`Yo cuidaré de esa confianza mientras pueda hacerlo.
Y la voy a ayudar a crecer, hasta que pueda ser libre.
Igual que tu amor.`,"date":" — 08/20/2022"},{"url":"./imgs/IMG_6502.webp","text":`"Son especialmente hermosas por su forma
Pero con una gota descendiendo
Tu eres hermoso, pero sigue habiendo gotas de sangre de heridas bajando"`,"date":" — 08/20/2022"},{"url":"./imgs/IMG_6505.webp","text":`De nuevo encontrarme con tus hermosas flores me hace sonreír, así que estaré comenzando mi día con una sonrisa.
Debo admitirlo, tus regalos son sumamente hermosos, los adoro bastante.
Por mi parte, te deseo un excelente día. Que puedas descansar, hacer todo lo que te propongas y que seas feliz.`,"date":" — 08/21/2022"},{"url":"./imgs/IMG_6525.webp","text":`Me alegra de nuevo encontrarme que tu precioso regalo, más aún sabiendo que con ellos expresas lo que sientes sin miedo.
Yo por mi parte me siento feliz sabiendo que te encuentras en tu viaje, espero que puedas disfrutarlo mucho y conocer muchas cosas nuevas.
Te amo.`,"date":" — 08/22/2022"},{"url":"./imgs/IMG_6680.webp","text":`+ Oh, cariño. Adoro tus regalos, pero hoy es tu día. Hoy tú eres la que debe recibir regalos hermosos, estoy a tu servicio.
- ¡Que aceptes dije!
+ Está bien, las acepto, no me pegues.`,"date":" — 08/25/2022"},{"url":"./imgs/IMG_6742.webp","text":`Siempre y cuando sea un bonito recuerdo en tu memoria yo... Estaré feliz donde sea que esté.`,"date":" — 08/26/2022"},{"url":"./imgs/IMG_6899.webp","text":`Dos locos que ya no confiaban en el amor.
Solo querían divertirse.
Terminaron enamorados.`,"date":" — 08/29/2022"},{"url":"./imgs/IMG_7144.webp","text":`Qué lindo despertar para escucharte en VC.`,"date":" — 08/31/2022"},{"url":"./imgs/IMG_7350.webp","text":`Buenos días, corazón.
Qué manera de dar los buenos días más animada, me da la impresión de que estás de buen humor hoy.
Acepto tus hermosas flores al igual que acepto tu profundo amor. Iré a desayunar de inmediato.
Te deseo que tengas un buen día en clases hoy, cuídate mucho. Te amo.`,"date":"  — 09/02/2022"},{"url":"./imgs/IMG_8010.webp","text":`Buenos días, corazón.
Qué hermosas flores me traes hoy, rosas blancas que simbolizan pureza...
Unas hermosas flores como tú.`,"date":" — 09/11/2022"},{"url":"./imgs/IMG_9189.webp","text":`Yui, esas flores son lindas, pero ni con tanta belleza pueden superar lo hermoso que es este texto que me dedicas.

Me cuesta dejar de pensar que estoy siendo un problema para ustedes cuando todo parece un caos tan intenso, nunca fue mi intención hacerles perder el equilibrio sino hacerles sentir mi amor hasta donde tuviese que llegar.

Eres tan hermosa, tan romántico y llena de amor para entregar, hay tanto amor en ti que creo que a este mundo roto podrías alimentar y hacerlo crecer en un mundo lleno de cosas hermosas.

Lo que sea que haya pasado, es cosa del pasado ya, no tiene relevancia porque ya no volverá a afectar. Lo único que del pasado queda son los momentos hermosos que siempre voy a recordar, y esos son los que más vale la pena atesorar.`,"date":" — 03/02/2023"},{"url":"./imgs/IMG_9220.webp","text":`Siempre es tan placentero y sumamente lindo encontrarse con tus regalos.

Sin embargo temo decir que estás equivocada con lo del ser más bello, porque no hay nada más hermoso que tú cuando sonríes. Igual de mi parte te deseo un excelente día, que te vaya bien en clases y que tengan un día tranquilo todas.`,"date":" — 03/04/2023"},{"url":"./imgs/IMG_9346.webp","text":`Qué hermosa manera de despertar, encontrándose con un regalo tan hermoso como el que tú me das.
Recibo tus flores con un inmenso cariño y te envío un millón de besos, y la mejor de las suertes para su examen importante. Espero que les vaya muy bien el día de hoy, ¡te amo!`,"date":" — 03/07/2023"},{"url":"./imgs/IMG_2059.webp","text":`Buenos días, Yui cariño. Gracias por tus versos y tu poema a la fuerza del amor, y por esas flores hermosas que me entregas con tanto cariño.`,"date":" — 04/22/2023"}];

//CREACIÓN DE MÓDULOS

function setCartas() {
    for (let i = 0; i < cartas.length; i++) {
        $(juego.frente[i]).css("background-image",`url("${cartas[i].url}")`);
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function setButtons() {
    $(botoninit).click(function (){
        if(init){
            location.reload(true);
        }else{
            audios[0].play();
            audios[0].volume = 0;
            $(audios[0]).animate({volume:1},4000);
            $(tarjeta.all).slideToggle();
            $(botoninit).text("REINICIAR JUEGO");
            init = true;
        }
    });

    $(juego.botones).click(function (){
        if(init){
            cartasDestapadas++;
            if(cartasDestapadas == 1){
                cartaSel1 = $(this).attr("id");
                $(juego.frente[cartaSel1]).toggleClass("frontAnimation");
                $(juego.posterior[cartaSel1]).toggleClass("backAnimation");
                $(juego.botones[cartaSel1]).attr("disabled",true);

            }else if(cartasDestapadas == 2){
                cartaSel2 = $(this).attr("id");
                $(juego.frente[cartaSel2]).toggleClass("frontAnimation");
                $(juego.posterior[cartaSel2]).toggleClass("backAnimation");

                if($(juego.frente[cartaSel1]).css("background-image") == $(juego.frente[cartaSel2]).css("background-image")){
                    $(tarjeta.text).text(cartas[cartaSel2].text);
                    $(tarjeta.date).text(cartas[cartaSel2].date);
                    $(tarjeta.image).attr("src",cartas[cartaSel2].url);
                    $(juego.botones[cartaSel2]).attr("disabled",true);
                    $(tarjeta.all).delay(1200).slideToggle().delay(9800).slideToggle();
                    setTimeout(() =>{
                        cartasDestapadas = 0;
                        parejas++;
                        if(parejas == 18){
                            setTimeout(() =>{
                                $(audios[0]).animate({volume:0},3000);
                                $(".container").css("display","block");
                                setTimeout(() =>{
                                    audios[0].pause();
                                    audios[1].volume = 0;
                                    audios[1].play();
                                    $(audios[1]).animate({volume:1},6000);
                                    setTimeout(() =>{
                                        $(".container").css("opacity","1");
                                    },2000)
                                },3000)
                            },2000);
    
                        }
                    },10100);

                }else{
                    setTimeout(() =>{
                        $(juego.frente[cartaSel1]).toggleClass("frontAnimation");
                        $(juego.posterior[cartaSel1]).toggleClass("backAnimation");
                        $(juego.frente[cartaSel2]).toggleClass("frontAnimation");
                        $(juego.posterior[cartaSel2]).toggleClass("backAnimation");
                        $(juego.botones[cartaSel1]).attr("disabled",false);
                        $(juego.botones[cartaSel2]).attr("disabled",false);
                        cartasDestapadas = 0;
                    },2000);
                
                }
            }
        }
    });
}