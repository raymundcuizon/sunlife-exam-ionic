import { Component, OnInit } from '@angular/core';
import { CoveragePolicy } from '../../schema';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-coverage-policies',
  templateUrl: './coverage-policies.component.html',
  styleUrls: ['./coverage-policies.component.scss'],
})
export class CoveragePoliciesComponent implements OnInit {

  coverage: CoveragePolicy = {};
  constructor(private api: ApiService) {
    this.getCoverage();
  }

  ngOnInit() {}

  getCoverage() {
    this.api.getCoveragePolicy().subscribe((res) => {
      this.coverage = res as CoveragePolicy;
    });
  }
}
