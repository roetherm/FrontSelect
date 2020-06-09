import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-make-admin',
  templateUrl: './make-admin.component.html',
  styleUrls: ['./make-admin.component.scss']
})
export class MakeAdminComponent implements OnInit {

  value = '';

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
  }

  makeAdmin() {
    if (this.value !== '') {
      this.adminService.makeAdmin(this.value);
    }
  }

}
