export class Item {
  public name: string;
  public mainPic: string;
  public description: string;
  public currentLocation: string;
  public pictures: [{
    url: string,
    description: string
  }];

  constructor(name: string, mainPic: string, description: string, pictures: any, currentLocation: string) {
    this.name = name;
    this.mainPic = mainPic;
    this.description = description;
    this.pictures = pictures;
    this.currentLocation = currentLocation;
  }
}
