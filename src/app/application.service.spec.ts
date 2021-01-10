import { TestBed } from '@angular/core/testing';
import { ApplicationService } from './application.service';

describe('ApplicationService', () => {
  let service: ApplicationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
