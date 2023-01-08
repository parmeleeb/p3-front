import {Location} from "./location.model";
import { Item } from "./item.model";

export class Warehouse {
  private id: number = -1;
  private name: string = '';
  private location: Location = new Location("","","",-1);
  private itemCapacity: number = -1;
  private items: Item[] = [];

  constructor(id:number, name:string, location:Location, itemCapacity:number, items:Item[]) {
    this.setId(id);
    this.setName(name);
    this.setLocation(location);
    this.setItemCapacity(itemCapacity);
    this.setItems(items);
  }

  public getId() {
    return this.id;
  }

  public setId(id:number) {
    this.id = id;
  }

  public getName() {
    return this.name;
  }

  public setName(name:string) {
    this.name = name;
  }

  public getLocation() {
    return this.location.clone();
  }

  public setLocation(location:Location) {
    this.location = location.clone();
  }

  public getItemCapacity() {
    return this.itemCapacity;
  }

  public setItemCapacity(itemCapacity:number) {
    this.itemCapacity = itemCapacity;
  }

  public getItems() {
    let items = [];
    for(let item of this.items) {
      items.push(item.clone());
    }
    return items;
  }

  public setItems(items:Item[]) {
    this.items = [];
    for (let item of items) {
      this.items.push(item.clone());
    }
  }

  public addItem(item:Item) {
    this.items.push(item.clone());
  }

  public deleteItem(id:number) {
    for (let index in this.items) {
      if(this.items[index].getItemId() == id)
        this.items.splice(Number(index), 1);
    }
  }

  public changeItemName(id:number, name:string) {
    for (let item of this.items) {
      if(item.getItemId() == id)
        item.setItemName(name);
    }
  }

  public changeItemDescription(id:number, description:string) {
    for (let item of this.items) {
      if(item.getItemId() == id)
        item.setItemDescription(description);
    }
  }

  public changeItemSize(id:number, size:number) {
    for (let item of this.items) {
      if(item.getItemId() == id)
        item.setItemSize(size);
    }
  }

  public clone() {
    return new Warehouse(this.getId(),
                         this.getName(),
                         this.getLocation(),
                         this.getItemCapacity(),
                         this.getItems());
  }
}
