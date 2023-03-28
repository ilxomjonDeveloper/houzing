import React from "react";
import { Container } from "./style";
// const { REACT_APP_BASE_URL: url } = process.env;

const HouseItem = () => {
  // const [data, setData] = useState({});
  // const params = useParams();
  // useEffect(() => {
  //   params?.id && fetch(`${url}/houses/list/${params?.id}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res?.data || []));
  // }, [params?.id]);
  return (
    <Container>
      <h1>House Item</h1>
    </Container>
  );
};

export default HouseItem;
