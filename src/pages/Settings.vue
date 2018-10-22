<template>
    <v-ons-page>
        <custom-toolbar title="Settings" :action="toggleMenu"></custom-toolbar>
        <p style="text-align: center">
          Change the settings.
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