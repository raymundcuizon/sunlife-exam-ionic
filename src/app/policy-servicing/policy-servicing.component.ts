import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PolicyServicing } from '../schema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-policy-servicing',
  templateUrl: './policy-servicing.component.html',
  styleUrls: ['./policy-servicing.component.scss'],
})
export class PolicyServicingComponent implements OnInit {
  @ViewChild(IonContent, {
    read: IonContent,
    static: true}
    ) content: IonContent;

    policyServicing: PolicyServicing[] = [];

    constructor(private api: ApiService) {
      this.getPolicyServicing();
    }

    getPolicyServicing() {
      this.api.getPolicyServicing().subscribe((res) => {
        this.policyServicing = res as PolicyServicing[];
        console.log(this.policyServicing);
      });
    }

  ngOnInit() {}

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  expandItem(item): void {
    item.expanded = (item.expanded) ? false : true;
  }

}
