import {Location} from "./location.model";
import { Item } from "./item.model";

export class Warehouse {
  private id: number = -1;
  private name: string = '';
  private location: Location = new Location();
  private itemCapacity: number = -1;
  private items: Item[] = [];

  public Warehouse(id:number, name:string, location:Location, itemCapacity:number, items:Item[]) {
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
    return this.location;
  }

  public setLocation(location:Location) {
    this.location = location;
  }

  public getItemCapacity() {
    return this.itemCapacity;
  }

  public setItemCapacity(itemCapacity:number) {
    this.itemCapacity = itemCapacity;
  }

  public getItems() {
    return this.items;
  }

  public setItems(items:Item[]) {
    this.items = items;
  }
}
