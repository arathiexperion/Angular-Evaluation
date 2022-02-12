import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  page=1;
  filter="";
  listProducts:Product[];
  constructor(public productservice: ProductService,   
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.productservice.getAllproduct().subscribe(result=>{
      console.log(result);
      this.listProducts=result as Product[];

    })
    alert("");
   
  }
  Updateproduct(id:number){
    alert(id);
    this.router.navigate(['list',id]); 
  }
  deleteproduct(id:number){
    this.toastrService.success("RECORD DELETED","SUCCESFULY"); 
    
  }
    

}
