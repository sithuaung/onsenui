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
        <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>

        <div id='map' class="high-300"></div>

        <section style="padding: 8px">
            <ons-button modifier="large" style="margin-bottom: 8px">Sales</ons-button>
            <ons-button modifier="large">Rent</ons-button>
        </section>
    </v-ons-page>
</template>

<script>
    import customToolbar from '../components/toolbar.vue';
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

    export default {
        props: ['toggleMenu'],
        components: { customToolbar },
        mounted(){
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2l0aHVhdW5nLW15YW5tYXIiLCJhIjoiY2puanR6MTU3MDYyaTN2bzVhemhrejFqZCJ9.f1lQQ9xVboTfhJy7wJ9-WQ';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/sithuaung-myanmar/cjnjv7q3u7kzy2rq8amr6nmou',
                center: [96.1561825, 16.8379469],
                // 16.8379469,96.1561825
                zoom: 12.0
            });
        }
    }
</script>