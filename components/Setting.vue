<template>
    <section class="setting">
        <img @click="panelHandler('open')" src="../static/image/setting.svg" alt="" class="setting__btn">

        <aside class="setting__panel" :class="{'setting__panel--open': open}">
            <div @click="panelHandler('close')" class="setting__panel-close"></div>

            <div class="setting__group">
                <div class="setting__group-title">Настройки</div>

                <div class="setting__group-setting">
                    <div class="setting__group-label">Посекционая навигация</div>

                    <div class="setting__group-check">
                        <input v-model="sliderSection" id="slider" type="checkbox">
                        <label for="slider"></label>
                    </div>
                </div>

                <div class="setting__group-setting">
                    <div class="setting__group-label">Анимация на 1 секции</div>

                    <div class="setting__group-check">
                        <input v-model="animation" id="animation" type="checkbox">
                        <label for="animation"></label>
                    </div>
                </div>

                <div class="setting__group-setting">
                    <div class="setting__group-label">Звуки на сайте</div>

                    <div class="setting__group-check">
                        <input v-model="sound" id="sound" type="checkbox">
                        <label for="sound"></label>
                    </div>
                </div>
            </div>

            <div class="setting__group">
                <div class="setting__group-title">Громкость</div>

                <div class="setting__group-range">
                    <input v-model="volume" id="range" type="range" min="0" max="100" step="1">

                    <label for="range">{{ volume }}%</label>
                </div>
            </div>

            <div class="setting__group">
                <div class="setting__group-title">Язык</div>

                <div class="setting__locale">
                    <div class="setting__locale-this"
                         @click="localeSelect = !localeSelect"
                         :class="{'isOpen': localeSelect}">{{ localeLabel }}</div>

                    <ul class="setting__locale-list" :class="{'isOpen': localeSelect}">
                        <li v-for="loc in locales"
                            :key="loc.value"
                            class="setting__locale-item"
                            @click="locale = loc.value"
                            :class="{active: locale === loc.value}">

                            {{ loc.label }}
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    </section>
</template>

<script>
export default {
    name: 'Setting',
    data: () => ({
        open: false,
        localeSelect: false,

        sound: false,
        animation: false,
        sliderSection: false,

        volume: 100,
        locale: 'ru-Ru'
    }),
    mounted() {
        const {sliderSection, animation, sound} = this.$store.getters["store/getSetting"]

        this.sound = sound
        this.animation = animation
        this.sliderSection = sliderSection

        document.body.addEventListener('click', e => {
            const target = e.target

            if (!target.closest('.setting')) this.open = false
            if (!target.closest('.setting__locale')) this.localeSelect = false
        })
    },
    watch: {
        locale() {
            this.localeSelect = false
            this.$store.commit('store/setLocale', this.locale)
        }
    },
    computed: {
        locales() {
            return this.$store.getters["store/getLocales"]
        },
        localeLabel() {
            return this.locales.filter(local => local.value === this.locale)[0].label
        },
    },
    methods: {
        panelHandler(action) {
            switch (action) {
                case 'open':
                    this.open = true
                    document.body.classList.add('lock')
                    break

                case 'close':
                    this.open = false
                    this.localeSelect = false
                    document.body.classList.remove('lock')
                    break
            }
        }
    }
}
</script>
