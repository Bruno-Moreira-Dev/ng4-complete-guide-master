import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'Test Recipe',
      'Description Recipe',
      'https://s2.glbimg.com/jOvVw-5MaZswJgZvZ8ya1V7ZMXE=/0x0:800x533/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/c/r/mLrOqnRiemx034biSdHw/ratatouille.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Description Recipe',
      'https://s2.glbimg.com/jOvVw-5MaZswJgZvZ8ya1V7ZMXE=/0x0:800x533/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/c/r/mLrOqnRiemx034biSdHw/ratatouille.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
