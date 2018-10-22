<template>
    <v-ons-page>
        <custom-toolbar title="Login" :action="toggleMenu"></custom-toolbar>
        <p style="text-align: center">
            Login here
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