<template>
    <section class="contact section">

        <div class="contact__main">
            <img src="../../static/image/contact/left.svg" alt="" class="contact__vector contact__vector--left">

            <div class="contact__body">
                <div class="contact__image">
                    <img src="../../static/image/contact/man.png" alt="">
                </div>

                <form @submit.prevent="submitHandler" class="contact__form">
                    <div class="contact__form-title">CВЯЖИСЬ СО МНОЙ</div>

                    <div class="contact__form-group">
                        <div class="contact__form-placeholder" :class="{active: placeholder.name}">Имя</div>

                        <input
                            @focus="focusHandler('name')"
                            @blur="blurHandler('name')"
                            v-model="name"
                            type="text"
                            class="contact__form-input">

                        <div class="contact__form-error">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                    </div>

                    <div class="contact__form-group">
                        <div class="contact__form-placeholder" :class="{active: placeholder.contact}">Как с вами можно связатся</div>

                        <input
                            @focus="focusHandler('contact')"
                            @blur="blurHandler('contact')"
                            v-model="contact"
                            type="text"
                            class="contact__form-input">

                        <div class="contact__form-error">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                    </div>

                    <div class="contact__form-group">
                        <div class="contact__form-placeholder" :class="{active: placeholder.message}">Сообщение</div>

                        <textarea
                            @focus="focusHandler('message')"
                            @blur="blurHandler('message')"
                            v-model="message"
                            class="contact__form-input contact__form-input--textarea"></textarea>

                        <div class="contact__form-error">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                    </div>

                    <button type="submit" class="contact__form-send">Отправить</button>
                </form>
            </div>

            <img src="../../static/image/contact/right.svg" alt="" class="contact__vector contact__vector--right">
        </div>

        <Footer/>
    </section>
</template>

<script>
import Footer from "../Footer"

export default {
    name: 'ContactMe',
    components: {Footer},
    data: () => ({
        name: '',
        contact: '',
        message: '',

        placeholder: {
            name: false,
            contact: false,
            message: false,
        }
    }),
    created() {

    },
    methods: {
        focusHandler(placeholder) {
            this.placeholder[placeholder] = true
        },
        blurHandler(placeholder) {
            this.placeholder[placeholder] = !!this[placeholder]
        },

        submitHandler() {

        }
    }
}
</script>
