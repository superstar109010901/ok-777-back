'use client';

import React, { useState } from 'react';
import { Card, Form, Input, Select, DatePicker, Button, Steps, Typography, Space, message } from 'antd';

import { 
  CalendarOutlined,
  LinkOutlined,
  TagOutlined,
  UserOutlined
} from '@ant-design/icons';
import { delay } from '../../utils/delay';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Step } = Steps;

export default function DistributionFormPage() {
  
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      title: '选择基础信息',
      description: '创建渠道活动',
      content: 'basic'
    },
    {
      title: '输入渠道信息',
      description: '输入详细的渠道内容',
      content: 'channel'
    },
    {
      title: '完成创建',
      description: '创建成功',
      content: 'complete'
    }
  ];

  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values:', values);
      
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        message.success('基础信息已保存');
      }
    } catch (error) {
      message.error('请填写必填字段');
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      console.log('Final form values:', values);
      
      // Simulate API call
      await delay(1000);
      
      message.success('渠道创建成功！');
      setCurrentStep(2);
    } catch (error) {
      message.error('创建失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Card style={{ marginTop: '24px' }}>
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                activityName: '推广',
                channelType: 'all',
                promotionAddress: '推广'
              }}
            >
              <Form.Item
                name="activityName"
                label={
                  <span>
                    <span style={{ color: '#ff4d4f' }}>*</span>
                    活动名称
                  </span>
                }
                rules={[{ required: true, message: '请输入活动名称' }]}
              >
                <Input placeholder="请输入活动名称" />
              </Form.Item>

              <Form.Item
                name="channelType"
                label={
                  <span>
                    <span style={{ color: '#ff4d4f' }}>*</span>
                    渠道类型
                  </span>
                }
                rules={[{ required: true, message: '请选择渠道类型' }]}
              >
                <Select placeholder="请选择渠道类型">
                  <Option value="all">全部</Option>
                  <Option value="social">社交媒体</Option>
                  <Option value="email">邮件营销</Option>
                  <Option value="search">搜索引擎</Option>
                  <Option value="display">展示广告</Option>
                  <Option value="video">视频广告</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="createTime"
                label={
                  <span>
                    <span style={{ color: '#ff4d4f' }}>*</span>
                    创建时间
                  </span>
                }
                rules={[{ required: true, message: '请选择创建时间' }]}
              >
                <RangePicker 
                  placeholder={['开始日期', '结束日期']}
                  style={{ width: '100%' }}
                  suffixIcon={<CalendarOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="promotionAddress"
                label={
                  <span>
                    <span style={{ color: '#ff4d4f' }}>*</span>
                    推广地址
                  </span>
                }
                rules={[{ required: true, message: '请输入推广地址' }]}
              >
                <Input 
                  placeholder="请输入推广地址"
                  prefix={<LinkOutlined />}
                />
              </Form.Item>
            </Form>
          </Card>
        );

      case 1:
        return (
          <Card style={{ marginTop: '24px' }}>
            <Form
              form={form}
              layout="vertical"
            >
              <Form.Item
                name="channelName"
                label={
                  <span>
                    <span style={{ color: '#ff4d4f' }}>*</span>
                    渠道名称
                  </span>
                }
                rules={[{ required: true, message: '请输入渠道名称' }]}
              >
                <Input placeholder="请输入渠道名称" />
              </Form.Item>

              <Form.Item
                name="channelDescription"
                label="渠道描述"
              >
                <Input.TextArea 
                  placeholder="请输入渠道描述"
                  rows={4}
                />
              </Form.Item>

              <Form.Item
                name="targetAudience"
                label="目标受众"
              >
                <Select 
                  mode="multiple"
                  placeholder="请选择目标受众"
                  style={{ width: '100%' }}
                >
                  <Option value="young">年轻用户</Option>
                  <Option value="middle">中年用户</Option>
                  <Option value="senior">老年用户</Option>
                  <Option value="business">商务用户</Option>
                  <Option value="student">学生用户</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="budget"
                label="预算"
              >
                <Input 
                  placeholder="请输入预算金额"
                  suffix="元"
                />
              </Form.Item>
            </Form>
          </Card>
        );

      case 2:
        return (
          <Card style={{ marginTop: '24px', textAlign: 'center' }}>
            <div style={{ padding: '40px 0' }}>
              <div style={{ fontSize: '48px', color: '#52c41a', marginBottom: '16px' }}>
                ✓
              </div>
              <Title level={3} style={{ color: '#52c41a' }}>
                渠道创建成功！
              </Title>
              <Text type="secondary">
                您的渠道活动已成功创建，可以开始推广了。
              </Text>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>创建渠道表单</Title>
      </div>

      {/* Step Indicator */}
      <Card>
        <Steps current={currentStep} size="small">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              status={index === currentStep ? 'process' : index < currentStep ? 'finish' : 'wait'}
            />
          ))}
        </Steps>
      </Card>

      {/* Step Content */}
      {renderStepContent()}

      {/* Action Buttons */}
      {currentStep < 2 && (
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Space>
            {currentStep > 0 && (
              <Button onClick={handlePrev}>
                上一步
              </Button>
            )}
            {currentStep < 1 ? (
              <Button type="primary" onClick={handleNext}>
                下一步
              </Button>
            ) : (
              <Button 
                type="primary" 
                onClick={handleSubmit}
                loading={loading}
              >
                完成创建
              </Button>
            )}
          </Space>
        </div>
      )}

      {currentStep === 2 && (
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Button type="primary" onClick={() => {
            setCurrentStep(0);
            form.resetFields();
          }}>
            创建新渠道
          </Button>
        </div>
      )}
    </div>
  );
}
