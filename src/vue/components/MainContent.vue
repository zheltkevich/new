<template>
    <main class="main">
        <div class="container">
            <section class="about">
                <h1 class="about__title text2">
                    Template
                </h1>
                <p class="about__description text1">
                    Ready to go template for a frontend project easy launch
                </p>
            </section>
            <section class="cards">
                <router-link to="/">
                    Home
                </router-link>
                ||
                <router-link to="/about">
                    About
                </router-link>
                <h2 class="cards__title text2">
                    Contains:
                </h2>
                <div class="cards__wrapper surface-samples">
                    <article class="card surface2 rad-shadow">
                        <div class="card__logo-wrapper rad-shadow">
                            <img
                                class="card__logo"
                                src="@images/logo-pwa.svg"
                                alt="PWA logo">
                        </div>
                        <h3 class="card__title">
                            Progressive Web App
                        </h3>
                    </article>
                    <article class="card surface2 rad-shadow">
                        <div class="card__logo-wrapper rad-shadow">
                            <img
                                class="card__logo"
                                src="@images/logo-webpack.svg"
                                alt="Webpack logo">
                        </div>
                        <h3 class="card__title">
                            Webpack
                        </h3>
                    </article>
                    <article class="card surface2 rad-shadow">
                        <div class="card__logo-wrapper rad-shadow">
                            <img
                                class="card__logo"
                                src="@images/logo-eslint.svg"
                                alt="Eslint logo">
                        </div>
                        <h3 class="card__title">
                            Eslint
                        </h3>
                    </article>
                    <article class="card surface2 rad-shadow">
                        <div class="card__logo-wrapper rad-shadow">
                            <img
                                class="card__logo"
                                src="@images/logo-stylelint.svg"
                                alt="Stylelint logo">
                        </div>
                        <h3 class="card__title">
                            Stylelint
                        </h3>
                    </article>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainContent',
};
</script>
