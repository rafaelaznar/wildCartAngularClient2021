import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  strUsuarioSession: IUsuario;
  strUrl:String="";

  constructor(private router: Router) {    
    
    this.strUsuarioSession = JSON.parse(localStorage.getItem("user"));

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl=ev.url ;
      }
    })
    
  }

  ngOnInit(): void {
  }

}
