/* eslint-disable */
export const state = () => ({
    projects: [],

    whoIsMe: '',

    settings: {},

    whyMe: {}
})

export const mutations = {
    setAllProject(state, body) {
        state.projects = body
    },

    setSetting(state, body) {
        state.settings = body
    },

    setWhoIsMe(state, body) {
        state.whoIsMe = body
    },

    setWhyMe(state, body) {
        state.whyMe = body
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
        const setting = {
            sliderPosition: 1
        }

        commit("setSetting", setting)
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
    }
}

export const getters = {
    getProject(state) {
        return state.projects
    },

    getSlidedPosition(state) {
        return state.settings.sliderPosition
    },

    getWhoIsMe(state) {
        return state.whoIsMe
    },

    getWhyMe(state) {
        return state.whyMe
    }
}

