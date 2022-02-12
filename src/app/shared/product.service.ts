import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  formData: Product = new Product();
  splice: any;

  constructor(private httpClient: HttpClient) { }

  getAllproduct(): Observable<any> { return this.httpClient.get(environment.apiUrl + "api/gstc/gstcatpro"); }

  gstcatproAllOrderBy(): Observable<any> { return this.httpClient.get(environment.apiUrl + "api/gstc/gstcatproAllOrderBy"); }
  //GETTING DATA WITH AN ID
  getproduct(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "api/productC/" + id);
  }
  //INSERTING THE DATA
  insertproduct(product: Product): Observable<any> {
    console.log(product);
    return this.httpClient.post(environment.apiUrl + "api/productC", product);
  }
  //UPDATING THE DATA
  updateproduct(product: Product): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "api/productC", product);
  }
  getAllcategory(): Observable<any> { return this.httpClient.get(environment.apiUrl + "api/categoryc"); }
  //DELETE THE DATA
  deleteproduct(id: number) {
    return this.httpClient.delete(environment.apiUrl + "api/productC/" + id);
  }

}
