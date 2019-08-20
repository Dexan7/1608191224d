import Vue from 'vue'
import App from './App.vue'
import * as fb from 'firebase'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBnibQT4HvS0KRujqueCPNpnYwuronjR1o',
      authDomain: 'test-case-3bd19.firebaseapp.com',
      databaseURL: 'https://test-case-3bd19.firebaseio.com',
      projectId: 'test-case-3bd19',
      storageBucket: 'test-case-3bd19.appspot.com',
      messagingSenderId: '454364379249'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
