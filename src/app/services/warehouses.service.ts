import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item.model';
import {Location} from "../models/location.model";
import { Warehouse } from '../models/warehouse.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WarehousesService {

  warehouseToDisplay: number = 1;
  url: string = "http://ec2-34-200-237-160.compute-1.amazonaws.com:8080/";

  constructor(private httpClient: HttpClient) { }

  private warehousesBS = new BehaviorSubject<Warehouse[]>([]);
  public warehouseObservable = this.warehousesBS.asObservable();

  private warehouses: Warehouse[] = [];
  // All of this is mock data and will be deleted once the API is implemented

  /**
   *
   *  HELPER FUNCTION(S)
   *
   */

  private update() {
    // this.warehousesBS.next(this.warehouses);
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

  AddWarehouseItem(warehouseId:number, item:Item) {
    let itemToAdd = {
      itemName: item.getItemName(),
      itemDescription: item.getItemDescription(),
      itemSize: item.getItemSize()
    }
    console.log(itemToAdd);
    this.httpClient.post<any>(this.url + "item", itemToAdd).subscribe((data) => {
      console.log("item id" + data.body); // returning undefined for some reason
      if(data.body){
        let inventoryToAdd = {
          item: {
            id: data.body.id
          },
          warehouse: {
            id: warehouseId
          },
          itemQuantity: item.getItemCount()
        }
        console.log(inventoryToAdd);
        this.httpClient.post<any>(this.url + "inventory", inventoryToAdd).subscribe();
      }
    })
  }


  // (R)ead

  getAllWarehouses(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(this.url + "warehouse", {observe: "response"});
  }

  getWarehouseToDisplay(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(this.url + "inventory", {observe: "response"});
  }

  updateWarehouseList(warehouses: Warehouse[]) {
    this.warehousesBS.next(warehouses);
  }

  getWarehouseById(id:number) {
    let warehouse = this.findWarehouse(id);
    if(warehouse)
      return warehouse.clone();
    return null;
  }


  // (U)pdate

  updateItem(warehouseId:number, itemId:number, updatedItem:Item) {
    let callItem = {
      id:updatedItem.getItemId(),
      itemName:updatedItem.getItemName(),
      itemDescription:updatedItem.getItemDescription(),
      itemSize:updatedItem.getItemSize()
    }
    this.httpClient.put<any>(this.url + "item/" + itemId, callItem).subscribe();

    let inventoryId = -1;
    this.httpClient.get<any>(this.url + "inventory", {observe: "response"}).subscribe( data => {
      if(data.body){
        for(let inventory of data.body) {
          if(inventory.warehouse.id == warehouseId && inventory.item.id == itemId){
            inventoryId = inventory.id;
            inventory.itemQuantity = updatedItem.getItemCount();
            this.httpClient.put<any>(this.url + "inventory/" + inventoryId, inventory).subscribe(data => console.log(data));
            break;
          }
        }
      }
    });
  }


  // (D)elete


  deleteWarehouseItem(warehouseId:number, itemId:number) {
    let inventoryId = -1;
    this.httpClient.get<any>(this.url + "inventory", {observe: "response"}).subscribe( data => {
      if(data.body){
        for(let inventory of data.body) {
          if(inventory.warehouse.id == warehouseId && inventory.item.id == itemId){
            inventoryId = inventory.id;
            this.httpClient.delete<any>(this.url + "inventory/" + inventoryId, {observe: "response"}).subscribe(data => console.log(data));
            break;
          }
        }
      }
    });
  }
}
