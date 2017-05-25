<template>
    <div class="preloader">
      <div class="loader"></div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'preloader',
  props: [],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass">
$brand-primary: gray;
$sidebarWidth: 15%;
$header-height: 55px;
$footer-height: 45px;

.preloader {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 229, 238, 0.2);
  border-right: 1.1em solid rgba(0, 229, 238, 0.2);
  border-bottom: 1.1em solid rgba(0, 229, 238, 0.2);
  border-left: 1.1em solid $brand-primary;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.5s infinite linear;
  animation: load8 1.5s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


  .await{
    opacity: 1;
    -webkit-animation: pulse 1.5s infinite;
    -moz-animation: pulse 1.5s infinite;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-webkit-keyframes pulse{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-moz-keyframes pulse{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }

</style>