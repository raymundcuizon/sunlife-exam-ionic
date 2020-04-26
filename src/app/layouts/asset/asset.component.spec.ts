import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AssetComponent } from './asset.component';
import { ApiService } from 'src/app/services/api.service';
import { APP_CONFIG, AppConfig } from 'src/app/app-config.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AssetComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetComponent ],
      providers: [
        ApiService,
        { provide: APP_CONFIG, useValue: AppConfig }
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
