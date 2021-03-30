new Vue({
  el:"#vue-app",
  data: {
    name: 'Hama',
    job: 'Ninja'
  },
  methods: {
    greet: function(time){

      return  " good " + time + ' ' + this.name
    }
  }
});
