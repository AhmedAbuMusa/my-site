import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';  
//import 'rxjs/operator/filter';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userName:string = "";
  orderValue:string = "";
  constructor( private route: ActivatedRoute,private router:Router) { 

  }

  ngOnInit(): void {
  /*    let uName = this.route.snapshot.paramMap.get('userName');
     let oValue = this.route.snapshot.paramMap.get('orderValue');
alert(this.route.snapshot.paramMap);
     if (uName) this.userName = uName;
     if (oValue) this.orderValue = oValue; */


     this.route.queryParams.subscribe(params => {
      this.userName=params['userName'];
      this.orderValue = params['orderValue'];
      //alert(params);
/*   this.userName = params.userName;
  this.orderValue = params.orderValue; */
    })
  }
  backToProductList()
  {
    this.router.navigate(['/']);
  }

}
