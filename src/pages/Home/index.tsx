import { Helmet } from "react-helmet";
import ProductList from "./Home";
import Logo from "./logo.component.svg";

const Home = (): JSX.Element => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Home page" />
    </Helmet>

    <ProductList />
  </>
);

export default Home;
