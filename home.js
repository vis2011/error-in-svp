class homePage{
constructor(){
    this.loginButton = createButton("login")
    this.signUpButton = createButton("sign up")
}

setPosition(){
    this.loginButton.position(width/2 -100,height/2);
    this.signUpButton.position(width/2,height/2);
}
setElementsStyle() {
    this.loginButton.class("customButton");
    this.signUpButton.class("custombutton");
  }

  hide() {
    this.loginButton.hide();
    this.signUpButton.hide();
  }

  display() {
    this.setPosition();
    this.setElementsStyle();
  }
}