<template>
    <li @click="switchLanguage('en')">English</li>
    <li @click="switchLanguage('km')">ខ្មែរ</li>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core"
import i18n from "@/i18n";

export default defineComponent({
    name: 'LanguageSwitcher',
    setup(){

        const switchLanguage = (lang: String) => {
            i18n.global.locale = lang
        }
        return { switchLanguage }
    }
})
</script>