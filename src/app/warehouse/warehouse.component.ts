import { Component } from '@angular/core';
import { Item } from '../models/item.model';
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


  openItemPopup(item: Item) {
    this.formStyle = 'item-popup-background'
    this.selectedItem = item
    
  }

  closePopup(){
    this.formStyle = "item-popup-hidden "
  }

  warehouse: Warehouse | null;
  constructor(private warehouseService: WarehousesService) {
    this.warehouse = warehouseService.getWarehouseById(warehouseService.warehouseToDisplay);
  }
}
