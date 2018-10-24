<style>
    .high-300 {
        height: 80%;
    }

    #map canvas{ position:absolute; top:0; left:0; width:100%; }

    .m-b-8 {
        margin-bottom: 8px;
    }
</style>

<template>
    <v-ons-page>
        <custom-toolbar title="Home"></custom-toolbar>

        <div id='map' class="high-300"></div>

        <section style="padding: 8px">
            <ons-button modifier="large" style="margin-bottom: 8px" @click="changePage">Sales</ons-button>
            <ons-button modifier="large" @click="changePage">Rent</ons-button>
        </section>
    </v-ons-page>
</template>

<script>
    import properties from './Properties.vue';
    import customToolbar from '../components/toolbar.vue';
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

    export default {
        components: { customToolbar },
        mounted(){
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2l0aHVhdW5nLW15YW5tYXIiLCJhIjoiY2puanR6MTU3MDYyaTN2bzVhemhrejFqZCJ9.f1lQQ9xVboTfhJy7wJ9-WQ';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/sithuaung-myanmar/cjnjv7q3u7kzy2rq8amr6nmou',
                center: [96.1561825, 16.8379469],
                zoom: 12.0
            });
        },
        methods: {
            changePage(){
                this.$store.commit('navigator/push', properties);
            }
        }
    }
</script>