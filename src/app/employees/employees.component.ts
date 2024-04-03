import { Component } from '@angular/core';
import { EmplysService } from '../emplys.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  cds:any[]=[]
  constructor(private abc:EmplysService ){}

ngOnInit()
{
 this.cds=this.abc.details()
  console.log(this.cds);
  
}
}
