new Vue({
  el:"#vue-app",
  data: {
    available: false,
    nearby: false

  },
  methods: {


  },
  computed: {
    compclasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
