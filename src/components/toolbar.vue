<template>
    <v-ons-toolbar>
        <div class="left"><ons-back-button>Back</ons-back-button></div>
        <div class="right">
            <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
                <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
            </v-ons-toolbar-button>
        </div>
        <div class="center">{{ title }}</div>
    </v-ons-toolbar>
</template>

<script>
    export default {
        props: ['title'],
    }
</script>