import { createStore } from 'vuex'

export default createStore({
  state: {
    aboutMe:null,
    education:null,
    project:null,
    skill:null,
    workExp:null,
    testimonial:null
    
  },
  getters: {
    //get used to preview code
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setProject(state,payload){
      state.project = payload
    },
    setSkill(state,payload){
      state.skill = payload
    },
    setWorkExp(state,payload){
      state.workexp = payload
    },
    setTestimonial(state,payload){
      state.testimonial = payload
    }

  },
  actions: { 
     async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://demilee06.github.io/First-API/Data/data.json')
      let data = await fetchedInfo.json()
      //dependant on the jso file
      let {aboutMe,education,project,skill,workExp,testimonial} = data
      console.log(data);
      commit("setAboutMe",aboutMe)
      commit("setEducation",education)
      commit("setProject",project)
      commit("setSkill",skill)
      commit("setWorkExp",workExp)
      commit("setTestimonial",testimonial)
    }
  },
  modules: {
    //to separate and organize your code
  }
})
 