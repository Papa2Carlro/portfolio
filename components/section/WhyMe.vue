<template>
    <section class="why_me section" :class="className">
        <div class="why_me__info">
            <div class="why_me__info-title">почему именно я</div>

            <div class="why_me__info-text">{{ text }}</div>

            <div class="why_me__contacts">
                <div class="why_me__contacts-title">Contacts</div>

                <ul class="why_me__contacts-list">
                    <li v-for="(contact, index) in contacts" :key="index" class="why_me__contacts-item">
                        <div class="why_me__contacts-name">{{ contact.title }}:</div>

                        <a :href="contact.link" class="why_me__contacts-value">{{ contact.value }}</a>
                    </li>
                </ul>
            </div>

            <div class="why_me__skills">
                <div class="why_me__skills-title">Skills</div>

                <ul class="why_me__skills-list">
                    <li v-for="(skill, index) in skills" :key="index" class="why_me__skills-item">
                        <img src="../../static/image/why_me/circle.png" alt="" class="why_me__skills-circle">

                        <div class="why_me__skills-value">{{ skill }}</div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="why_me__image">
            <img src="../../static/image/why_me/vector.svg" alt="" class="why_me__image-vector">
            <img src="../../static/image/why_me/laptop.png" alt="" class="why_me__image-laptop">
        </div>
    </section>
</template>

<script>
export default {
    name: 'WhyMe',
    props: ['className'],
    data: () => ({
        text: '',

        skills: [],
        contacts: [],

        slideActive: 4,
    }),
    created() {
        this.$store.dispatch("store/getWhyMe")

        const {text, contacts, skills} = this.$store.getters["store/getWhyMe"]

        this.text = text
        this.skills = skills
        this.contacts = contacts
    }
}
</script>
