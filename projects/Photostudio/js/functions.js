    var capaCarga = document.getElementById("capa");
    var secCambiante = document.getElementById("secc");
    var tituloCambiante = document.getElementById("titulo");

    capaCarga.style.opacity = "0%";


function cambioInicio(section){
    //capaCarga.style.opacity = "100%";
    tituloCambiante.innerText = "Inicio";
    secCambiante.innerHTML =`
        <section id="inicio">
            <article>
                <h1>Estamos aquí para capturar <span>Tus mejores memorias.</span> </h1>
                <h3>Photostudio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi tempora fugit quisquam nulla perferendis dignissimos odio maiores magni ipsum? At aperiam nulla nihil officia placeat ex aspernatur nam molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium libero iste culpa quasi dicta quod aut, rerum quisquam eos ut modi, expedita fugiat nam earum voluptatum! Molestias, architecto hic!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque eaque a reiciendis. Nobis eos voluptatibus iste, vel alias dignissimos quasi inventore illum tenetur fuga reiciendis molestias asperiores! Ipsum, excepturi?</p>
            </article>
            <article>
                <h1>Nuestros clientes</h1>
                <article>
                    <img class="clientes" src="./imgs/inicio/1czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXRlZC0yMzk0LnBuZw.webp" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates, quod alias neque illum rem eaque perferendis quasi blanditiis fugiat </p>
                </article>
                <article>
                    <img class="clientes" src="./imgs/inicio/2czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1wci1zMzEtdGVuLTA2NC1qb2IzMy5wbmc.webp" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates, quod alias neque illum rem eaque perferendis quasi blanditiis fugiat </p>
                </article>
                <article>
                    <img class="clientes" src="./imgs/inicio/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptates, quod alias neque illum rem eaque perferendis quasi blanditiis fugiat </p>
                </article>
            </article>
            <article><img src="./imgs/inicio/pexels-photo-1466845.webp" alt=""></article>
        </section>`
    //capaCarga.style.opacity = "0%";
}

function cambioPortafolio(section){
    //capaCarga.style.opacity = "100%";
    tituloCambiante.innerText = "Portafolio";
    secCambiante.innerHTML = `
    <section id="portafolio">
    <article>
        <div></div>
        <img src="./imgs/1nature-heid-talic-advanced-graduate.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/2the_dying_daylight_-_4016_x_6016.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/3canada-in-pictures-beautiful-places-to-photograph-peggys-cove-lighthouse.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/4grasssky.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/5wassar" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/6_102.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/7Havasu-falls.jpg" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/8photo-1514724390871-40d54bd0484d.jfif" alt="">
    </article>
    <article>
        <div></div>
        <img src="./imgs/9tumblr_m7oynl386H1qa7gx5o1_500.jpg" alt="">
    </article>
    </section>`
    /*secCambiante.onload = () =>{
        capaCarga.style.opacity = "0%";
    }*/
}