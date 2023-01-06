export class Item {
  private itemId: number = -1;
  private itemName: string = '';
  private itemDescription: string = '';
  private size: number = -1;

  public Item(itemId:number, itemName:string, itemDescription:string, size:number) {
    this.setItemId(itemId);
    this.setItemName(itemName);
    this.setItemDescription(itemDescription);
    this.setSize(size);
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

  public getSize() {
    return this.size;
  }

  public setSize(size:number){
    this.size = size;
  }
}
