export class Location {
  private streetAddress: string = '';
  private city: string = '';
  private state: string = '';
  private postalCode: number = -1;

  constructor(streetAddress:string, city:string,  state:string, postalCode:number) {
    this.setStreetAddress(streetAddress);
    this.setCity(city);
    this.setState(state);
    this.setPostalCode(postalCode);
  }

  public getStreetAddress() {
    return this.streetAddress;
  }

  public setStreetAddress(streetAddress:string) {
    this.streetAddress = streetAddress;
  }

  public getCity() {
    return this.city;
  }

  public setCity(city:string) {
    this.city = city;
  }

  public getState() {
    return this.state;
  }

  public setState(state:string) {
    this.state = state;
  }

  public getPostalCode() {
    return this.postalCode;
  }

  public setPostalCode(postalCode:number) {
    this.postalCode = postalCode;
  }

  public clone() {
    return new Location(this.getStreetAddress(),
                        this.getCity(),
                        this.getState(),
                        this.getPostalCode());
  }
}
