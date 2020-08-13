module.exports = class Animal {
  sound = null;
  constructor(sound) {
    if (this.constructor === Animal) throw new Error('Abstract classes cant be instantiated.');
    this.setSound(sound);
  }

  setSound(sound){
    if (!sound) throw new Error('Sound must be defined'); 
    this.sound = sound;
  }

  getSound(){
    return this.sound;
  }

  speak(text) {
    return(text.split(' ').map(word => (word.concat( ' ').concat(this.sound))).join(' '));
  }

};