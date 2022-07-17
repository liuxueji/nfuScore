import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: "",
    userid: "",
    sznj: "",
    zyId: "",
    yxId: "",
    xyId: ""

  },
  mutations: {
    // 将值传给state存储
    settoken(state, datas) {
      // 用户token
      state.token = datas.msg;
      // 用户id
      state.userid = datas.user.actualId;
    },
    setsz(state, datas) {
      state.sznj = datas.sznj;
      state.zyId = datas.zyId;
      state.yxId = datas.yxId;
      state.xyId = datas.xyId;
    }
  },
  actions: {},
  modules: {}
})
export default store