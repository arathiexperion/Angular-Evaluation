import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-orderby',
  templateUrl: './orderby.component.html',
  styleUrls: ['./orderby.component.scss']
})
export class OrderbyComponent implements OnInit {
  page=1;
  filter="";

  listProducts:Product[];
  constructor(public productservice: ProductService,   
    private router:Router,
    ) { }

  ngOnInit(): void {
    //GETING THE LIST IN INCREASING ORDER OF GST
    this.productservice.gstcatproAllOrderBy().subscribe(result=>{
      console.log(result);
      this.listProducts=result as Product[];
    })
    alert("");
    
  }

}
