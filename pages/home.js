var Home = {
    template:`
        <div class="container">
            <header class="top">
                <h1 class="top-title">Game News</h1>
            </header>

            <main class="content">
                <article>
                    <h2>Welcome to the best game news website on the internet!</h2>

                    <p>Within this site you will find reviews for popular video games. 
                        You will find links to guides and play-throughs, as well as 
                        written guides. You can also find out more about Game News in 
                        our About section. If you like this type of content and would 
                        like to join our newsletter, you can click on the sign up 
                        at the top of the screen so you never miss out on new Game 
                        News.
                    </p>
                </article>
            </main>

            <figure class="photo">
                <figcaption>The Latest Game News</figcaption>
                <router-link to="/skyrim">
                    <img src="/images/skyrim.jpg" alt="Photo of Skyrim title card" />
                </router-link>
            </figure>

            <figure>
                <figcaption>Gameplay of the Day</figcaption>
                <iframe 
                    width="831" 
                    height="467" 
                    src="https://www.youtube.com/embed/0E44DClsX5Q" 
                    itle="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </figure>
    
            <figure class="photo">
                <figcaption>More Featured Here</figcaption>
                <router-link to="/featured">
                    <img src="/images/pexels-john-petalcurin-4317157.jpg" alt="Photo by John Petalcurin from Pexels" />
                </router-link>
            </figure>
        </div>
    `
}