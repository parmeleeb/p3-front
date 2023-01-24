import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {

  formStyle: string = '';

  openItemPopup() {
    this.formStyle = 'item-popup-background'
    
  }

  closePopup(){
    this.formStyle = "item-popup-hidden "
  }

  warehouse: Warehouse | null;
  constructor(private warehouseService: WarehousesService) {
    this.warehouse = warehouseService.getWarehouseById(warehouseService.warehouseToDisplay);
  }
}
