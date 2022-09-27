import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../servicess/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  @Input() foodPageTags?: string[];
  constructor(private foodService: FoodService, private route: Router) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }

  searchByTag(tag: string) {
    this.route.navigateByUrl(`/tag/${tag}`);
  }
}
