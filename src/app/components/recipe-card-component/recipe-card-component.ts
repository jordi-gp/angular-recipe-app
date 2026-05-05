import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card-component.html',
  styleUrl: './recipe-card-component.css',
})
export class RecipeCardComponent {
  @Input() recipe?: Recipe;
}
