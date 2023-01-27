import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';
import { Location } from '../models/location.model';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit{

  formStyle: string = '';
  selectedItem = new Item(77,"george", "dsadasd", 23, 1);
  itemToEdit: number = -1;
  warehouse: Warehouse = new Warehouse(-1, "", new Location("","","",-1), -1, []);
  ItemToUpdate: Item = this.selectedItem;
  itemName: string = '';
  itemDescription: string = '';
  itemQuantity: number = -1;
  itemSize: number = -1;
  addingItem: boolean = false;
  itemToAdd: Item = new Item(-1,"", "", -1, -1);
  currentItemLoad: number = -1;


  constructor(private warehouseService: WarehousesService, private router: Router) {
    let possibleWarehouse = warehouseService.getWarehouseById(warehouseService.warehouseToDisplay);
    if (possibleWarehouse)
      this.warehouse = possibleWarehouse;
  }

  ngOnInit() {
    this.warehouseService.getWarehouseToDisplay().subscribe(data => {
      if (data.body){
        for(let inventory of data.body) {
          if(inventory.warehouse.id == this.warehouseService.warehouseToDisplay){
            if(this.warehouse.getId() == -1) {
              this.warehouse.setId(inventory.warehouse.id);
              this.warehouse.setName("Warehouse #" + inventory.warehouse.id);
              this.warehouse.setItemCapacity(inventory.warehouse.warehouseCapacity);
              this.warehouse.setLocation(new Location(inventory.warehouse.location.streetAddress,
                                                      inventory.warehouse.location.city,
                                                      inventory.warehouse.location.state,
                                                      inventory.warehouse.location.postalCode))
            }
            this.warehouse.addItem(new Item(inventory.item.id,
                                            inventory.item.itemName,
                                            inventory.item.itemDescription,
                                            inventory.item.itemSize,
                                            inventory.itemQuantity));
          }
        }
        this.currentItemLoad = this.findCurrentItemLoad();
      }
    })
  }

  findCurrentItemLoad(): number {
    let itemLoad = 0;
    for(let item of this.warehouse.getItems()) {
      itemLoad += item.getItemCount() * item.getItemSize();
    }
    return itemLoad;
  }

  openItemPopup(item: Item) {
    this.formStyle = "item-popup-background";
    this.selectedItem = item;

  }

  closeItemPopup(){
    this.formStyle = "item-popup-hidden";
    this.setToEdit(-1);
  }

  isOpenForEdit(){
    return this.selectedItem.getItemId() == this.itemToEdit;
  }

  setToEdit(id: number){
    this.itemToEdit = id;
    this.ItemToUpdate = this.selectedItem;
    if(id == -1) {
      this.resetValues();
    } else {
      this.setValues();
    }
  }

  resetValues() {
    this.itemName = '';
    this.itemDescription = '';
    this.itemQuantity = -1;
    this.itemSize = -1;
  }

  setValues() {
    this.itemName = this.ItemToUpdate.getItemName();
    this.itemDescription = this.ItemToUpdate.getItemDescription();
    this.itemQuantity = this.ItemToUpdate.getItemCount();
    this.itemSize = this.ItemToUpdate.getItemSize();
  }

  submitChanges() {
    if(this.itemQuantity < 1)
      alert("Cannot have less than 1 item");
    else if((this.warehouse.getItemCapacity() - this.currentItemLoad) <
        (this.itemQuantity*this.itemSize) - (this.ItemToUpdate.getItemCount()*this.ItemToUpdate.getItemSize())){
          alert("Cannot Exceed Max Capacity!")
        }
    else if (confirm("Overwrite current item with new values?")) {
      console.log(this.ItemToUpdate);
      this.setUpdatedProperties();
      this.warehouseService.updateItem(this.warehouse.getId(), this.selectedItem.getItemId(), this.ItemToUpdate);
      console.log(this.ItemToUpdate);
      this.setToEdit(-1);
    }
  }

  setUpdatedProperties() {
    this.ItemToUpdate.setItemName(this.itemName);
    this.ItemToUpdate.setItemDescription(this.itemDescription);
    this.ItemToUpdate.setItemCount(this.itemQuantity);
    this.ItemToUpdate.setItemSize(Number(this.itemSize));
  }

  confirmDelete() {
    if (confirm("This item will be PERMANENTLY deleted.")) {
      this.warehouseService.deleteWarehouseItem(this.warehouse.getId(), this.selectedItem.getItemId());
      this.closeItemPopup();
    }
  }

  addNewItem() {
    this.addingItem = true;
    this.openItemPopup(this.itemToAdd);
  }

  submitNewItem() {
    this.itemToAdd.setItemName(this.itemName);
    this.itemToAdd.setItemDescription(this.itemDescription);
    this.itemToAdd.setItemCount(this.itemQuantity);
    this.itemToAdd.setItemSize(Number(this.itemSize));

    this.warehouseService.AddWarehouseItem(this.warehouse.getId(), this.itemToAdd);
    this.closeItemPopup();
  }
}
