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
                <!-- <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component> -->

                <v-ons-navigator swipeable swipe-target-width="50px"
                    :page-stack="pageStack"
                    :pop-page="storePop"
                    :options="options"
                    @postpush="showPopTip"
                    :class="{ 'border-radius': borderRadius }"
                ></v-ons-navigator>

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

import { mapState } from 'vuex';

// import { mapMutations } from 'vuex';
// import { mapGetters } from 'vuex'

export default {
    name: 'app',
    components: {
        home: homePage,
        properties: properties,
        addProperties: addProperties,
        register: registerPage,
        login: loginPage,
        myProperties: myProperties
    },
    created(){
        // this.$store.commit('navigator/push', homePage);
    },
    data() {
        return {
            pages: ['home', 'properties', 'addProperties', 'myProperties', 'register', 'login'],
            openSide: false
        };
    },
    computed: {
        ...mapState('splitter', {
            currentPage: state => state.currentPage,
        }),
        pageStack() {
            return [homePage];
            // return this.$store.state.navigator.stack;
        },
        options() {
            return this.$store.state.navigator.options;
        },
        borderRadius() {
            return new URL(window.location).searchParams.get('borderradius') !== null;
        }
    },
    methods: {
        logout(){
            debugger;
        },
        togglePage(page){
            this.currentPage = page; this.openSide = false
        },
        storePop() {
            this.$store.commit('navigator/pop');
        },
        showPopTip() {
            debugger;
            // this.$ons.notification.toast({
            //     message: 'Try swipe-to-pop from left side!',
            //     buttonLabel: 'Shut up!',
            //     timeout: 2000
            // });
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
