import React, { useState } from 'react';
import DataTablesPage from '@app/pages/DataTablesPage';
import { Button } from '@app/components/common/buttons/Button/Button';
import CreateCategory from './CreateCategory';


const ParentCategoryList = () => {
  const [isLargeModalVisible, setIsLargeModalVisible] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsLargeModalVisible(true)} type="primary" style={{ marginLeft: 'auto' }}>
        Parent Category create +
      </Button>
      <CreateCategory title ="Create Parent Category" isLargeModalVisible={isLargeModalVisible} setIsLargeModalVisible={setIsLargeModalVisible}/>
      <DataTablesPage />
    </div>
  );
};

export default ParentCategoryList;
