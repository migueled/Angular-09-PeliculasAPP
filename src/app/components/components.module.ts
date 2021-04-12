import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';

@NgModule({
    declarations: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent,
        CastSlideShowComponent
    ],
    exports:[
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent,
        CastSlideShowComponent
    ],
    imports: [
        CommonModule,
        RatingModule,
        RouterModule,
        PipesModule
    ]
})

export class ComponentsModule { }
