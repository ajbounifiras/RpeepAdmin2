import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'app/auth/models';
import { AuthenticationService, UserService } from 'app/auth/service';
const URL = "http://localhost:3000/posts";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  // public
  public contentHeader: object;
 userData:any;
 user=new User;
 url:URL;
 user2:any;
  constructor(private ur:UserService,private ac:AuthenticationService ) {
    
  }

 
  ngOnInit(): void {
   
      this.contentHeader = {
      headerTitle: 'Profile',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Profile',
            isLink: false
          }
        ]
      }
    };
    this.user2=JSON.parse(localStorage.getItem('currentUser'))
    this.ur.getAll();

    this.getuser();
  }
  async getuser(){
   
    this.userData=await JSON.parse(localStorage.getItem("userData")||"{}")
    console.log(this.userData)
    this.ur.getById(this.userData.firstName).subscribe(data=>{
      this.user=data;
      console.log(data);
    }) 
  }

}
