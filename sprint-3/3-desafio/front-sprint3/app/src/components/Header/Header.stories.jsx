import Header from '.';

import { FilterProvider } from '../../hooks/useFilter';
import { ProductsProvider } from '../../hooks/useProducts';
import { MessageProvider } from '../../hooks/useMessage';
import { LoadProvider } from '../../hooks/useLoading';

export default {
  title: 'Header',
  component: Header,
};

const TemplateHeader = (args) => {
  return (
    <LoadProvider>
      <MessageProvider>
        <ProductsProvider>
          <FilterProvider>
            <Header {...args} />
          </FilterProvider>
        </ProductsProvider>
      </MessageProvider>
    </LoadProvider>
  )
};

export const Index = TemplateHeader.bind({});