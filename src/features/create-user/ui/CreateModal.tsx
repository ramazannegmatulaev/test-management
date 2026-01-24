import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
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
      title="Создание пользователя"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      confirmLoading={isLoading}
      okText="Создать"
      cancelText="Отмена">
      <Form form={form} layout="vertical">
        <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Ссылка на аватарку"
          name="avatar"
          rules={[{ required: true, message: 'Введите ссылку на аватар' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
