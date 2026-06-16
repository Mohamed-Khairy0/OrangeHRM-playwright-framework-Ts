export type UserRole = "Admin" | "Manager" | "Employee";
export type User = {
    username: string;
    password: string;
    role: UserRole;
}
export type Employee  = {
    firstName: string;
    middleName?: string;
    lastName: string;
    employeeId?: string;
}

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: number;
  };
}