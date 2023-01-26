import { Component } from '@angular/core';
import { Item } from '../models/item.model';
import { Location } from '../models/location.model';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {

  formStyle: string = '';
  selectedItem = new Item(77,"george", "dsadasd", 23, 1);
  itemToEdit: number = -1;
  warehouse: Warehouse = new Warehouse(-1, "", new Location("","","",-1), -1, []);
  ItemToUpdate: Item = this.selectedItem;
  itemName: string = '';
  itemDescription: string = '';
  itemQuantity: number = -1;
  itemSize: number = -1;


  constructor(private warehouseService: WarehousesService) {
    let possibleWarehouse = warehouseService.getWarehouseById(warehouseService.warehouseToDisplay);
    if (possibleWarehouse)
      this.warehouse = possibleWarehouse;
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
    if (confirm("Overwrite current item with new values?")) {
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
      this.warehouseService.deleteItem(this.warehouse.getId(), this.selectedItem.getItemId());
      this.closeItemPopup();
    }
  }
}
