# El juego comienza aquí.

label start:

    play music "audio/roomsong.mp3"

    pause 2.0
    
    # Muestra una imagen de fondo: Aquí se usa un marcador de posición por
    # defecto. Es posible añadir un archivo en el directorio 'images' con el
    # nombre "bg room.png" or "bg room.jpg" para que se muestre aquí.

    scene escena1 with dissolve

    "Te encuentras en tu hogar tras haber terminado tu rutina de la mañana, siendo medio día hasta ahora es un dia tranquilo y tienes un sentimiento de paz que invade tu cuerpo desde el momento en el que te levantaste de la cama."

    "Estás dispuesta a disfrutar de este día, porque sabes que va a ser especial, lo sientes por el brillo del sol a través de las ventanas y la suave brisa que acaricia tu piel mientras te relajas en la sala observando tu decoración."

    "Escuchas la puerta abrirse mientras estás distraida en tus pensamientos, unos pasos se acercan a ti mientras una figura familiar invade tu campo de visión."
    
    # Muestra un personaje: Se usa un marcador de posición. Es posible
    # reemplazarlo añadiendo un archivo llamado "eileen happy.png" al directorio
    # 'images'.

    show slendy 1 with moveinright
    pause 0.5

    # Presenta las líneas del diálogo.

    Slendy "Buenos días, querida. Luces tan hermosa en esta mañana, hasta recién levantada tu belleza no deja de brillar."

    menu:
        "Le recuerdas que es medio día.":
            Yui "Buenos días, cielo. Aunque ya no es tan temprano, estamos a horas de medio día."
            Slendy "Oh, cierto. Tienes razón, el tiempo se me pasó rápido y no me di cuenta, pero eso no significa que no luzcas hermosa el día de hoy. ¿Cómo estás, amor?"
        "Le recibes con cariño.":
            Yui "Buenos días, mi amado. Es tan agradable tenerte de vuelta, haces este día aún más hermoso."
            Slendy "Como si no fuera suficientemente hermoso con tu presencia, cariño. Esa sonrisita que tienes es suficiente para hacer sentir envidia al sol. ¿Cómo estás, amor?"

    hide slendy 1 with dissolve

    "Ambos pasan un breve momento conversando, como siempre Slendy te trata de manera gentil y cariñosa, coqueteando un poco de vez en cuando."

    "Conversan un rato para saber lo que han estado haciendo en la mañana, él te comenta de su trabajo y que hoy se esforzó bastante para salir temprano, hace un par de chistes sobre lamerle las botas al jefe."

    "Como siempre él se esfuerza por sacarte algunas dulces risas, pero este día lo notas con más entusiasmo. Se acerca a ti para abrazarte, besando varias veces tu mejilla con suavidad."

    show slendy 1 with dissolve

    Slendy "Ya que ambos estamos libres... ¿Te parece si hacemos el almuerzo juntos, comemos y luego damos un paseo por la ciudad? Tengo un interesante lugar en mente al que podríamos ir."

    menu:
        "Aceptas, pero le dices que él tiene que cocinar.":
            Yui "Me parece un excelente plan pero... ¿qué tal si cocinas tú el almuerzo y yo me quedo mirándote sentada mirándote cocinar con ese lindo delantal de nuestra cocina? De seguro te queda divino..."
            Slendy "Jajaja, querida, de que me queda divino el delantal no hay duda eso te lo aseguro. Me parece bien entonces, te prepararé uno de mis platillos más especiales."
            call cocina1 from _call_cocina1
        "Aceptas con gusto, pero le dices que él será el postre.":
            Yui "Por supuesto que sí, mi cielo. Me encanta la idea de cocinar junto a ti... pero espero que estés listo para ser el postre luego del almuerzo."
            Slendy "Mi Yui, no es un misterio que yo siempre estoy listo para ser tu postre, tu merienda y tu bocadillo de la noche."
            call cocina2 from _call_cocina2

    show slendy 1 with dissolve

    Slendy "Bueno... Ya estamos listos, sin hambre y cargados de energía para dar un paseo juntos por la ciudad. Caminaremos un poco antes de llevarte al lugar especial que tengo en mente, quiero disfrutar cada minuto de este día contigo."

    "Estás de acuerdo con aquella idea, y decides tomarte un tiempo para tomarte un poco de tiempo para arreglar tu cabello, quieres salir lo más linda posible junto a tu amado. Él te espera pacientemente, mirándote con una sonrisa."

    Slendy "Ahora luces aún más hermosa, cariño. No podría sentirme más afortunado de tener a una mujer tan bella que me ama. Ven, toma mi brazo, ya tengo la ruta ideal en mente."

    "Sin pensarlo dos veces, rodeaste el brazo de Slendy con el tuyo, como si lo estuvieras abrazando para no dejarlo ir, y ambos salieron de casa como una joven pareja enamorada."

    hide slendy 1 with moveoutright
    stop music fadeout 3.0
    pause 2.5
    scene escena2 with dissolve
    play music "audio/streetsong.mp3"

    "Ambos van caminando por la ciudad sin soltarse en ningún momento, caminando y observando las tiendas que había en la cercanía, saludando a las personas conocidas que veían pasar cerca."

    "Durante el paseo estuvieron conversando sobre el futuro, explorando y fantaseando con las metas que podían tener para la vida que quieren construir juntos."

    Slendy "¿Dónde te gustaría que viviéramos juntos? Yo he pensado que podríamos tener una casita en un campo, cerca de un lago con un inmenso terreno para que puedas plantar todas las flores que tengas."

    Slendy "Pero también he pensado en una casa en los suburbios, donde podemos tener algunos vecinos que puedan apreciar tus flores y que nuestros hijos puedan jugar con los hijos de ellos..."

    "Por un momento observas que se pone algo nervioso al hablar de hijos, pero trata de ocultarlo cambiando rápidamente de tema, proponiendo otra idea."

    Slendy "Y también podemos rentar o comprar un apartamento, viviríamos en la gran ciudad y podríamos ir fácilmente a los supermercados, centros comerciales, cines, teatros, todo quedaría mucho más cerca y podrías tener tus flores en macetas."

    Slendy "¿Cuál de las ideas te gusta más, corazón?"

    menu:
        "Me gusta más la idea del apartamento.":
            show apartamento with dissolve
            Yui "Oh, me gusta la idea de vivir en un apartamento en la gran ciudad. De seguro las vistas desde arriba serían preciosas, todas las luces en la noche y también poder ver las estrellas desde lo alto..."

            Slendy "Yo estoy viendo una estrella ahora mismo, está caminando a mi lado sujetando mi brazo..."

            Yui "Y tú me das ganas de brillar cada vez que estoy a tu lado."

            "Slendy te dio varios besos en la cara mientras caminaban, siendo tan cariñoso como siempre lo es contigo, sin importarle que hubiera tanta gente en la calle viéndolos."
        "Me gusta más la idea de los suburbios.":
            show suburbios with dissolve
            Yui "Hmm... Me gusta la idea de los suburbios, la verdad es que sería lindo formar parte de una comunidad amigable y segura... sobretodo para nuestros hijos, ¿verdad, mi amor?"

            "Dijiste con un tono un poco pícaro, observando de forma atenta como Slendy se volvía algo más nervioso. Se rascaba la nuca y reía un poco antes de responderte."

            Slendy "Sí... Claro, querida. Sería lo mejor para nuestros niños."

            Yui "Es adorable que te siga poniendo nervioso pensar en tener hijos conmigo."

            Slendy "No sé si sería buen padre jajajaja..."

            Yui "Oh, estoy segura de que serías el mejor padre."

            "Ante tu apoyo, Slendy dejó de sentirte nervioso y ahora se notaba más contento con la idea."
        "Me gusta más la idea del campo.":
            show casalago with dissolve
            Yui "Me parece tan hermosa la idea de vivir en un campo contigo, ambos alejados de todo, siendo solo nosotros dos disfrutando de nosotros y de nuestro amor."

            Slendy "No sabes lo mucho que me encantaría estar junto a ti en un lugar así, la calma que tendríamos para disfrutarnos mucho más, podríamos incluso bañarnos en nuestro lago todos los días."

            Yui "Podría plantar todas las flores que quiera en nuestro terreno, sería un jardin tan grande y bonito, y con tu ayuda sé que será hermoso."

            "No puedes evitar tener una gran sonrisa en el rostro mientras te imaginas viviendo lejos de todo con la persona que amas, en un lugar donde solo existen ustedes dos."

    "Ambos conversan un poco más del tema, llegando a fantasear incluso sobre cómo sería la decoración del interior de su hogar, siendo tú la que más ideas aportas en ese tema ya que Slendy no sabe mucho sobre decorar."

    Slendy "Bien, bien, queda claro que tú serías la encargada de la decoración, pero... Me gustaría que tuvieramos una mascota, tal vez un perro, o quizás un gato, incluso puede que un conejo. ¿Cuál mascota te gustaría tener?"

    show campo with dissolve
    hide apartamento with dissolve
    hide casalago with dissolve
    hide suburbios with dissolve

    menu:
        "Me gustaría tener un perro.":
            show perro with dissolve
            Slendy "Me encantan los perros, así que me parece una excelente idea. De hecho, desde pequeño siempre he tenido perros, podría decir que es mi mascota favorita."

            Yui "Entonces con más razón me gustaría tener un perrito bonito que podamos cuidar juntos con mucho amor."
        "Me gustaría tener un gato.":
            show gato with dissolve
            Slendy "Realmente no soy un fan de los gatos, pero no me molestaría tener uno. La verdad es que son animales interesantes por lo raros que pueden llegar a ser."

            Yui "Un lindo y curioso gatito juguetón del que tendremos que estar pendiente para que no destruya los muebles."

            Slendy "En realidad no dañan los muebles, solo parece que los rasguñan pero en realidad retraen las garras en lugar de desgarrar los muebles."

            Yui "¿En serio? A veces parece que les gusta destruir los muebles."
        "Me gustaría tener un conejo.":
            show conejo with dissolve
            Slendy "Yo nunca he tenido un conejo, pero admito que lucen bonitos. No estaría mal tener uno para experimentar cómo sería cuidar de una criatura tan adorable."

            Yui "Bueno, yo cuido de ti y me parece de las experiencias más bonitas, mi amor."

            Slendy "Ah, pero yo no como solo zanahorias, yo como muchas cosas."

            Yui "Los conejos tampoco comen solo zanahorias, mi cielo."

            Slendy "¿Lo dices en serio?... Toda mi vida ha sido una mentira."
        "¿Por qué no los tres?":
            show perro with dissolve
            show gato with dissolve
            show conejo with dissolve
            Slendy "Wow, eso sería... un poco desafiante, pero me gustan los desafíos así que estoy dispuesto a aceptar tres mascotas distintas en nuestro hogar. De hecho, podríamos tener todas las que quieras."

            Yui "Jajaja, ya veremos si no pierdes la cabeza tratando de cuidar a tantos animales a la vez."

            Slendy "Bueno... apenas puedo cuidar de mí mismo, pero puedo intentar cuidar de los animales por ti, porque quiero verte contentita."

            Yui "Sería tan lindo verte cuidando de esos animalitos como si fueran nuestros hijos..."

    "Y así, estuvieron un largo rato más hablando sobre aquellas fantasías del futuro, como dos adolescentes profundamente enamorados, embriagados por aquel hermoso sentimiento que comparten."

    "Pasaron horas cuando se dieron cuenta de que ya habían recorrido muchas calles de aquella ciudad, y Slendy lucía emocionado en este punto, al parecer sabía que se estaban acercando al destino que tenía planeado."
    
    scene exteriorbar with dissolve

    "Notas que te lleva a un lugar familiar, la fachada se te hace bastante conocida, pero aún no logras reconocer del todo a dónde te había llevado."

    "Desde afuera parecía el exterior de un viejo bar, en el lugar no había gente en las afueras y a pesar de parecer abandonado el lugar seguía estando algo limpio, sin tanta basura como normalmente acumulan los sitios desolados."

    show slendy 1 with moveinleft

    Slendy "Por tu rostro puedo darme cuenta de que no recuerdas bien este lugar, pero puedo asegurarte que es un sitio bastante especial. Ven, sígueme. Vamos adentro y lo entenderás todo."

    hide slendy 1 with moveoutright

    "Entonces Slendy se adelantó a tomarte de la mano con entusiasmo, se le notaba bastante emocionado por llevarte al interior de aquél viejo bar."

    scene interiorbar with dissolve
    
    "Estando adentro ves un bar que ha sido un poco descuidado, el piso tiene tablas rotas y hay muchos detalles en el lugar que son evidencia de que estuvo abandonado por un tiempo."

    Slendy "Sé que no luce muy bien ahora mismo... pero este es el bar en el que solíamos estar. ¿Lo recuerdas?"

    "Al escucharle decir eso, te sientes transportada al pasado con las memorias que invaden tu mente, haciéndote revivir viejos recuerdos junto a él."

    show slendy b 1 with dissolve

    Slendy "Recuerdo que... al principio estaba perdido, sin saber muy bien qué hacía en un lugar así. Solo pensaba en encontrar una forma de pasar mi tiempo libre rápidamente para no pensar en los problemas de la vida."

    show yui b 1 with dissolve

    Slendy "Entonces un día, simplemente apareciste y no pude evitar poner mis ojos en ti. Principalmente porque le dije a Des que le enseñaría a ligar, ¿recuerdas? Jajaja..."

    hide slendy b 1 with dissolve
    show slendy b 2 with dissolve

    Slendy "Decidí acercarme a ti al principio con una fachada de confianza en mí mismo, dispuesto a demostrarme que era capaz de acercarme a una mujer y conversar con ella. Poco a poco me fui acercando más a ti con mis coqueteos y mi humor raro."

    Slendy "Poco a poco fui sintiendo más confianza en mí mismo, viendo que no era incómodo para ti mi forma de coquetear y de bromear, sintiendo que contigo podría llegar a fluir libremente."

    hide slendy b 2 with dissolve
    hide yui b 1 with dissolve
    show yui b 2 with dissolve

    Slendy "Y por esa libertad de fluir... me fui sintiendo poco a poco más atraído hacia ti, esos coqueteos juguetones poco a poco se iban convirtiendo en coqueteos que de verdad surgían de mi corazón."

    hide yui b 2 with dissolve
    show yui x slend 1 with dissolve

    Slendy "No podía evitarlo, ya estaba comenzando a desarrollar mis sentimientos hacia ti por la forma en la que recibías mi amor sin pensar mal de mí, lo aceptabas como si fuera algo verdaderamente precioso."

    Slendy "Cada vez quería estar más y más cerca de ti, y seguirte dando y expresando mi cariño y mi amor con mis coqueteos, a pesar de que sabía que no era el único que buscaba ganarse tu corazón, no me quise dar por vencido."

    hide yui x slend 1 with dissolve
    show yui x slend 2 with dissolve

    Slendy "No me interesaba que hubieran más coqueteando contigo, podrían haber sido un millon de simpáticos detrás de ti y aún así yo hubiera seguido entregando todo de mí."

    Slendy "Hasta que no te viera rechazarme directamente, no me detendría, y solamente querría estar cerca de ti cada vez que pudiera... solamente querría darte tanto cariño y amor, incluso con la intensidad que tenía en ese entonces."

    hide yui x slend 2 with dissolve
    show yui x slend 3 with dissolve

    Slendy "Yo estaba dispuesto a todo para conquistar a mi barista, incluso si eso significaba ser un macho alfa que siempre estuviera ahí para ella, para ayudar a descargar su lado caliente."

    Slendy "Siempre que tú estuvieras feliz y yo pudiera notar que te sentías bien con mis tratos, sin hacerte sentir como un objeto, para mí era más que suficiente... Sin embargo, no todo el tiempo se puede estar bien."

    hide yui x slend 3 with dissolve
    show yui x slend noche 1 with dissolve

    Slendy "Recuerdo aquél día donde dijiste que te sentías decaída, yo sentí tanta curiosidad por saber qué te había hecho sentir mal. Sin embargo, bien es cierto que no me gusta invadir la curiosidad de las personas..."

    Slendy "Solamente fui lo más tranquilizante y encantador que pude contigo hasta que, finalmente, decidiste acercarte a mí para contarme aquello que te estaba afligiendo."

    Slendy "Y fue con aquello, aquél pequeño momento de cercanía que tuviste hacia mí, el que dio comienzo a..."

    stop music fadeout 3.0
    scene noche with dissolve
    hide yui x slend noche 1 with dissolve
    pause 2
    play music "audio/lanochemas.mp3"
    pause 2
    show yui x slend noche 2 with dissolve

    Slendy "La noche más linda del mundo, aquella que he pasado yo contigo. Una noche donde nuestros corazones se abrieron para dejar fluir todo lo que sentíamos, permitiendo conocernos mejor."

    Slendy "Aquella preciosa noche que había comenzado siendo tan fría y triste poco a poco se fue tornando de lo más cálida y hermosa posible, mientras nos volvíamos más y más cercanos."

    Slendy "Tu sonrisa y la mía se dijeron 'Te quiero' y brotaron las frases poco tradicionales en una mujer soltera y un hombre libre."

    Slendy "Y esa fue la noche más linda del mundo, aunque nos durara tan solo un segundo... más no me arrepiento porque aquél momento lo llevo grabado en mi pensamiento."

    hide yui x slend noche 2 with dissolve
    show yui x slend noche 3 with dissolve

    Slendy "La noche donde decidimos que seríamos la estrella del otro, con el siguiente juramento:"

    Slendy "'Mientras Mistik y Slendy se divierten a su manera, por dentro Paola y Aron sabrán que son la luz que ilumina el camino del otro; durante el tiempo que la vida les permita y con esperanza de poder crear hermosos recuerdos memorables.'"

    Slendy "A día de hoy, sigo queriendo cumplir ese juramento con todas las ganas del mundo, pues mi amor sigue siendo tan fuerte como el de ese día."

    Slendy "Recuerdo que... me habías dicho que tu corazón era débil, pero estaba lleno de amor. Hoy en día he procurado cuidar lo mejor que pueda de ese corazón, porque algún día quiero verlo ser fuerte y latiendo con tanta energía."

    hide yui x slend 3 with dissolve
    scene yui x slend flores with dissolve

    Slendy "En la mañana del siguiente día me sentí tan unido a ti, desperté con la primera de tus hermosas cartas con aquellas flores hermosas que decoraban tu mensaje de buenos días."

    Slendy "A partir de allí, comenzamos a emprender el viaje del amor, disfrutándonos y conociéndonos mejor con toda la paciencia y el cariño que dos jovenes amantes se pudieran tener."

    Slendy "Hoy en día..."

    scene interiorbar with dissolve
    show yuixslendfinale2 with dissolve

    Slendy "Hoy en día no podría sentirme más agradecido de haber conocido a una persona tan hermosa y dulce como lo eres tú, con un corazón tan noble y precioso que estoy dispuesto a cuidar con mi vida."

    Slendy "Pero el día de hoy... el día de hoy se trata del cumpleaños de aquella hermosa persona que hoy tengo el placer de tener a mi lado, acompañándome y bendiciéndome con su dulce amor."

    Slendy "Feliz cumpleaños, mi amada Yui. Fuiste mi primer amor en discord, mi primer amor del sistema y te agradezco tanto por todos los momentos que has compartido conmigo."

    Slendy "Gracias a ti es posible que yo siga aquí con ustedes, dando lo mejor de mi para cuidarlas como si fueran una rosa hermosa y delicada, con espinas, pero cuyas espinas no me asustan en lo más mínimo."

    Slendy "Feliz cumpleaños Yui! Te amo con todo mi corazón, y siempre voy a hacerlo porque eres tan especial que ni siquera amándote toda esta vida sería suficiente, tendría que amarte también en todas las vidas que siguen por la eternidad."

    Slendy "Te deseo un feliz y maravilloso día, que puedas disfrutarlo de la mejor manera y que hoy sientas que tu corazón rebosa de alegría."
    
    "Mi primera novela visual, quería hacer algo especial para ti. Cuando hagas click una vez más, se terminará la novela."

    pause 10.0

    # Finaliza el juego:

    return

label cocina1:
    hide slendy 1 with dissolve
    "Entonces Slendy decide tomarte de forma delicada por la mano para llevarte a la cocina, apartando una silla para que te sientes cerca de él mientras el se prepara colocándose un delantal de cocina."

    "Tras un rato de ver a Slendy siendo juguetón con la comida y deteniéndose para coquetearte mientras se quemaba el almuerzo, finalmente llegó el momento donde pudieron sentarse a comer uno cerca del otro."

    "La comida... digamos que estaba aceptable, si ignorabas el hecho de que quemó algo del arroz y las tajadas que estaba haciendo para el pabellón. Sin embargo, fue un almuerzo disfrutable y divertido con sus bromas."
    return

label cocina2:
    hide slendy 1 with dissolve
    "Entonces Slendy decide tomarte de forma delicada por la mano para llevarte a la cocina, ayudándote luego a colocarte el delantal para después buscar los ingredientes necesarios para el almuerzo."

    "Pasaron un rato divertido ambos, cocinando mientras jugueteaban y coqueteaban de manera amorosa, si no fuera por la atención que pusiste en la comida posiblemente Slendy hubiera terminado quemando el almuerzo."

    "La comida se veía de maravilla, con tu ayuda lograron hacer un pabellón que lucía bastante delicioso, ambos se sentaron sintiéndose orgullosos del manjar que habían hecho y se deleitaron con el sabor de aquella comida hecha con amor."

    "Luego del almuerzo, lo prometido tenía que cumplirse; Slendy se acercó a ti para tomarte de las mejillas comenzando a darte un beso dulce y romántico, que poco a poco se volvía uno cargado de pasión."

    "Sentiste su lengua jugar con la tuya por un momento mientras ambos cerraban sus ojos para disfrutar más del beso, pusiste tus manos sobre el pecho de Slendy mientras él te apegaba a su cuerpo sujetándote de la cintura."

    "Luego de un rato de aquél beso tan profundo e intenso, ambos se separaron con la respiración agitada, mirándose a las caras antes de soltar risas por ese beso que disfrutaron tanto."
    return

