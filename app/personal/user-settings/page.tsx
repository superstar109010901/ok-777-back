'use client';

import React, { useState } from 'react';
import { Card, Avatar, Typography, Tabs, Form, Input, Select, Button, Row, Col, Space, message } from 'antd';

import { 
  CameraOutlined,
  CheckCircleOutlined,
  EditOutlined
} from '@ant-design/icons';
import { delay } from '../../utils/delay';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function UserSettingsPage() {
  
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSave = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await delay(1000);
      message.success('保存成功！');
      console.log('Form values:', values);
    } catch (error) {
      message.error('保存失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    form.resetFields();
    message.info('表单已重置');
  };

  const handleModifyAuth = () => {
    message.info('跳转到实名认证修改页面');
  };

  const handleModifyPhone = () => {
    message.info('跳转到手机号码修改页面');
  };

  return (
    <div>
      {/* User Profile Card */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Avatar 
                size={120} 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=cat"
                style={{ backgroundColor: '#87d068' }}
              />
              <Button 
                type="primary" 
                shape="circle" 
                size="small"
                icon={<CameraOutlined />}
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  right: 0,
                  transform: 'translate(50%, 50%)'
                }}
              />
            </div>
          </Col>
          
          <Col xs={24} sm={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <div style={{ marginBottom: '8px' }}>
                  <Text strong>用户名: </Text>
                  <Text>dsfuis</Text>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <Text strong>账号ID: </Text>
                  <Text>2489372598</Text>
                </div>
                <div>
                  <Text strong>注册时间: </Text>
                  <Text>2021-06-30</Text>
                </div>
              </Col>
              
              <Col xs={24} sm={12}>
                <div style={{ marginBottom: '8px' }}>
                  <Text strong>实名认证: </Text>
                  <Text style={{ color: '#52c41a' }}>已认证</Text>
                  <Button type="link" size="small" onClick={handleModifyAuth}>
                    修改
                  </Button>
                </div>
                <div>
                  <Text strong>手机号码: </Text>
                  <Text>2489372598</Text>
                  <Button type="link" size="small" onClick={handleModifyPhone}>
                    修改
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Settings Tabs */}
      <Card>
        <Tabs 
          defaultActiveKey="basic" 
          type="card"
          items={[
            {
              key: 'basic',
              label: '基础信息',
              children: (
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSave}
                  initialValues={{
                    email: '推广',
                    nickname: '推广',
                    detailedAddress: '推广'
                  }}
                  style={{ maxWidth: '600px', marginTop: '24px' }}
                >
                  <Form.Item
                    name="email"
                    label={
                      <span>
                        <span style={{ color: '#ff4d4f' }}>*</span>
                        邮箱
                      </span>
                    }
                    rules={[{ required: true, message: '请输入邮箱' }]}
                  >
                    <Input placeholder="请输入邮箱" />
                  </Form.Item>

                  <Form.Item
                    name="nickname"
                    label={
                      <span>
                        <span style={{ color: '#ff4d4f' }}>*</span>
                        昵称
                      </span>
                    }
                    rules={[{ required: true, message: '请输入昵称' }]}
                  >
                    <Input placeholder="请输入昵称" />
                  </Form.Item>

                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="country"
                        label={
                          <span>
                            <span style={{ color: '#ff4d4f' }}>*</span>
                            国家/地区
                          </span>
                        }
                        rules={[{ required: true, message: '请选择国家/地区' }]}
                      >
                        <Select placeholder="请选择">
                          <Option value="china">中国</Option>
                          <Option value="usa">美国</Option>
                          <Option value="japan">日本</Option>
                          <Option value="korea">韩国</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="location"
                        label={
                          <span>
                            <span style={{ color: '#ff4d4f' }}>*</span>
                            所在区域
                          </span>
                        }
                        rules={[{ required: true, message: '请选择所在区域' }]}
                      >
                        <Select placeholder="请选择">
                          <Option value="beijing">北京</Option>
                          <Option value="shanghai">上海</Option>
                          <Option value="guangzhou">广州</Option>
                          <Option value="shenzhen">深圳</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="detailedAddress"
                    label="具体地址"
                  >
                    <Input placeholder="请输入具体地址" />
                  </Form.Item>

                  <Form.Item
                    name="personalIntro"
                    label="个人简介"
                  >
                    <TextArea 
                      placeholder="请输入内容"
                      rows={4}
                      style={{ resize: 'vertical' }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Space>
                      <Button type="primary" htmlType="submit" loading={loading}>
                        保存
                      </Button>
                      <Button onClick={handleReset}>
                        重置
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              ),
            },
            {
              key: 'security',
              label: '安全设置',
              children: (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <Title level={4}>安全设置</Title>
                  <Text type="secondary">此功能正在开发中...</Text>
                </div>
              ),
            },
            {
              key: 'auth',
              label: '实名认证',
              children: (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <Title level={4}>实名认证</Title>
                  <Text type="secondary">此功能正在开发中...</Text>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
}
