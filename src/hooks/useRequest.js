import { message } from "antd";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const error = (err) => {
    message.error(err || "Something error!");
  };

  const request = async ({
    me,
    url,
    method = "GET",
    body = {},
    token,
    headers = {},
  }) => {
    if (method === "POST") headers["Content-Type"] = "application/json";
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers,
      body: JSON.stringify(body),
    };
    try {
      let res = await fetch(
        `${me ? "http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api" : REACT_APP_BASE_URL}${url}`,
        options
      ).then((res) => res.json());
      return res;
    } catch (err) {
      error(err);
      return err;
    }
  };
  return request;
};

export default useRequest;
