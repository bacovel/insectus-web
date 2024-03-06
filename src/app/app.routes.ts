import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
];
