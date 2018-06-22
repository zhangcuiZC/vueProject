import withAxios from "../../utils/withAxios";

const apiConfig = [
  {
    name: "getDataList",
    url: "/counter/sheet",
    method: "get"
  }
];

export default withAxios(apiConfig);
