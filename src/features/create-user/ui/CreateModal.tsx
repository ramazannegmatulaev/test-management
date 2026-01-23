import React from 'react';
import { Modal, Form, Input } from 'antd';
import { useCreateUser } from '../model/useCreateUser';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateUserModal = ({ open, onClose }: CreateUserModalProps) => {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useCreateUser();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      mutate(values, {
        onSuccess: () => {
          form.resetFields();
          onClose();
        },
      });
    });
  };

  return (
    <Modal
      title="Создать пользователя"
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      confirmLoading={isLoading}
      okText="Создать">
      <Form form={form} layout="vertical">
        <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Аватар (URL)"
          name="avatar"
          rules={[{ required: true, message: 'Введите ссылку на аватар' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
