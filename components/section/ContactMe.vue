<template>
    <section class="contact section">

        <div class="contact__main">
            <img src="../../static/image/contact/left.svg" alt="" class="contact__vector contact__vector--left">

            <div class="contact__body">
                <div class="contact__image"><img src="../../static/image/contact/man.png" alt=""></div>

                <form @submit.prevent="submitHandler" class="contact__form">
                    <div class="contact__form-title">CВЯЖИСЬ СО МНОЙ</div>

                    <div
                        class="contact__form-group"
                        :class="{invalid: ($v.name.$dirty && !$v.name.required || $v.name.$dirty && !$v.name.minLength)}">
                        <div class="contact__form-placeholder" :class="{active: placeholder.name}">Имя</div>

                        <input
                            @focus="focusHandler('name')"
                            @blur="blurHandler('name')"
                            v-model="name"
                            type="text"
                            class="contact__form-input">

                        <div v-if="($v.name.$dirty && !$v.name.required || $v.name.$dirty && !$v.name.minLength)" class="contact__form-error">
                            Минимальное количество символов {{ $v.name.$params.minLength.min }}
                        </div>
                    </div>

                    <div
                        class="contact__form-group"
                        :class="{invalid: ($v.contact.$dirty && !$v.contact.required || $v.contact.$dirty && !$v.contact.minLength)}">

                        <div class="contact__form-placeholder" :class="{active: placeholder.contact}">Как с вами можно связатся</div>

                        <input
                            @focus="focusHandler('contact')"
                            @blur="blurHandler('contact')"
                            v-model="contact"
                            type="text"
                            class="contact__form-input">

                        <div v-if="($v.contact.$dirty && !$v.contact.required || $v.contact.$dirty && !$v.contact.minLength)" class="contact__form-error">
                            Минимальное количество символов {{ $v.contact.$params.minLength.min }}
                        </div>
                    </div>

                    <div
                        class="contact__form-group"
                        :class="{invalid: ($v.message.$dirty && !$v.message.required || $v.message.$dirty && !$v.message.minLength)}">

                        <div class="contact__form-placeholder" :class="{active: placeholder.message}">Сообщение</div>

                        <textarea
                            @focus="focusHandler('message')"
                            @blur="blurHandler('message')"
                            v-model="message"
                            class="contact__form-input contact__form-input--textarea"></textarea>

                        <div v-if="($v.message.$dirty && !$v.message.required || $v.message.$dirty && !$v.message.minLength)" class="contact__form-error">
                            Минимальное количество символов {{ $v.message.$params.minLength.min }}
                        </div>

                        <div class="contact__counter">
                            <div class="contact__counter-title">Максимальное количество символов</div>

                            <div class="contact__counter-value">{{message.length}} <span>/ {{ textAreaMaxChar }}</span></div>
                        </div>
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
import {required, minLength} from 'vuelidate/lib/validators'

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
        },

        textAreaMaxChar: 200
    }),
    validations: {
        name: {required, minLength: minLength(3)},
        contact: {required, minLength: minLength(3)},
        message: {required, minLength: minLength(25)}
    },
    watch: {
        message() {
            this.message = this.message.length >= this.textAreaMaxChar
                ? this.message.substring(0, this.textAreaMaxChar)
                : this.message
        }
    },
    methods: {
        focusHandler(placeholder) {
            this.placeholder[placeholder] = true
        },
        blurHandler(placeholder) {
            this.placeholder[placeholder] = !!this[placeholder]
        },

        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }

            const data = {
                name: this.name,
                contact: this.contact,
                message: this.message
            }

            console.log(data)
        }
    }
}
</script>
