import { Injectable } from '@angular/core';
import { Tag } from './../../shared/models/tag';
import { Foods } from 'src/app/shared/models/food.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Cook',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy', 'US'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Fast Food', 'Pizza', 'Launch'],
      },
      {
        id: 2,
        name: 'Palov Cook',
        cookTime: '40-20',
        price: 20,
        favorite: false,
        origins: ['Italy', 'Uzbekistan', 'Turkey'],
        star: 5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Uzbek', 'Palov'],
      },
      {
        id: 3,
        name: 'Hen Cook',
        cookTime: '14-20',
        price: 12,
        favorite: false,
        origins: ['Buchesy', 'Chelse'],
        star: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'FastBurger', 'Burger'],
      },
      {
        id: 4,
        name: 'Small Cook',
        cookTime: '40-20',
        price: 14,
        favorite: false,
        origins: ['Italy', 'GERMAN', 'Turkey'],
        star: 2.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['LaunchFood', 'WaterFood', 'NomerOdin'],
      },
      {
        id: 5,
        name: 'Pizza Cook',
        cookTime: '10-20',
        price: 4,
        favorite: false,
        origins: ['Italy'],
        star: 4.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Ham'],
      },
      {
        id: 6,
        name: 'Palov Cook',
        cookTime: '420-20',
        price: 19,
        favorite: true,
        origins: ['Italy', 'Turkey'],
        star: 3.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['BurgerFood', 'Palov', 'NomerOdin'],
      },
      {
        id: 7,
        name: 'Hen Cook',
        cookTime: '14-20',
        price: 12,
        favorite: false,
        origins: ['Buchesy', 'Chelse'],
        star: 4,
        imageUrl: '/assets/food-7.jpg',
        tags: ['Makaron', 'Pizza', 'Launch'],
      },
      {
        id: 8,
        name: 'Small Cook',
        cookTime: '40-20',
        price: 14,
        favorite: false,
        origins: ['Italy', 'GERMAN', 'Turkey'],
        star: 5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['Fast Food', 'Palov', 'Makaron'],
      },
    ];
  }
  getFoodByTag(tag: string): Foods[] {
    if (tag.toLowerCase() === 'all') {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }
  getAllTags(): Tag[] {
    return [
      {
        name: 'All',
        count: 8,
      },
      {
        name: 'FastFood',
        count: 2,
      },
      {
        name: 'Burger',
        count: 1,
      },
      {
        name: 'Palov',
        count: 3,
      },
    ];
  }
  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id === id)!;
  }
}
