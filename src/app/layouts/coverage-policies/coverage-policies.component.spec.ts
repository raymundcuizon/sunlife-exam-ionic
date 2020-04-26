import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoveragePoliciesComponent } from './coverage-policies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('CoveragePoliciesComponent', () => {
  let component: CoveragePoliciesComponent;
  let fixture: ComponentFixture<CoveragePoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragePoliciesComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        ApiService,
        { provide: APP_CONFIG, useValue: AppConfig }
      ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CoveragePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
