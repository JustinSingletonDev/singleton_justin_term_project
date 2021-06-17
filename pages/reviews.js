var Reviews = {
    template:`
        <div class="container">
            <header class="top">
                <h1 class="top-title">Reviews</h1>
            </header>

            <figure class="photo-link">
                <figcaption>Skyrim Game Review</figcaption>
                <router-link to="/skyrim">
                    <img src="./images/skyrim.jpg" alt="Photo of Skyrim title card">
                </router-link>
            </figure>

            <figure class="photo-link">
                <figcaption>Dead by Daylight Game Review</figcaption>
                <router-link to="/dbd">
                    <img src="./images/dbd.jpg" alt="Photo of Dead by Daylight title card">
                </router-link>
            </figure>
        </div>
    `
}