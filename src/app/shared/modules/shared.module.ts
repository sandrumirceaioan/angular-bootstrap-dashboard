import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        SpinnerComponent

    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        SpinnerComponent,
        ToastrModule,
        NgbModule
    ]
})
export class SharedModule { }
