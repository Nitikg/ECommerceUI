import { OpenProductsDirective } from './open-products.directive';
import { routes } from '../app.routing.module';
import { Router } from '@angular/router';

describe('OpenProductsDirective', () => {
  it('should create an instance', () => {
    const directive = new OpenProductsDirective(new Router);
    expect(directive).toBeTruthy();
  });
});
