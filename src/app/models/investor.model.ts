class Investor {
  public _id: string;
  private firstName: string;
  private lastName: string;
  private cellPhoneNumber: string;
  private officePhoneNumber: string;
  private address: string;
  private email: string;
  private birthDate: Date;
  private picture: string;
  private company: string;
  private role: string;
  private joinDate: Date;
  private rank: number;

  constructor(_id: string , firstName: string, lastName: string, cellPhoneNumber: string,
              officePhoneNumber: string, address: string, email: string,
              birthDate: Date, picture: string, company: string,
              role: string, joinDate: Date , rank: number) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cellPhoneNumber = cellPhoneNumber;
    this.officePhoneNumber = officePhoneNumber;
    this.address = address;
    this.email = email;
    this.birthDate = birthDate;
    this.picture = picture;
    this.company = company;
    this.role = role;
    this.joinDate = joinDate;
    this.rank = rank;
  }
}

export default  Investor;
