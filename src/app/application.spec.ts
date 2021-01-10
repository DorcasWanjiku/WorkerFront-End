import { Application } from './application';

describe('Application', () => {
  it('should create an instance', () => {
    expect(new Application(1, "s", new Date(2021,1,10), 1, 1)).toBeTruthy();
  });
});
