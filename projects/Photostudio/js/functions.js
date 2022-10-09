var capaCarga = document.getElementById("capa");
var secCambiante = document.getElementById("secc");
var tituloCambiante = document.getElementById("titulo");

function cambioInicio(){
    tituloCambiante.innerText = "Inicio";
    secCambiante.innerHTML =`
        <section id="inicio">
            <article>
                <h1>Estamos aquí para capturar <span>Tus mejores memorias.</span> </h1>
                <h3>Photostudio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi tempora fugit quisquam nulla perferendis dignissimos odio maiores magni ipsum? At aperiam nulla nihil officia placeat ex aspernatur nam molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium libero iste culpa quasi dicta quod aut, rerum quisquam eos ut modi, expedita fugiat nam earum voluptatum! Molestias, architecto hic!</p>
            </article>
            <article id="artClients">
                <h1>Nuestros clientes</h1>
                <article>
                    <img class="clientes" src="./imgs/inicio/1czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvczg5LXRlZC0yMzk0LnBuZw.webp" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptees. </p>
                </article>
                <article>
                    <img class="clientes" src="./imgs/inicio/2czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvay1wci1zMzEtdGVuLTA2NC1qb2IzMy5wbmc.webp" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptees. </p>
                </article>
                <article>
                    <img class="clientes" src="./imgs/inicio/free-png-happy-black-person-png-images-transparent-black-man-thumbs-up-11563648491mkncpzrjrf.png" alt="">
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit voluptees. </p>
                </article>
            </article>
            <article><img src="./imgs/inicio/pexels-photo-1466845.webp" alt=""></article>
        </section>`
        secCambiante.style.display = "block";
}

function cambioPortafolio(){
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
}

function cambioBlog(){
    tituloCambiante.innerText = "Blog";
    secCambiante.innerHTML = `
    <section id="blog">
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>1 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>2 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>3 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>4 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>5 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>6 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>7 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>8 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
                <article>
                    <div>
                        <img src="./imgs/blog/camera-trends.jpg" alt="">
                        <h3>9 Lorem</h3>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vero repellendus esse sequi maiores quaerat vitae illo et culpa debitis tempore rem quia provident pariatur, totam ad laboriosam cumque sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime cum harum doloribus expedita, voluptatum consequuntur illum veritatis tempore deserunt odio, consectetur provident, atque iste at ex! Dignissimos laborum officia commodi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque voluptatum perferendis dolorum saepe expedita harum inventore rerum? Amet, ex quo? Recusandae ipsum inventore blanditiis odit a earum, aperiam beatae.
                        </p>
                        <button class="btnVer">VER MÁS</button>
                    </div>
                </article>
            </section>
            <div id="artBlogExp"></div>`
    let script = document.createElement(`script`);
    script.src = "./js/functionsBlog.js";
    script.async = false;
    secCambiante.append(script);

    secCambiante.style.display = "flex";
}