// helps ide understand what .vue files are
declare module '*.vue' {
    import { defineComponent } from 'vue';
    export default defineComponent;
}