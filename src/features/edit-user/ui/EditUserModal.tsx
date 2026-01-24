import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';
import { useEditUser } from '../model/useEditUser';
import { User } from '../../../entities/model/types';

interface EditUserModalProps {
  open: boolean;
  user: User | null;
  onClose: () => void;
}

export const EditUserModal = ({ open, user, onClose }: EditUserModalProps) => {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useEditUser();

  useEffect(() => {
    if (user && open) {
      form.setFieldsValue({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      });
    }
  }, [user, open, form]);

  const handleFinish = (values: { name: string; avatar: string }) => {
    if (!user) return;
    mutate(
      { id: user.id, ...values },
      {
        onSuccess: () => {
          form.resetFields();
          onClose();
        },
      },
    );
  };

  return (
    <Modal
      title="Редактировать пользователя"
      open={open}
      onOk={() => form.submit()}
      onCancel={onClose}
      confirmLoading={isLoading}
      okText="Сохранить изменения">
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="id" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Имя" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Ссылка на аватарку" name="avatar" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
