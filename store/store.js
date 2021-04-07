import _ from 'lodash'

export const state = () => ({
    projects: [],

    whoIsMe: '',

    sliderPosition: null,

    locale: 'ru-Ru',
    locales: [
        {
            label: 'Русский',
            value: 'ru-Ru'
        },
        {
            label: 'Українська',
            value: 'uk-Ua'
        },
        {
            label: 'English',
            value: 'en-En'
        }
    ],

    settings: {
        sliderSection: true,
        animation: true,
        sound: true
    },

    whyMe: {},

    skills: []
})

export const mutations = {
    setAllProject(state, body) {
        state.projects = body
    },

    setSliderPosition(state, body) {
        state.sliderPosition = body
    },

    changeSetting(state, {setting, body}) {
        state.settings[setting] = body
    },

    setWhoIsMe(state, body) {
        state.whoIsMe = body
    },

    setWhyMe(state, body) {
        state.whyMe = body
    },

    setSkills(state, body) {
        const length = Math.ceil(body.length / 2)
        const list = []

        body.map((value, index) => list.push({index: index + 1, value}))
        state.skills = _.chunk(list, length)
    },

    setLocale(state, locale) {
        state.locale = locale
    }
}

export const actions = {
    // async setPosts({commit}) {
    //   await this.$axios.get('/api/post/all')
    //     .then(res => {
    //       if (res.data.ok) {
    //
    //         commit('setAllPost', res.data.body.reverse())
    //       } else {
    //         console.log(res.data.msg)
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // },
    async getProject({commit}) {
        const data = [
            {
                image: '/uploads/slide1.png',
                links: {
                    link: '',
                    more: '',
                    github: 'asd',
                },
                title: 'Project 1',
                description: 'Donec sed nisi enim. Donec fermentum rutrum convallis. Quisque lobortis nisl quis vestibulum venenatis. Mauris ac nisl velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida leo id felis rhoncus venenatis. In ut nisl massa. Sed sagittis condimentum rhoncus. Proin pharetra vitae urna in iaculis. Nam ut enim vitae ligula efficitur hendrerit. Suspendisse ornare nibh quis eros aliquet, ultricies vestibulum leo dignissim. Duis quis sapien ac mi eleifend finibus. Phasellus aliquam ac dui ac malesuada. Sed ornare risus finibus justo malesuada interdum.'
            },
            {
                image: '/uploads/slide1.png',
                links: {
                    link: 'asd',
                    github: '',
                    more: '',
                },
                title: 'Project 2',
                description: 'Donec sed nisi enim. Donec fermentum rutrum convallis. Quisque lobortis nisl quis vestibulum venenatis. Mauris ac nisl velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida leo id felis rhoncus venenatis. In ut nisl massa. Sed sagittis condimentum rhoncus. Proin pharetra vitae urna in iaculis. Nam ut enim vitae ligula efficitur hendrerit. Suspendisse ornare nibh quis eros aliquet, ultricies vestibulum leo dignissim. Duis quis sapien ac mi eleifend finibus. Phasellus aliquam ac dui ac malesuada. Sed ornare risus finibus justo malesuada interdum.'
            },
            {
                image: '/uploads/slide1.png',
                links: {
                    link: '',
                    github: '',
                    more: 'asd',
                },
                title: 'Project 3',
                description: 'Donec sed nisi enim. Donec fermentum rutrum convallis. Quisque lobortis nisl quis vestibulum venenatis. Mauris ac nisl velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida leo id felis rhoncus venenatis. In ut nisl massa. Sed sagittis condimentum rhoncus. Proin pharetra vitae urna in iaculis. Nam ut enim vitae ligula efficitur hendrerit. Suspendisse ornare nibh quis eros aliquet, ultricies vestibulum leo dignissim. Duis quis sapien ac mi eleifend finibus. Phasellus aliquam ac dui ac malesuada. Sed ornare risus finibus justo malesuada interdum.'
            }
        ]

        commit('setAllProject', data)
    },

    getSetting({commit}) {
        const sliderPosition = 1

        commit("setSliderPosition", sliderPosition)
    },

    getWhoMe({commit}) {
        const text = 'Donec sed nisi enim. Donec fermentum rutrum convallis. Quisque lobortis nisl quis vestibulum venenatis. Mauris ac nisl velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida leo id felis rhoncus venenatis. In ut nisl massa. Sed sagittis condimentum rhoncus. Proin pharetra vitae urna in iaculis. Nam ut enim vitae ligula efficitur hendrerit. Suspendisse ornare nibh quis eros aliquet, ultricies vestibulum leo dignissim. Duis quis sapien ac mi eleifend finibus. Phasellus aliquam ac dui ac malesuada. Sed ornare risus finibus justo malesuada interdum.'

        commit("setWhoIsMe", text)
    },

    getWhyMe({commit}) {
        const text = 'Donec sed nisi enim. Donec fermentum rutrum convallis. Quisque lobortis nisl quis vestibulum venenatis. Mauris ac nisl velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam gravida leo id felis rhoncus venenatis. In ut nisl massa. Sed sagittis condimentum rhoncus. Proin pharetra vitae urna in iaculis. Nam ut enim vitae ligula efficitur hendrerit. Suspendisse ornare nibh quis eros aliquet, ultricies vestibulum leo dignissim. Duis quis sapien ac mi eleifend finibus. Phasellus aliquam ac dui ac malesuada. Sed ornare risus finibus justo malesuada interdum.'
        const contacts = [
            {
                title: 'Phone',
                value: '+380677126286',
                link: 'tel:+380677126286'
            },
            {
                title: 'Email',
                value: 'priymak615@gmail.com',
                link: `mailto:priymak615@gmail.com`
            },
            {
                title: 'GitHub',
                value: 'Papa2Carlo',
                link: 'https://github.com/Papa2Carlro'
            },
            {
                title: 'Telegram',
                value: '@Papa2Carlo',
                link: 'https://t.me/Papa2Carlo'
            }
        ]
        const skills = ['VueJs', 'Scss', 'NodeJs', 'Git', 'Express']

        commit("setWhyMe", {text, contacts, skills})
    },

    getSkills({commit}) {
        const data = [
            'Lorem dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing',
            'Lorem ipsum sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur',
            'Lorem ipsum sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, ',
            'Lorem dolor amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit consectetur adipisicing elit'
        ]

        commit('setSkills', data)
    }
}

export const getters = {
    getProject(state) {
        return state.projects
    },

    getSlidedPosition(state) {
        return state.sliderPosition
    },

    getWhoIsMe(state) {
        return state.whoIsMe
    },

    getWhyMe(state) {
        return state.whyMe
    },

    getSkills(state) {
        return state.skills
    },

    getSetting(state) {
        return state.settings
    },

    getLocale(state) {
        return state.locale
    },

    getLocales(state) {
        return state.locales
    }
}

