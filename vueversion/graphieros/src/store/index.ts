import { createStore } from "vuex";

export default createStore({
  state: {
    toggleClass: "toggle-right",
    toggleLangFr: "fr-inactive",
    toggleLangEn: "en-active"
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
    }
  }
});
