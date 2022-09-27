import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  searchItem: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['searchItem']) {
        this.searchItem = param['searchItem'];
      }
    });
  }

  searchFood(): void {
    if (this.searchItem) {
      this.router.navigateByUrl(`/search/${this.searchItem}`);
    } else {
      this.router.navigateByUrl(`/`);
    }
  }
}
