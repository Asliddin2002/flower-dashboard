import React, { useState } from 'react';
import DataTablesPage from '@app/pages/DataTablesPage';
import { Button } from '@app/components/common/buttons/Button/Button';
import ProductCreate from './productCreate/ProductCreate';

const ProductList = () => {
  const [isLargeModalVisible, setIsLargeModalVisible] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setIsLargeModalVisible(true)} style={{ marginLeft: 'auto' }}>
        Product create +
      </Button>
      <ProductCreate title ="Create Product" isLargeModalVisible={isLargeModalVisible} setIsLargeModalVisible={setIsLargeModalVisible} />
      <DataTablesPage />
      
    </div>
  );
};

export default ProductList;
