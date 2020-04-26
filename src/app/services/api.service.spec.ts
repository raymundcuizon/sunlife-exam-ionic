import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { UserInfo } from '../schema';
import { APP_CONFIG, AppConfig } from '../app-config.module';

describe('ApiService', () => {

  let apiService: ApiService;
  let httpMock: HttpTestingController;
  // let config: AppConfig;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppConfig],
      providers: [
        ApiService,
        { provide: APP_CONFIG, config: AppConfig }
      ]
    });
    // config = TestBed.get(AppConfig);
    apiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  } );

  // afterEach(() => {
  //   httpMock.verify();
  // });

  // it('Should retrieve data from the api', () => {
  //   const dummyUserInfo: UserInfo = {
  //     _id: '5ea3ef92115bd2773d2951a4',
  //     img: 'https://www.wikicelebs.com/wp-content/uploads/2020/04/Anna-Maria-Sieklucka-wiki-and-bio.jpg',
  //     name: 'baby girl'};

  //   apiService.getUserinfo().subscribe(userInfo => {
  //     expect(userInfo).toEqual(dummyUserInfo);
  //   });

    // const request = httpMock.expectOne(`${apiService.}/user-info`);

    // expect(request.request.method).toBe('GET');

    // request.flush(dummyUserInfo);
  // });

});
