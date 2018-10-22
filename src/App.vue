<template>
    <div id="app">
        <v-ons-splitter>
            <v-ons-splitter-side
                swipeable width="150px" collapse="" side="right"
                :open.sync="openSide"
            >
                <v-ons-page>
                    <v-ons-list>
                        <!-- Pages -->
                        <v-ons-list-item v-for="page in pages"
                            tappable modifier="chevron"
                            @click="togglePage(page)"
                        >
                            <div class="center">{{ page }}</div>
                        </v-ons-list-item>

                        <!-- Logout link -->
                        <v-ons-list-item
                            tappable modifier="chevron"
                            @click="logout"
                        >
                        <div class="center">Logout</div>
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
import registerPage from './pages/Register.vue';
import loginPage from './pages/Login.vue';
import properties from './pages/Properties.vue';
import myProperties from './pages/myProperties.vue';
import addProperties from './pages/addProperties.vue';

export default {
    name: 'app',
    data() {
        return {
            currentPage: 'home',
            pages: ['home', 'properties', 'addProperties', 'myProperties', 'register', 'login'],
            openSide: false
        };
    },
    components: {
        home: homePage,
        properties: properties,
        addProperties: addProperties,
        register: registerPage,
        login: loginPage,
        myProperties: myProperties
    },
    methods: {
        logout(){
            debugger;
        },
        togglePage(page){
            this.currentPage = page; this.openSide = false
        }
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
