import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);
function checkDefaultLanguage() {
    let matched = null;
    let languages = Object.getOwnPropertyNames(loadLocaleMessages());
    languages.forEach(lang => {
        if (lang === navigator.language) {
            matched = lang;
        }
    });
    if (!matched) {
        languages.forEach(lang => {
            let languagePartials = navigator.language.split("-")[0];
            if (lang === languagePartials) {
                matched = lang;
            }
        });
    }
    if (!matched) {
        languages.forEach(lang => {
            let languagePartials = navigator.language.split("-")[0];
            if (lang.split("-")[0] === languagePartials) {
                matched = lang;
            }
        });
    }
    return matched;
}
// export const selectedLocale = checkDefaultLanguage() || "en";
export default new VueI18n({
    // locale: "en"
});
