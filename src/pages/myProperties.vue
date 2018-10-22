<template>
    <v-ons-page>
        <custom-toolbar title="My properties" :action="toggleMenu"></custom-toolbar>
        <p style="text-align: center">
            My properties here
        </p>
    </v-ons-page>
</template>

<script>
    import customToolbar from '../components/toolbar.vue';

    export default {
        props: ['toggleMenu'],
        components: { customToolbar }
    }
</script>