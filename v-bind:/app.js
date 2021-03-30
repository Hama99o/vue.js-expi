new Vue({
  el:"#vue-app",
  data: {
    name: 'Hama',
    job: 'Ninja',
    website: "https//www.hellojam.com",
    websiteTag: '<a href="https//www.hellojam.com"> click here </a>'
  },
  methods: {
    greet: function(time){

      return  " good " + time + ' ' + this.name
    }
  }
});
