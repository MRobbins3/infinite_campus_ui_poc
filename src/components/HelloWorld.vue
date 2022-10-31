
<template>
    <div id="app">
        <!-- You may not want your app bar here, because your v-content is in App.vue.
        You'd likely want a dedicated component that is referenced in App.vue or on every page.-->
        <v-app-bar>
            <v-app-bar-title>
                {{ msg }}
            </v-app-bar-title>
        </v-app-bar>
        <v-container>
            <v-btn
                type="button"
                @click="() => { count++ }"
            >
                Count is: {{ count }}
            </v-btn>
            <v-card
                class="my-2"
                max-width="500"
            >
                <v-row class="pa-2">
                    <v-col>
                        <h2> Hello I am a card with a row and a column. </h2>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
    props: {
        msg: {
            type: String,
            required: true,
            default: "Hello World!"
        }
    },
    setup() {
        const count: Ref<number> = ref(0);
        return {
            count
        };
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {

    }
});

</script>

<style scoped>
</style>
