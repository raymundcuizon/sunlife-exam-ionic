import { Component, OnInit } from '@angular/core';
import { Assset } from '../../schema';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
})
export class AssetComponent implements OnInit {

  total: number;
  assets: Assset[] = [];

  constructor(private api: ApiService) {
    this.getAssets();
  }

  ngOnInit() {}

  getAssets() {
    this.api.getAssets().subscribe((res) => {
      this.assets = res as Assset[];
      this.total = this.assets.reduce((sum, data) => data.value + sum, 0);

    });
  }
}
