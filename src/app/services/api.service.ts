import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { UserInfo } from '../schema';

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }
    getUserinfo() {
      return this.http.get<UserInfo>(`${this.config.apiUrl}/user-info`);
    }

    getAssets() {
      return this.http.get(`${this.config.apiUrl}/assets`);
    }

    getPolicies() {
      return this.http.get(`${this.config.apiUrl}/policies`);
    }

    getCoveragePolicy() {
      return this.http.get(`${this.config.apiUrl}/coverage-policy`);
    }

    getPolicyServicing() {
      return this.http.get(`${this.config.apiUrl}/policy-servicing`);
    }
}
