import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  warehouseList: Warehouse[] = [];

  constructor(private warehouseService: WarehousesService) {
    warehouseService.warehouseObservable.subscribe(data => this.warehouseList = data);
  }
}
