import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card-component/recipe-card-component';
import { Difficulty } from '../../models/difficulty.model';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-main-page-component',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent
  ],
  templateUrl: './main-page-component.html',
  styleUrl: './main-page-component.css',
})
export class MainPageComponent {
  difficulties: Difficulty[] = [
    { id: 1, name: 'Fácil' },
    { id: 2, name: 'Medio' },
    { id: 3, name: 'Difícil' }
  ];

  recipes: Recipe[] = [
    { 
      id: 1,
      name: 'Receta 1',
      difficulty: this.difficulties[0]
    },
    { 
      id: 2,
      name: 'Receta 2',
      difficulty: this.difficulties[1]
    },
    { 
      id: 3,
      name: 'Receta 3',
      difficulty: this.difficulties[2]
    }
  ];
}
