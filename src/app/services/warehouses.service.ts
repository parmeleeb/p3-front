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

  private warehouses: Warehouse[] = [];
  private warehousesBS = new BehaviorSubject<Warehouse[]>([]);
  public warehouseObservable = this.warehousesBS.asObservable();


  /**
   *
   *  HELPER FUNCTION(S)
   *
   */

  private update() {
    this.warehousesBS.next(this.warehouses);
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
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        warehouse.addItem(item);
    }
    this.update();
  }


  // (R)ead

  getAllWarehouses() {
    return this.warehouses.slice();
  }

  getWarehouseById(id:number) {
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        return warehouse.clone();
    }
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


  // (U)pdate

  changeWarehouseName(id:number, name:string) {
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        warehouse.setName(name);
    }
    this.update();
  }

  changeWarehouseLocation(id:number, location:Location) {
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        warehouse.setLocation(location);
    }
    this.update();
  }

  changeWarehouseCapacity(id:number, itemCapacity:number) {
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        warehouse.setItemCapacity(itemCapacity);
    }
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
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == warehouseId)
        warehouse.deleteItem(itemId);
    }
    this.update();
  }

  deleteAllWarehouseItems(id:number) {
    for (let warehouse of this.warehouses) {
      if(warehouse.getId() == id)
        warehouse.setItems([]);
    }
    this.update();
  }
}
