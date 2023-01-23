import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {


  warehouse: Warehouse | null;
  constructor(private warehouseService: WarehousesService) {
    this.warehouse = warehouseService.getWarehouseById(warehouseService.warehouseToDisplay);
  }
}
