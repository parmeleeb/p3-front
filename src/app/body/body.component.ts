import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../models/warehouse.model';
import { Location } from '../models/location.model';
import { WarehousesService } from '../services/warehouses.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  formStyle: string = '';

  openItemPopup() {
    this.formStyle = 'item-popup-background'

  }

  closePopup(){
    this.formStyle = "item-popup-hidden "
  }

  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehousesService) {
  }

  ngOnInit() {
    this.warehouseService.getAllWarehouses().subscribe(data => {
      if(data.body){
        for(let warehouse of data.body) {
          this.warehouses.push(new Warehouse(warehouse.id,
                                             "warehouse #" + warehouse.id,
                                             new Location(warehouse.location.streetAddress,
                                                          warehouse.location.city,
                                                          warehouse.location.state,
                                                          warehouse.location.postalCode),
                                             warehouse.warehouseCapacity,[]));
        }
        this.warehouseService.updateWarehouseList(this.warehouses);
      }
    });
  }

  warehouseToAdd: Warehouse = new Warehouse(-1,"",new Location("","","",-1),-1,[]);


  setWarehouseToDisplay(id: number) {
    this.warehouseService.warehouseToDisplay = id;
  }
}
