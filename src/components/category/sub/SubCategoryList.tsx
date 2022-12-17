import React, { useState } from 'react';
import DataTablesPage from '@app/pages/DataTablesPage';
import { Button } from '@app/components/common/buttons/Button/Button';
import SubCategoryCreate from './SubCategoryCreate';

const SubCategoryList = () => {
  const [isLargeModalVisible, setIsLargeModalVisible] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsLargeModalVisible(true)} type="primary" style={{ marginLeft: 'auto' }}>
        Sub Category create +
      </Button>
      <SubCategoryCreate title ="Create Sub Category" isLargeModalVisible={isLargeModalVisible} setIsLargeModalVisible={setIsLargeModalVisible}/>
      <DataTablesPage />
    </div>
  );
};

export default SubCategoryList;
