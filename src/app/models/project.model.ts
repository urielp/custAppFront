class Project {

  private _id;
  private _projectName;
  private _address;
  private _picture;
  private _units;
  private _loan;
  // private files;
  private _size;
  private _status;
  private _estimatedYield;


  constructor() {
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get projectName() {
    return this._projectName;
  }

  set projectName(value) {
    this._projectName = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  get picture() {
    return this._picture;
  }

  set picture(value) {
    this._picture = value;
  }

  get units() {
    return this._units;
  }

  set units(value) {
    this._units = value;
  }

  get loan() {
    return this._loan;
  }

  set loan(value) {
    this._loan = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get estimatedYield() {
    return this._estimatedYield;
  }

  set estimatedYield(value) {
    this._estimatedYield = value;
  }

}

export default Project;
