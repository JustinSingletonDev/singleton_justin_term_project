var Featured = {
    template:`
        <div class="container">
            <header class="top">
                <h1 class="top-title">Featured</h1>
            </header>

            <figure class="photo-link">
                <figcaption>Skyrim Game Review</figcaption>
                <router-link to="/skyrim">
                    <img src="https://github.com/JustinSingletonDev/singleton_justin_term_project/blob/main/images/skyrim.jpg?raw=true" alt="Photo of Skyrim title card">
                </router-link>
            </figure>

            <figure class="photo-link">
                <figcaption>Kingdom Hearts Guide to the Ultima Weapon</figcaption>
                <router-link to="/kingdomh">
                    <img src="https://github.com/JustinSingletonDev/singleton_justin_term_project/blob/main/images/kingdomh.jpg?raw=true" alt="Photo of Kingdom Hearts title card">
                </router-link>
            </figure>

            <figure class="photo-link">
                <figcaption>Dead by Daylight Game Review</figcaption>
                <router-link to="/dbd">
                    <img src="https://github.com/JustinSingletonDev/singleton_justin_term_project/blob/main/images/dbd.jpg?raw=true" alt="Photo of Dead by Daylight title card">
                </router-link>
            </figure>
        </div>
    `
}