import { Component, OnInit } from '@angular/core';
import { Policy } from '../schema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
})
export class PoliciesComponent implements OnInit {

  policies: Policy[] = [];
  // chevronBackOutline: any = '';

  constructor(private api: ApiService) {
    this.getPolicies();
  }

  ngOnInit() {}

  getPolicies() {
    this.api.getPolicies().subscribe((res) => {
      this.policies = res as Policy[];
    });
  }

}
