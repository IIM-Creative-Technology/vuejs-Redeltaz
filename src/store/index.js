import { createStore } from 'vuex'

export default createStore({
  state: {
    listBlog: [{
      title: "coucou titre",
      metaTitle: "coucou metaTitre",
      metaDescription: "coucou metaDescription",
      content: "coucou content ",
      image: "",
      id: "0"
    }],
    listUser: [{
      email: 'admin',
      password: 'admin'
    },
    {
      email: 'lucas',
      password: 'lucas'
    }]
  },
  mutations: {
    INCREMENT_BLOG(state, post){
      let id = state.listBlog.length
      post.id = id
      state.listBlog.push(post) //On ajoute à l'array de post notre nouveau post
    },

    UPDATE_BLOG(state, payload){
      state.listBlog[payload.id] = payload.updatedPost //update d'un post en changeant ses valeurs par les nouvelles
    },

    DELETE_POST(state, post){
      state.listBlog.splice(state.listBlog.indexOf(post), 1) //On récupère l'index du post mit en paramètre pour pour pouvoir le supprimer de l'array
    },

    TRY_CONNECT(state, tryUser){
      let canConnect = true

      for(let i = 0; i < state.listUser.length; i++){
        if(state.listUser[i].email === tryUser.email){
          if(state.listUser[i].password === tryUser.password){ //verification de l'email et du mdp pour vérifier s'il est bien admin
            alert(`Bonjour ${state.listUser[i].email}, vous êtes connecté !`)
            localStorage.setItem('connectedUser', JSON.stringify(tryUser)) //Envois de donnée dans le localStorage pour simuler une session
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
        state.listUser.push(newUser) //Ajout d'un nouvel utilisateur à l'array d'utilisateurs existant
      }
    },

    TRY_LOGOUT(){
      localStorage.clear() //suppression des données dans le localStorage, on clear la session
      alert('Vous venez de vous déconnecter')
    }
  },
  actions: {
  },
  modules: {
  }
})
