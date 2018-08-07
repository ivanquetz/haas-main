<template lang="pug">
router-view
</template>

<script>
import mainLayout from 'layouts/mainLayout'
export default {
  name: 'App',
  components: {mainLayout},
  data () {
    return {
      name: 'oleg'
    }
  },
  mounted () {
    console.log('ssss')
  }
}
</script>

