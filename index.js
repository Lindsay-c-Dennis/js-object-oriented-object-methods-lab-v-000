function  BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homestate;
  this.training = training;
  this.veto = function() {
    console.log('No, I must disagree');
  };
}