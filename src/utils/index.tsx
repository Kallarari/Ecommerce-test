import axios from "axios";

export function GetDBInfo() {
  axios.get("http://localhost:3001/products").then((response) => {
    return response.data;
  });
}
