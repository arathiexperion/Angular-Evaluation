import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Id: 0;
  list:Product[];

//DEPENDECY INJECTION
  constructor(public productservice: ProductService,
    private router: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.Id = this.router.snapshot.params['Id'];
    if (this.Id != 0 || this.Id != null)
     {

      this.productservice.getproduct(this.Id).subscribe(
        result => {
          alert(result);

          this.productservice.formData = Object.assign({}, result);
        },
      );
    }
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.productservice.formData.CategoryName = form.controls['mobile'].value;
    this.productservice.formData.CategoryName = form.controls['harddisk'].value;
    this.productservice.formData.CategoryName = form.controls['laptop'].value;
    let addId = this.productservice.formData.ProductCode;
    //CHECKING 
    if(addId == 0  || addId == null)
    {
      
      this.insertproductRecord(form);
    }
    else
    {
      this.updateproductRecord(form);
    }
  }
  insertproductRecord(form?:NgForm){
    console.log("inserting a record");
    this.productservice.insertproduct(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success('new record inserted');
        this.resetForm(form);

      } 
    );
  }
  deleteproductrecord(id,index){
  
    if(confirm("Are U Sure..!!?")){
      this.productservice.deleteproduct(id).subscribe(
        response=>{
          this.productservice.getAllproduct();
          this.productservice.splice(index,1);
          this.toastrService.success(' record has been deleted');    
        },
        errror=>{
          console.log("Error");
        }
      )
      }
  }
  updateproductRecord(form?:NgForm){
    console.log("updating a record");
    this.productservice.updateproduct(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success(' record has been updated');
        this.resetForm(form);
      }   
    );
  }
  //RESETING FORM
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

}
