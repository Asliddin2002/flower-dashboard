import React from 'react';
import { Modal } from '@app/components/common/Modal/Modal';
type propsType = {
  title: string;
  isLargeModalVisible: boolean;
  setIsLargeModalVisible: (item: boolean) => void;
};
import { ValidationForm } from '@app/components/forms/ValidationForm/ValidationForm';

const ProductCreate = ({ title, isLargeModalVisible, setIsLargeModalVisible }: propsType) => {
  return (
    <div>
      <Modal
        title={title}
        centered
        visible={isLargeModalVisible}
        onOk={() => setIsLargeModalVisible(false)}
        onCancel={() => setIsLargeModalVisible(false)}
        size="large"
      >
        <ValidationForm />
      </Modal>
    </div>
  );
};

export default ProductCreate;
