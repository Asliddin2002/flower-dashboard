import React, { useState } from 'react';
import { Modal } from '@app/components/common/Modal/Modal';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { useTranslation } from 'react-i18next';
import { Button } from '@app/components/common/buttons/Button/Button.styles';
import { notificationController } from '@app/controllers/notificationController';
import { Input } from '@app/components/common/inputs/Input/Input.styles';
import { Upload } from '@app/components/common/Upload/Upload';
import { UploadOutlined } from '@ant-design/icons';

type propsType = {
  title: string;
  isLargeModalVisible: boolean;
  setIsLargeModalVisible: (item: boolean) => void;
};

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const CreateCategory = ({ title, isLargeModalVisible, setIsLargeModalVisible }: propsType) => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [form] = BaseButtonsForm.useForm();

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
      // window.location.reload();
    }, 1000);
  };
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
        <BaseButtonsForm
          {...formItemLayout}
          isFieldsChanged={isFieldsChanged}
          onFieldsChange={() => setFieldsChanged(true)}
          name="validateForm"
          initialValues={{
            'input-number': 3,
            'checkbox-group': ['A', 'B'],
            rate: 3.5,
          }}
          footer={
            <BaseButtonsForm.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                {t('common.submit')}
              </Button>
            </BaseButtonsForm.Item>
          }
          onFinish={onFinish}
        >
          <BaseButtonsForm.Item
            name="name"
            // label={t('forms.controlFormLabels.groupName')}
            label="Category name"
            // rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
            rules={[{ required: true, message: 'Category name is required' }]}
          >
            <Input />
          </BaseButtonsForm.Item>
          <BaseButtonsForm.Item
            name="description"
            // label={t('forms.controlFormLabels.groupName')}
            label="Category description"
            // rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
            rules={[{ required: true, message: 'Category description is required' }]}
          >
            <Input />
          </BaseButtonsForm.Item>

          <BaseButtonsForm.Item
            name="category_image"
            // label={t('forms.validationFormLabels.upload')}
            label="Category image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: 'Category image is required' }]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button type="default" icon={<UploadOutlined />}>
                {t('forms.validationFormLabels.clickToUpload')}
              </Button>
            </Upload>
          </BaseButtonsForm.Item>
        </BaseButtonsForm>
      </Modal>
    </div>
  );
};

export default CreateCategory;
