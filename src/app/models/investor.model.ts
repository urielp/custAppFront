class Investor {
  public _id: string;
  private _firstName: string;
  private _lastName: string;
  private cellPhoneNumber: string;
  private officePhoneNumber: string;
  private address: string;
  private email: string;
  private birthDate: Date;
  private picture: string;
  private company: string;
  private _commentsTest: [any];
  private role: string;
  private joinDate: Date;
  private rank: number;

  constructor(_id: string , firstName: string, lastName: string, cellPhoneNumber: string,
              officePhoneNumber: string, address: string, email: string,
              birthDate: Date, picture: string, company: string, commentsTest: [any],
              role: string, joinDate: Date , rank: number) {
    this._id = _id;
    this._firstName = firstName;
    this._lastName = lastName;
    this.cellPhoneNumber = cellPhoneNumber;
    this.officePhoneNumber = officePhoneNumber;
    this.address = address;
    this.email = email;
    this.birthDate = birthDate;
    this.picture = picture;
    this.company = company;
    this._commentsTest = commentsTest;
    this.role = role;
    this.joinDate = joinDate;
    this.rank = rank;
  }

   get comments(): [any] {
    return this._commentsTest;
  }
  set comments(commentsTest: [any]) {
    this._commentsTest = commentsTest;
  }
  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
}

export default  Investor;
