import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/employee";
import {lastValueFrom} from "rxjs";
import {Department} from "../../../models/department";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employees?: Array<Employee>;
  departments?: Array<Department>;

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  async ngOnInit(): Promise<void> {
    const employees$ = this.employeeService.getEmployees();
    this.employees = await lastValueFrom(employees$);

    const departments$ = this.employeeService.getDepartments();
    this.departments = await lastValueFrom(departments$);
  }

  getDepartmentName(departmentId: number): string {
    return this.departments?.find((d) => d.departmentId == departmentId)?.department!;
  }

}
