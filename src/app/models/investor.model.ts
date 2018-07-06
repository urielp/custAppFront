class Investor {

  public _id: string;
  private _firstName: string;
  private _lastName: string;
  private _cellPhoneNumber: string;
  private _officePhoneNumber: string;
  private _address: string;
  private _email: string;
  private _birthDate: Date;
  private picture: string;
  private _company: string;
  private commentsTest: [Object];
  private _role: string;
  private _rating: number;
  private _joinDate: Date;
  private _rank: number;
  private _recruiter: string;

  //
  // constructor(_id: string , firstName: string, lastName: string, cellPhoneNumber: string,
  //             officePhoneNumber: string, address: string, email: string,
  //             birthDate: Date, picture: string, company: string, commentsTest: [any],
  //             role: string, joinDate: Date , rank: number) {
  //   this._id = _id;
  //   this._firstName = firstName;
  //   this._lastName = lastName;
  //   this.cellPhoneNumber = cellPhoneNumber;
  //   this.officePhoneNumber = officePhoneNumber;
  //   this.address = address;
  //   this.email = email;
  //   this.birthDate = birthDate;
  //   this.picture = picture;
  //   this.company = company;
  //   this._commentsTest = commentsTest;
  //   this.role = role;
  //   this.joinDate = joinDate;
  //   this.rank = rank;
  //
  // }
constructor() {}
   get comments(): [Object] {
    return this.commentsTest;
  }
  set comments(commentsTest: [Object]) {
    this.commentsTest = commentsTest;
  }
  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  set lastName(lastName: string) {
   this._lastName = lastName;
  }

  get cellPhoneNumber(): string {
    return this._cellPhoneNumber;
  }
  get rank(): number {
    return this._rank;
  }

  set rank(value: number) {
    this._rank = value;
  }
  get joinDate(): Date {
    return this._joinDate;
  }

  set joinDate(value: Date) {
    this._joinDate = value;
  }
  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }
  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
  get officePhoneNumber(): string {
    return this._officePhoneNumber;
  }

  set officePhoneNumber(value: string) {
    this._officePhoneNumber = value;
  }
  set cellPhoneNumber(value: string) {
    this._cellPhoneNumber = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
  get recruiter(): string {
    return this._recruiter;
  }

  set recruiter(value: string) {
    this._recruiter = value;
  }
}

export default  Investor;
