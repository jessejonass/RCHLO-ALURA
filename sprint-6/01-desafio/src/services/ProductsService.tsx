import IFilter from '../models/IFilter';
import IProduct from '../models/IProduct';
import ServiceUtils from './ServiceUtils';

interface IProductsResponse {
    products: IProduct[];
    filters: IFilter[]
}

const ProductsService = {
    get(): Promise<IProductsResponse> {
        const url = '/data/products.json';
        // const url = "https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/products";
        return ServiceUtils.handleResponse<IProductsResponse>(fetch(url));
    }
};

export default ProductsService;