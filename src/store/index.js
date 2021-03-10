import { createStore } from 'vuex'

export default createStore({
  state: {
    listBlog: [],
    listUser: [{
      email: 'admin',
      password: 'admin',
      isConnected: false
    },
    {
      email: 'lucas',
      password: 'lucas',
      isConnected: false
    }]
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
    },

    TRY_CONNECT(state, tryUser){
      let canConnect = true

      for(let i = 0; i < state.listUser.length; i++){
        if(state.listUser[i].email === tryUser.email){
          if(state.listUser[i].password === tryUser.password){
            state.listUser[i].isConnected = true
            alert(`Bonjour ${state.listUser[i].email}, vous êtes connecté !`)
            localStorage.setItem('connectedUser', JSON.stringify(tryUser))
            canConnect = true
            break
          }else{
            alert('Vous avez écris le mauvais mot de passe !')
            canConnect = true
            break
          }
        }else{
          canConnect = false
        }
      }

      if(!canConnect){
        alert('Aucun compte n\'est enregistré à cet email')
      }
    },

    TRY_REGISTER(state, newUser){
      let canRegister = true

      state.listUser.forEach(user => {
        if(user.email === newUser.email){
          alert('Cet email est déjà prit !')
          canRegister = false
        }
      })

      if(canRegister){
        alert('Votre compte a bien été enregistré, vous pouvez maintenant vous connecter !')
        newUser.isConnected = false
        state.listUser.push(newUser)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
