var app = new Vue({
    el: '#myApps',
    data: {
      'name': 'Hanie',
      'food_item' : [ 'apple', 'pear', 'orange'],
      'message' : 'type your name here'

    },

    methods: {
        buttonClick: function(){
            alert ("Hello "+this.message) ;
        },

        greet: function(){
            return'Good Morning'
        }
    }
  })
