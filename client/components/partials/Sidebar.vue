<template>
  <aside class="aside">
    <div class="logo"></div>
    <nav>
      <ul class="menu">
        <li title="Home">
          <router-link to="/" class="home">#</router-link>
        </li>
        <li title="Finance">
          <router-link to="/finance" class="finance">#</router-link>
        </li>
        <li title="Search">
          <router-link to="/search" class="search">#</router-link>
        </li>
      </ul>
    </nav>
    <nav class="user-nav">
      <div v-if="authUser.user.email" class="user-image">
        <gravatar :email="authUser.user.email"></gravatar>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
    authUser () {
      return this.$store.getters.authUser
    }
  }
}
</script>

<style lang="sass">
@import '../assets/scss/utility/mixins';
aside {
  background: #292b2c;
  color: rgba(255, 255, 255, 0.5);
  width: 60px;
  height: 100vh;
  float: left;
  display: inline-block;
  @include dropShadow();
  z-index: 10;
  .user-nav {
    padding: .5rem;
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 1rem;
    .user-image {
      width: 50px;
      height: 50px;
      border: 2px solid #606c76;
      border-radius: 50%;
    }
  }
  .menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 999;
    li {
        position:relative;
        list-style-type: none;
        margin: 0;
        &:after {
          content: attr(title);
          position: absolute;
          left: -100%;
          top: 0;
          height: 60px;
          box-sizing: border-box;
          text-transform: uppercase;
          background: #606c76;
          color: #fff;
          padding: 20px;
          font-size: 20px;
          line-height: 20px;
          transition: all 0.3s ease-in-out;
          visibility: hidden;
          opacity: 0;
          z-index: -1;
          @include dropShadow();
        }

        &:hover:after {
          visibility: visible;
          opacity: 1;
          left: 60px;
        }

        a {
          display: block;
          height: 60px;
          width:60px;
          text-indent: -500rem;
          line-height: 60px;
          text-align: center;
          // color: #ff5c62;
          background: #292b2c;
          position: relative;
          // border-bottom: 1px solid #ffe2e3;
          transition: all 0.3s ease-in-out;

          &::before {
            font-family: FontAwesome;
            speak: none;
            text-indent: 0rem;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 1.4rem;
          }

          &:hover{
            background: #9b4dca;
            color: #fff;
          }

          &.router-link-active {
            background: #9b4dca;
            color: #fff;

            &:after{
                position: absolute;
                left: 60px;
                top: 0;
                content:"";
                border: 0px solid transparent;
                border-left-color: #9b4dca;
                border-width: 30px .75rem;
                @include dropShadow();
                z-index: -1;
            }
          }

          //Menu Icons
          &.search:before {
            content: "\f002";
          }
          &.archive:before {
            content: "\f187";
          }
          &.pencil:before {
            content: "\f040";
          }
          &.contact:before {
            content: "\f003";
          }
          &.about:before {
            content: "\f007";
          }
          &.home:before {
            content: "\f015";
          }
          &.finance:before {
            content: "\f153";
          }
        }
    }
  }

  // @media screen and (max-height: 34em){
  //   .menu li{
  //     font-size:70%;
  //   }
  // }
}
</style>
