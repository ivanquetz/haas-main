import { mapGetters } from 'vuex'
const mixin = {
  props: [],
  data () {
    return {
    }
  },
  methods: {
    _wait (ms) {
      return new Promise(resolve => setTimeout(() => {
        resolve()
      }, ms))
    }
  },
  mounted () {
    console.log('mixin main mounted!')
  },
  computed: {
    ...mapGetters(['_ajv', '_ui', '_currentUser', '_currentLang', '_currentLang'])
  }
}
export default mixin
