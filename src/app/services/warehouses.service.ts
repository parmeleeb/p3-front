import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import {Location} from "../models/location.model";
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})

export class WarehousesService {

  warehouseToDisplay: number = 1;

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
                    1,
                    3),
           new Item(2,
                    "SampleItem2",
                    "This is a sample item again",
                    1,
                    2),
                    new Item(3,
                      "SampleItem2",
                      "This is a sample item again",
                      1,
                      4),
                      new Item(4,
                        "SampleItem2",
                        "This is a sample item again",
                        1,
                        5),
                        new Item(5,
                          "SampleItem2",
                          "This is a sample item again",
                          1,
                          67),
                          new Item(6,
                            "SampleItem2",
                            "This is a sample item again",
                            1,
                            3),
                            new Item(7,
                              "SampleItem2",
                              "This is a sample item again",
                              1,
                              2444),
                              new Item(8,
                                "SampleItem2",
                                "This is a sample item again",
                                1,
                                32),
                                new Item(9,
                                  "SampleItem2",
                                  "This is a sample item again",
                                  1,
                                  22),
                                  new Item(11,
                                    "SampleItem2",
                                    "This is a sample item again",
                                    1,
                                    11),
                                    new Item(12,
                                      "SampleItem2",
                                      "This is a sample item again",
                                      1,
                                      12),
                                      new Item(122,
                                        "SampleItem2",
                                        "This is a sample item again",
                                        1,
                                        43)]),
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
                            1,
                            8),
                    new Item(200,
                            "SampleItem4",
                            "This is a sample item again",
                            1,
                            7)]),
                            new Warehouse(3,
                              "Bingo Bangos",
                              new Location("4321 tttv",
                                           "lional",
                                           "FL",
                                           12345),
                              10,
                              [new Item(100,
                                        "SampleItem3",
                                        "This is a sample item.",
                                        1,
                                        4),
                                new Item(200,
                                        "SampleItem4",
                                        "This is a sample item again",
                                        1,
                                        34)]),
                                        new Warehouse(4,
                                          "Jow's BBQ",
                                          new Location("532 hibijibi",
                                                       "hotlanta",
                                                       "FL",
                                                       12345),
                                          10,
                                          [new Item(100,
                                                    "SampleItem3",
                                                    "This is a sample item.",
                                                    1,
                                                    1),
                                            new Item(200,
                                                    "SampleItem4",
                                                    "This is a sample item again",
                                                    1,
                                                    14)]),
                                                    new Warehouse(5,
                                                      "BLT's",
                                                      new Location("232 can't live here",
                                                                   "ulogoy",
                                                                   "FL",
                                                                   12345),
                                                      10,
                                                      [new Item(100,
                                                                "SampleItem3",
                                                                "This is a sample item.",
                                                                1,
                                                                100),
                                                        new Item(200,
                                                                "SampleItem4",
                                                                "This is a sample item again",
                                                                1,
                                                                9)]),
                          ];

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
                            1,
                            3),
                   new Item(2,
                            "SampleItem2",
                            "This is a sample item again",
                            1,
                            2),
                            new Item(3,
                              "SampleItem2",
                              "This is a sample item again",
                              1,
                              4),
                              new Item(4,
                                "SampleItem2",
                                "This is a sample item again",
                                1,
                                5),
                                new Item(5,
                                  "SampleItem2",
                                  "This is a sample item again",
                                  1,
                                  67),
                                  new Item(6,
                                    "SampleItem2",
                                    "This is a sample item again",
                                    1,
                                    3),
                                    new Item(7,
                                      "SampleItem2",
                                      "This is a sample item again",
                                      1,
                                      2444),
                                      new Item(8,
                                        "SampleItem2",
                                        "This is a sample item again",
                                        1,
                                        32),
                                        new Item(9,
                                          "SampleItem2",
                                          "This is a sample item again",
                                          1,
                                          22),
                                          new Item(11,
                                            "SampleItem2",
                                            "This is a sample item again",
                                            1,
                                            11),
                                            new Item(12,
                                              "SampleItem2",
                                              "This is a sample item again",
                                              1,
                                              12),
                                              new Item(122,
                                                "SampleItem2",
                                                "This is a sample item again",
                                                1,
                                                43)]),
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
                            1,
                            8),
                    new Item(200,
                            "SampleItem4",
                            "This is a sample item again",
                            1,
                            7)]),
                            new Warehouse(3,
                              "Bingo Bangos",
                              new Location("4321 tttv",
                                           "lional",
                                           "FL",
                                           12345),
                              10,
                              [new Item(100,
                                        "SampleItem3",
                                        "This is a sample item.",
                                        1,
                                        4),
                                new Item(200,
                                        "SampleItem4",
                                        "This is a sample item again",
                                        1,
                                        34)]),
                                        new Warehouse(4,
                                          "Jow's BBQ",
                                          new Location("532 hibijibi",
                                                       "hotlanta",
                                                       "FL",
                                                       12345),
                                          10,
                                          [new Item(100,
                                                    "SampleItem3",
                                                    "This is a sample item.",
                                                    1,
                                                    1),
                                            new Item(200,
                                                    "SampleItem4",
                                                    "This is a sample item again",
                                                    1,
                                                    14)]),
                                                    new Warehouse(5,
                                                      "BLT's",
                                                      new Location("232 can't live here",
                                                                   "ulogoy",
                                                                   "FL",
                                                                   12345),
                                                      10,
                                                      [new Item(100,
                                                                "SampleItem3",
                                                                "This is a sample item.",
                                                                1,
                                                                100),
                                                        new Item(200,
                                                                "SampleItem4",
                                                                "This is a sample item again",
                                                                1,
                                                                9)]),
                          ]);
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
