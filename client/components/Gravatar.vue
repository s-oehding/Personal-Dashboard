<template>
  <div class="gravatar-img">
    <img :src="url" alt="avatar">
  </div>
</template>

<style lang="sass">
  .gravatar-img {
    display:inline-block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    img{
      -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    }

  }
</style>

<script>
  import md5 from 'md5'

  export default {
    props: {
      email: {         // user's profile email
        type: String
      },
      default: {      // default picture
        type: String,
        default: 'mm' // Displays a shape of someone
      },
      size: {         // Size of the image
        default: 80   // Default size : 80 (squarre shape)
      }
    },
    data () {
      return {
        endpoint: 'http://www.gravatar.com/avatar/'
      }
    },
    computed: {
      url () {
        let hash = md5(this.email.trim())
        let size = '?s=' + this.size
        let defPicture = '&d=' + this.default

        if (this.default === 'gravatar') {
          defPicture = ''
        }

        // Génère une URL --> 'http://www.gravatar.com/avatar/hashToutMoche?s=80&d=mm'
        return this.endpoint + hash + size + defPicture
      }
    }
  }
</script>