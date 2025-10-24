'use client';

import React, { useState } from 'react';
import { Card, Form, Input, Button, Upload, Avatar, Row, Col, Divider, Typography, Space, Switch, Select, DatePicker, message } from 'antd';

import { 
  UserOutlined,
  CameraOutlined,
  EditOutlined,
  SaveOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function PersonalPage() {
  
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    form.resetFields();
  };

  const userInfo = {
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '+86 138 0013 8000',
    position: '高级前端开发工程师',
    department: '技术部',
    location: '北京市朝阳区',
    joinDate: null,
    avatar: null,
  };

  return (
    <div>
      <Title level={2}>{''}</Title>

      <Row gutter={[24, 24]}>
        {/* Profile Information */}
        <Col xs={24} lg={16}>
          <Card 
            title="个人信息" 
            extra={
              !isEditing ? (
                <Button icon={<EditOutlined />} onClick={handleEdit}>
                  编辑
                </Button>
              ) : (
                <Space>
                  <Button onClick={handleCancel}>取消</Button>
                  <Button type="primary" icon={<SaveOutlined />} onClick={() => form.submit()}>
                    保存
                  </Button>
                </Space>
              )
            }
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={userInfo}
              disabled={!isEditing}
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={''}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input prefix={<UserOutlined />} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={''}
                    rules={[
                      { required: true, message: '' },
                      { type: 'email', message: '' }
                    ]}
                  >
                    <Input prefix={<MailOutlined />} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={''}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input prefix={<PhoneOutlined />} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="position"
                    label={''}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="department"
                    label={''}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Select>
                      <Select.Option value="engineering">{''}</Select.Option>
                      <Select.Option value="marketing">{''}</Select.Option>
                      <Select.Option value="sales">{''}</Select.Option>
                      <Select.Option value="hr">{''}</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="location"
                    label={''}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input prefix={<EnvironmentOutlined />} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="joinDate"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="bio"
                label={''}
              >
                <TextArea 
                  rows={4} 
                  placeholder={''}
                  showCount
                  maxLength={200}
                />
              </Form.Item>
            </Form>
          </Card>

          {/* Security Settings */}
          <Card title={''} style={{ marginTop: '24px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Text strong>{''}</Text>
                  <div style={{ color: '#666', fontSize: '12px' }}>
                    {''}
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Divider style={{ margin: '12px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Text strong>{''}</Text>
                  <div style={{ color: '#666', fontSize: '12px' }}>
                    {''}
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Divider style={{ margin: '12px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Text strong>{''}</Text>
                  <div style={{ color: '#666', fontSize: '12px' }}>
                    {''}
                  </div>
                </div>
                <Button icon={<LockOutlined />}>{''}</Button>
              </div>
            </Space>
          </Card>
        </Col>

        {/* Avatar and Quick Actions */}
        <Col xs={24} lg={8}>
          <Card title={''} style={{ marginBottom: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <Avatar size={120} icon={<UserOutlined />} style={{ marginBottom: '16px' }} />
              <div>
                <Upload
                  name="avatar"
                  listType="text"
                  beforeUpload={() => false}
                  showUploadList={false}
                >
                  <Button icon={<CameraOutlined />}>{''}</Button>
                </Upload>
              </div>
            </div>
          </Card>

          {/* Account Statistics */}
          <Card title={''}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>{''}</Text>
                <Text strong>2022-03-15</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>{''}</Text>
                <Text strong>2024-01-15 14:30</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>{''}</Text>
                <Text strong>1,234</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>{''}</Text>
                <Text strong>567</Text>
              </div>
            </Space>
          </Card>

          {/* Quick Actions */}
          <Card title={''} style={{ marginTop: '24px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button block icon={<EditOutlined />}>
                {''}
              </Button>
              <Button block icon={<LockOutlined />}>
                {''}
              </Button>
              <Button block icon={<MailOutlined />}>
                {''}
              </Button>
              <Button block icon={<UserOutlined />}>
                {''}
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
