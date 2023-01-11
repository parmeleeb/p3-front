import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import {Location} from "../models/location.model";
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})

export class WarehousesService {

  /**
   *
   * STORING WAREHOUSE DATA LOCALLY (TEMP)
   *
   */

  private warehouses: Warehouse[] = [
    new Warehouse(1,
                  "SampleWH",
                  new Location("123 ABC St",
                               "Pensacola",
                               "FL",
                               12345),
                  100,
                  [new Item(1,
                            "SampleItem",
                            "This is a sample item.",
                            1),
                   new Item(2,
                            "SampleItem2",
                            "This is a sample item again",
                            1)]),
    new Warehouse(2,
                  "AnotherSampleWH",
                  new Location("456 ZXY St",
                               "Pensacola",
                               "FL",
                               12345),
                  10,
                  [new Item(100,
                            "SampleItem3",
                            "This is a sample item.",
                            1),
                    new Item(200,
                            "SampleItem4",
                            "This is a sample item again",
                            1)])];
  private warehousesBS = new BehaviorSubject<Warehouse[]>([
    new Warehouse(1,
                  "SampleWH",
                  new Location("123 ABC St",
                              "Pensacola",
                              "FL",
                              12345),
                  100,
                  [new Item(1,
                            "SampleItem",
                            "This is a sample item.",
                            1),
                  new Item(2,
                            "SampleItem2",
                            "This is a sample item again",
                            1)]),
    new Warehouse(2,
                  "AnotherSampleWH",
                  new Location("456 ZXY St",
                              "Pensacola",
                              "FL",
                              12345),
                  10,
                  [new Item(100,
                            "SampleItem3",
                            "This is a sample item.",
                            1),
                    new Item(200,
                            "SampleItem4",
                            "This is a sample item again",
                            1)])]);
  public warehouseObservable = this.warehousesBS.asObservable();

  // All of this is mock data and will be deleted once the API is implemented

  /**
   *
   *  HELPER FUNCTION(S)
   *
   */

  private update() {
    this.warehousesBS.next(this.warehouses);
  }

  private findWarehouse(id:number) {
    for (let warehouse of this.warehouses) {
      if (warehouse.getId() == id)
        return warehouse;
    }
    return null;
  }


  /**
   *
   *  CRUD FUNCTIONS
   * (create, read, update, delete)
   *
   */

  // (C)reate

  addWarehouse(warehouse:Warehouse) {
    this.warehouses.push(warehouse);
    this.update();
  }

  createWarehouse(id:number, name:string, location:Location, itemCapacity:number, items:Item[]) {
    this.addWarehouse(new Warehouse(id, name, location, itemCapacity, items));
  }

  AddWarehouseItem(id:number, item:Item) {
    let warehouse = this.findWarehouse(id);
    if(warehouse) {
      warehouse.addItem(item);
      this.update();
    }
  }


  // (R)ead

  getAllWarehouses() {
    return this.warehouses.slice();
  }

  getWarehouseById(id:number) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      return warehouse.clone();
    return null;
  }

  getWarehousesInState(state:string) {
    let warehouses = [];
    for(let warehouse of this.warehouses){
      if(warehouse.getLocation().getState() === state)
        warehouses.push(warehouse.clone());
    }
    return warehouses;
  }

  getAllItemsInWarehouse(id:number) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      return warehouse.getItems();
    return null;
  }

  getItemById(warehouseId:number, itemId:number) {
    let warehouse = this.findWarehouse(warehouseId);
    if(warehouse) {
      for(let item of warehouse.getItems()) {
        if(item.getItemId() == itemId)
          return item.clone();
      }
    }
    return null;
  }


  // (U)pdate

  changeWarehouseName(id:number, name:string) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      warehouse.setName(name);
    this.update();
  }

  changeWarehouseLocation(id:number, location:Location) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      warehouse.setLocation(location);
    this.update();
  }

  changeWarehouseCapacity(id:number, itemCapacity:number) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      warehouse.setItemCapacity(itemCapacity);
    this.update();
  }

  changeItemName(warehouseId:number, itemId:number, itemName:string) {
    let warehouse = this.findWarehouse(warehouseId);
    if(warehouse)
      warehouse.changeItemName(itemId, itemName);
    this.update();
  }

  changeItemDescription(warehouseId:number, itemId:number, itemDescription:string) {
    let warehouse = this.findWarehouse(warehouseId);
    if(warehouse)
      warehouse.changeItemDescription(itemId, itemDescription);
    this.update();
  }

  changeItemSize(warehouseId:number, itemId:number, itemSize:number) {
    let warehouse = this.findWarehouse(warehouseId);
    if(warehouse)
      warehouse.changeItemSize(itemId, itemSize);
    this.update();
  }


  // (D)elete

  deleteWarehouse(id:number) {
    for (let index in this.warehouses) {
      if(this.warehouses[index].getId() == id)
        this.warehouses.splice(Number(index), 1);
    }
    this.update();
  }

  deleteWarehouseItem(warehouseId:number, itemId:number) {
    let warehouse = this.findWarehouse(warehouseId);
    if(warehouse)
      warehouse.deleteItem(itemId);
    this.update();
  }

  deleteAllWarehouseItems(id:number) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      warehouse.setItems([]);
    this.update();
  }
}
