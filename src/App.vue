<template>
    <div id="app">
        <v-ons-splitter>
            <v-ons-splitter-side
                swipeable width="150px" collapse="" side="right"
                :open.sync="isOpen"
            >
                <v-ons-page>
                    <v-ons-list>
                        <!-- Pages -->
                        <v-ons-list-item v-for="page in pages"
                            tappable modifier="chevron"
                            @click="togglePage(page.component)"
                        >
                            <div class="center">{{ page.label }}</div>
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
import home from './pages/Home.vue';
import properties from './pages/Properties.vue';
import myProperties from './pages/myProperties.vue';
import addProperties from './pages/addProperties.vue';
import register from './pages/Register.vue';
import login from './pages/Login.vue';

export default {
    name: 'app',
    beforeCreate() {
        this.$store.commit('navigator/push', home);
    },
    data() {
        return {
            pages: [
                {
                    component: home,
                    label: 'Home',
                    desc: 'Home page'
                },
                {
                    component: properties,
                    label: 'Properties',
                    desc: 'Properties page'
                },
                {
                    component: myProperties,
                    label: 'My properties',
                    desc: 'My properties page'
                },
                {
                    component: addProperties,
                    label: 'Add properties',
                    desc: 'Add properties page'
                },
                {
                    component: register,
                    label: 'Register',
                    desc: 'Register page'
                },
                {
                    component: login,
                    label: 'Login',
                    desc: 'Login page'
                },
            ]
        };
    },
    computed: {
        pageStack() {
            return this.$store.state.navigator.stack;
        },
        options() {
            return this.$store.state.navigator.options;
        },
        borderRadius() {
            return new URL(window.location).searchParams.get('borderradius') !== null;
        },
        isOpen: {
            get() {
                return this.$store.state.splitter.open;
            },
            set(newValue) {
                this.$store.commit('splitter/toggle', newValue)
            }
        }
    },
    methods: {
        logout(){
            debugger;
        },
        togglePage(page){
            this.$store.commit('navigator/push', page);
            this.$store.commit('splitter/toggle');
        },
        storePop() {
            this.$store.commit('navigator/pop');
        },
        showPopTip() {
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
