import { createStore } from "vuex"; 

export default createStore({
  state: {
    toggleClass: "toggle-right",
    toggleLangFr: "fr-inactive",
    toggleLangEn: "en-active",
    tritog: "tritog-toggle-top"
  },
  mutations: {
    toggle(state, {togRight, togLeft, togFrAct, togFrInact, togEnAct, togEnInact}){

      if(state.toggleClass === togRight){
        state.toggleClass = togLeft;
        state.toggleLangFr = togFrAct;
        state.toggleLangEn = togEnInact;
      }else{
        state.toggleClass = togRight;
        state.toggleLangFr = togFrInact;
        state.toggleLangEn = togEnAct;
      }
    },
    toggle3(state, {toggleTop, toggleLeft, toggleRight}){
      if(state.tritog === toggleTop){
        state.tritog = toggleRight;  
      }else if(state.tritog === toggleRight){
        state.tritog = toggleLeft;
      }else{
        state.tritog = toggleTop;
      }
    }
  },
  actions: {},
  modules: {},
  getters:{
    toggleClass(state) {
      return state.toggleClass
    },
    toggleLangFr(state){
      return state.toggleLangFr
    },
    toggleLangEn(state) {
      return state.toggleLangEn
    },
    tritog(state) {
      return state.tritog
    }
  }
});
