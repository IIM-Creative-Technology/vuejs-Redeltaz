import { createStore } from 'vuex'

export default createStore({
  state: {
    listBlog: [{
      title: 'titre',
      metaTitle: 'meta Titre',
      metaDescription: 'meta Description',
      content: 'contenu',
      image: 'image'
    }],
  },
  mutations: {
    INCREMENT_BLOG(state, post){
      let id = state.listBlog.length
      post.id = id
      state.listBlog.push(post)
    },

    UPDATE_BLOG(state, payload){
      state.listBlog[payload.id] = payload.updatedPost
    },

    DELETE_POST(state, post){
      state.listBlog.splice(state.listBlog.indexOf(post), 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
