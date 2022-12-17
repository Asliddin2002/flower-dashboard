import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Switch } from '@app/components/common/Switch/Switch';
import { Upload } from '@app/components/common/Upload/Upload';
import { notificationController } from '@app/controllers/notificationController';
import { Input } from '../../common/inputs/Input/Input';
import * as S from '../DynamicForm/DynamicForm.styles';
import { Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Sight {
  [key: string]: string[];
}

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

export const ValidationForm = () => {
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
        label="Product name"
        // rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
        rules={[{ required: true, message: 'Product name is required' }]}
      >
        <Input />
      </BaseButtonsForm.Item>
      <BaseButtonsForm.Item
        name="description"
        // label={t('forms.controlFormLabels.groupName')}
        label="Product description"
        // rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
        rules={[{ required: true, message: 'Product description is required' }]}
      >
        <Input />
      </BaseButtonsForm.Item>
      <BaseButtonsForm.Item
        name="select"
        // label={t('forms.validationFormLabels.select')}
        label="Sub category"
        hasFeedback
        // rules={[{ required: true, message: t('forms.validationFormLabels.countryError') }]}
        rules={[{ required: true, message: 'Please, select the category' }]}
      >
        <Select placeholder="Please select the category">
          <Option value="atirgul">Atirgullar</Option>
          <Option value="lola">Lolalar</Option>
          <Option value="boychechak">Boychechaklar</Option>
        </Select>
      </BaseButtonsForm.Item>
      <div style={{ display: 'flex', gap: '50px' }}>
        <BaseButtonsForm.Item
          name="price"
          style={{ width: '200px' }}
          // label={t('forms.controlFormLabels.groupName')}
          label="Product price"
          // rules={[{ required: true, message: t('forms.controlFormLabels.groupNameError') }]}
          rules={[{ required: true, message: 'Product price is required' }]}
        >
          <Input />
        </BaseButtonsForm.Item>

        <BaseButtonsForm.Item name="discount" label="Discount" valuePropName="checked">
          <Switch />
        </BaseButtonsForm.Item>
        <BaseButtonsForm.Item label="Product discount">
          <label>
            <BaseButtonsForm.Item name="product_discount" noStyle>
              <InputNumber min={1} max={100} />
            </BaseButtonsForm.Item>
          </label>
          <span> % discount</span>
        </BaseButtonsForm.Item>
      </div>
      <BaseButtonsForm.Item
        name="product_image"
        // label={t('forms.validationFormLabels.upload')}
        label="Product image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Product image is required' }]}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button type="default" icon={<UploadOutlined />}>
            {t('forms.validationFormLabels.clickToUpload')}
          </Button>
        </Upload>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.List name="Product Charactersitics">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Row key={field.key} wrap={false} gutter={[10, 10]} align="middle" justify="space-between">
                <Col span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    // label={t('forms.dynamicFormLabels.price')}
                    label="Property"
                    name={[field.name, 'Property']}
                    fieldKey={[field.key, 'property']}
                    rules={[{ required: true, message: 'Property is required' }]}
                  >
                    <S.Wrapper>
                      <Input />
                      <S.RemoveBtn onClick={() => remove(field.name)} />
                    </S.Wrapper>
                  </BaseButtonsForm.Item>
                </Col>
                <Col span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    // label={t('forms.dynamicFormLabels.price')}
                    label="Value"
                    name={[field.name, 'value']}
                    fieldKey={[field.key, 'value']}
                    rules={[{ required: true, message: 'Value is required' }]}
                  >
                    <S.Wrapper>
                      <Input />
                      <S.RemoveBtn onClick={() => remove(field.name)} />
                    </S.Wrapper>
                  </BaseButtonsForm.Item>
                </Col>
              </Row>
            ))}

            <BaseButtonsForm.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add product Charactersitics
              </Button>
            </BaseButtonsForm.Item>
          </>
        )}
      </BaseButtonsForm.List>
    </BaseButtonsForm>
  );
};
