import React from 'react';

interface IFilterContextProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

const FilterContext = React.createContext<IFilterContextProps>({} as IFilterContextProps);

export default FilterContext;