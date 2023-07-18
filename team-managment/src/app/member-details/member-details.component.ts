import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Member } from './member.interface';
import {TeamServicesService} from '../services/team-services.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})

export class MemberDetailsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  member: Member[] = [];
  dataSource= new MatTableDataSource<Member>(this.member);
  constructor(private teamService: TeamServicesService,private route:Router) { }
  ngOnInit() : void {
    console.log("hello");
    this.teamService.getTeamMembers().subscribe(data=>{
      this.member=data;
      this.dataSource.data=this.member
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  displayedColumns: string[] = ['firstName', 'lastName', 'jobTitle', 'status', 'team','delete','update'];
  update(user:Member): void{
    console.log(user.id);
    this.route.navigate(['/update-member',user.id]);
  }
  delete(user:Member): void{
    this.teamService.deleteTeamMember(user.id).subscribe(deletedUser=>{
      this.member = this.member.filter(member => member.id !== deletedUser.id);
      this.dataSource.data=this.member;
    })
  } 
}
