/* eslint-disable */
export const state = () => ({
    projects: [],

    settings: {}
})

export const mutations = {
    setAllProject(state, body) {
        state.projects = body
    },

    setSetting(state, body) {
        state.settings = body
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
    }
}

export const getters = {
    getProject(state) {
        return state.projects
    },

    getSlidedPosition(state) {
        return state.settings.sliderPosition
    }
}

