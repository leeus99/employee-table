export interface Employee {
  userId: number;
  name: {
    first: string;
    last: string;
  };
  age: number;
  departmentId: number;
  phone: string;
  nationality: string;
  registeredDate: string;
  isAccountActive: boolean;
}
