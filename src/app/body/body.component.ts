import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  warehouseList: Warehouse[] = [];

  constructor(private warehouseService: WarehousesService) {
    warehouseService.warehouseObservable.subscribe(data => this.warehouseList = data);
  }


}
