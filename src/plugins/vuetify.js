import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                // primary: "#4caf50",
                background: "#d8eefe",
                headline: "#094067",
                paragraph: "#5f6c7b",
                link: "#ef4565",
                cardBackground: "#fffffe",
                cardHeadline: "#094067",
                cardParagraph: "#5f6c7b",
            },
        },
    },
});
