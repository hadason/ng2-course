import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgCourseAppComponent } from '../app/ng-course.component';

beforeEachProviders(() => [NgCourseAppComponent]);

describe('App: NgCourse', () => {
  it('should create the app',
      inject([NgCourseAppComponent], (app: NgCourseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-course works!\'',
      inject([NgCourseAppComponent], (app: NgCourseAppComponent) => {
    expect(app.title).toEqual('ng-course works!');
  }));
});
