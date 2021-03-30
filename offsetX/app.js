new Vue({
  el:"#vue-app",
  data: {
    age: 26,
    x:0,
    y:0
  },
  methods: {
    add: function(inc){
      this.age += inc
    },
    sub: function(dec){
      this.age -= dec
    },
      methodXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
      }
  }
});
