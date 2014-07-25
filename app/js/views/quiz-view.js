var QuizView = Backbone.View.extend({
  el:"#quizzy",
  initialize: function(options){
    console.log(options);

  },

  render: function(){
    this.collection.each(this.addQuestion, this);
  },

  addQuestion: function(question){
    var questionView = new QuestionView({
      model: question
    });
    this.$el.append(questionView.render().el)
  }
});
