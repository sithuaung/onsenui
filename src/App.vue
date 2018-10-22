<template>
    <div id="app">
        <v-ons-splitter>
            <v-ons-splitter-side
                swipeable width="150px" collapse="" side="right"
                :open.sync="openSide"
            >
                <v-ons-page>
                    <v-ons-list>
                        <v-ons-list-item v-for="page in pages"
                            tappable modifier="chevron"
                            @click="currentPage = page; openSide = false"
                        >
                        <div class="center">{{ page }}</div>
                      </v-ons-list-item>
                    </v-ons-list>
                </v-ons-page>
            </v-ons-splitter-side>

            <v-ons-splitter-content>
                <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </div>
</template>

<script>
import homePage from './pages/Home.vue';
import newsPage from './pages/News.vue';
import settingsPage from './pages/Settings.vue';

export default {
    name: 'app',
    data() {
        return {
            currentPage: 'home',
            pages: ['home', 'news', 'settings'],
            openSide: false
        };
    },
    components: {
        home: homePage,
        news: newsPage,
        settings: settingsPage,
    }
}   
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
