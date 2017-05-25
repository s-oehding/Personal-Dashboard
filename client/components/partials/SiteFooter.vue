<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row justify-content-sm-center">
              <div class="col flex-md-column">
                <b-button-group>
                  <b-button variant="outline-primary"><i class="fa fa-twitter"></i></b-button>
                  <b-button variant="outline-primary"><i class="fa fa-facebook"></i></b-button>
                  <b-button variant="outline-primary"><i class="fa fa-github"></i></b-button>
                </b-button-group>
              </div>
              <div class="flex-md-column-reverse">
                <b-button-group>
                  <b-button variant="outline-primary"><i class="fa fa-lock"></i> Datenschutz</b-button>
                  <b-button variant="outline-primary"><i class="fa fa-shield"></i> Impressum</b-button>
                </b-button-group>
              </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'site-footer',
  props: [],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="sass">
$brand-primary: turquoise;
$gray-medium: #d2d2d2;
$gray-dark: #292b2c;

$sidebarWidth: 15%;
$header-height: 55px;
$footer-height: 45px;
.footer {
  background-color: $gray-dark;
  color: $brand-primary;
  a, span {
    color: $brand-primary;
  }
}
</style>