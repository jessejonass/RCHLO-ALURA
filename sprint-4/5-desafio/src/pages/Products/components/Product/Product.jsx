import { Link } from 'react-router-dom';

import {
  ProductCard,
  Card,
  CardImg,
  CardDescription,
  CardPrice
} from './styles';

export default function Product({ image, name, price, to }) {

  return (
    <ProductCard className=" card">
      <Link to={`details/${to}`}>
        <Card>
          <CardImg src={image} alt="" />

          <CardDescription>
              {name}
          </CardDescription>

          <CardPrice>
              R$ {price}
          </CardPrice>
        </Card>
      </Link>
    </ProductCard>
  );
}
