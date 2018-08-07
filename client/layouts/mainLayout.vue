<template lang="pug">
div(:style=`{position: 'relative'}`).row.full-width.window-height.items-center.justify-center
  span popsters.online {{_ui.primary}}
</template>

<script>
import main from 'mixins/main'
export default {
  name: 'mainLayout',
  mixins: [main],
  components: {},
  data () {
    return {
      appLoading: true
    }
  },
  methods: {
  },
  beforeRouteEnter: (to, from, next) => {
    let token = localStorage.getItem('user-token')
    if (!token) {
      next(vm => {
        console.log('ml: no token!')
        // vm.$router.push('../login')
      })
    } else {
      console.log('ml: token OK')
      next()
    }
  },
  async mounted () {
    console.log('ml: mounted')
    await this._wait(3000)
    console.log('after wait')
  },
  computed: {
  }
}
</script>

<style lang="stylus">
</style>
