App.NewController = Ember.Controller.extend({
  actions: {
    saveBook: function() {
      var controller = this
      this.get('model').save().then(function() {
        controller.transitionToRoute('/books/'+controller.get('model.id'))
      })
    }
  }
})

