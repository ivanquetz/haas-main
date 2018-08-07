import Vue from 'vue'
import Ajv from 'ajv'
import axios from 'axios'
// import router from '../router'

const state = {
  mode: 'development',
  currentUser: {},
  currentView: {},
  currentLang: {},
  token: '',
  ajv: null,
  ui: {
    size: 'xs',
    ww: 1100,
    wh: 800,
    primary: '#0088cc',
    secondary: '#d0dfed',
    tertiary: '#555',
    neutral: '#E0E1E2',
    positive: '#21BA45',
    negative: '#DB2828',
    info: '#31CCEC',
    warning: '#F2C037',
    white: '#fff',
    black: '#000',
    hover: '#eee'
  }
}
const actions = {
}
const mutations = {
}
const getters = {
  _ajv: (state) => state.ajv,
  _currentUser: (state) => state.currentUser,
  _currentView: (state) => state.currentView,
  _currentLang: (state) => state.currentLang,
  _ui: (state) => state.ui,
  _items: (state) => state.items
}

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
}