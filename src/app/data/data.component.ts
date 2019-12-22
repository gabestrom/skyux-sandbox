import {
  Component
} from '@angular/core';
import { DataService } from './data.service';
import { DataModel } from './data.modal';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  public temper:  DataModel;
  constructor(private dataService: DataService) {}

  // tslint:disable-next-line: use-life-cycle-interface
  public ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.temper = res;
    });
  }
}
