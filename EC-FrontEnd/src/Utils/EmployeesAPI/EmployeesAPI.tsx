import axios from "axios";

import { Employee } from "../Interface/Interface";

const BASE_URL = "http://localhost:8080";

export const createEmployee = async (employee: any) => {
  const response = await axios.post(`${BASE_URL}/employees`, employee);
  return response.data;
};

export const readEmployee = async () => {
  const response = await axios.get(`${BASE_URL}/employees`);
  return response.data;
};

export const updateEmployee = async (employee: Employee) => {
  const response = await axios.put(
    `${BASE_URL}/employees/${employee.id}`,
    employee
  );
  return response.data;
};

export const deleteEmployee = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/employees/${id}`);
  return response.data;
};
