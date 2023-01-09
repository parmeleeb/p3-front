export class Item {
  private itemId: number = -1;
  private itemName: string = '';
  private itemDescription: string = '';
  private size: number = -1;

  constructor(itemId:number, itemName:string, itemDescription:string, size:number) {
    this.setItemId(itemId);
    this.setItemName(itemName);
    this.setItemDescription(itemDescription);
    this.setItemSize(size);
  }

  public getItemId() {
    return this.itemId;
  }

  public setItemId(itemId:number){
    this.itemId = itemId;
  }

  public getItemName() {
    return this.itemName;
  }

  public setItemName(itemName:string){
    this.itemName = itemName;
  }

  public getItemDescription() {
    return this.itemDescription;
  }

  public setItemDescription(itemDescription:string){
    this.itemDescription = itemDescription;
  }

  public getItemSize() {
    return this.size;
  }

  public setItemSize(size:number){
    this.size = size;
  }

  public clone() {
    return new Item(this.getItemId(),
                    this.getItemName(),
                    this.getItemDescription(),
                    this.getItemSize());
  }
}
