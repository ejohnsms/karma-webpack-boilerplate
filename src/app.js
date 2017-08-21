'use strict'

export default class Picto {

  constructor(name) {
    this._name = name;
  }

  get Name(){
    return this._name;
  }

  set Name(value){
    this._name = value;
  }

  get Path(){
    return this._path;
  }

  set Path(value){
    this._path = value;
  }
}
