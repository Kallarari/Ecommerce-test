import axios from "axios";

export function GetDBInfo() {
  try {
    axios.get("http://localhost:3001/products").then((response) => {
      return response.data;
    });
  } catch (error) {
    return error;
  }
}
