/* eslint-disable */
export const state = () => ({
  posts: [],
})

export const mutations = {
  setAllPost(state, body) {
    state.posts = body
  },
  collectCategory(state) {
    const category = []

    state.posts.map(post => category.push(post.category))
    const filterCategory = [...new Set(category)]

    filterCategory.map(label => state.category.push({label}))
  },
  setPagination(state, category) {
    if (category === 'all') {
      state.visible = _.chunk(state.posts, 8)
    } else {
      const filter = state.posts.filter(post => post.category.toLowerCase() === category)
      state.visible = _.chunk(filter, 8)
    }
  },
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
  // }
}

export const getters = {
  getPosts(state) {
    return state.visible
  }
}
