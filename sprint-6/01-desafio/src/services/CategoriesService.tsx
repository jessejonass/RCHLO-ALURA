import IBreadCrumb from "../models/IBreadCrumb";
import ICategory from "../models/ICategory";
import ServiceUtils from "./ServiceUtils";

export interface ICategoriesResponse { 
    all: ICategory[],
    current: IBreadCrumb[]
}

const CategoriesService = {
    get(): Promise<ICategoriesResponse> {
        const url = '/data/categories.json';
        // const url = 'https://5c056c28-5883-405c-9f30-3cd52ce03567.mock.pstmn.io/categories';        
        return ServiceUtils.handleResponse<ICategoriesResponse>(fetch(url));
    },
};

export default CategoriesService;