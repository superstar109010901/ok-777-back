'use client';

import React, { useState } from 'react';
import { Card, Button, Typography, Space, Steps, message, Row, Col } from 'antd';

import { 
  CheckCircleOutlined,
  ClockCircleOutlined,
  PrinterOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;

export default function SuccessPage() {
  
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      title: '提交申请',
      description: '2020/10/10 14:00:39',
      status: 'finish',
      icon: <CheckCircleOutlined />
    },
    {
      title: '直属领导审',
      description: '进行中',
      status: 'process',
      icon: <ClockCircleOutlined />
    },
    {
      title: '购买证书',
      description: '未开始',
      status: 'wait',
      icon: <ClockCircleOutlined />
    },
    {
      title: '安全测试',
      description: '未开始',
      status: 'wait',
      icon: <ClockCircleOutlined />
    },
    {
      title: '正式上线',
      description: '未开始',
      status: 'wait',
      icon: <ClockCircleOutlined />
    }
  ];

  const handlePrintResult = () => {
    setLoading(true);
    // Simulate print operation
    setTimeout(() => {
      message.success('打印结果已生成');
      setLoading(false);
    }, 1000);
  };

  const handleReturnToList = () => {
    message.info('返回项目列表');
    // In a real app, this would navigate to the project list
  };

  return (
    <div>
      {/* Success Message Card */}
      <Card 
        style={{ 
          textAlign: 'center', 
          padding: '60px 40px',
          marginBottom: '24px',
        }}
      >
        <div style={{ marginBottom: '32px' }}>
          <CheckCircleOutlined 
            style={{ 
              fontSize: '80px', 
              color: '#52c41a',
              marginBottom: '16px'
            }} 
          />
        </div>
        
        <Title level={2} style={{ color: '#52c41a', marginBottom: '8px' }}>
          提交成功
        </Title>
        
        <Text type="secondary" style={{ fontSize: '16px' }}>
          表单提交成功
        </Text>
      </Card>

      {/* Action Buttons */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <Space size="large">
            <Button 
              size="large"
              icon={<PrinterOutlined />}
              onClick={handlePrintResult}
              loading={loading}
              style={{ 
                minWidth: '120px',
                height: '40px'
              }}
            >
              打印结果
            </Button>
            
            <Button 
              type="primary" 
              size="large"
              icon={<ArrowLeftOutlined />}
              onClick={handleReturnToList}
              style={{ 
                minWidth: '140px',
                height: '40px'
              }}
            >
              返回项目列表
            </Button>
          </Space>
        </div>
      </Card>

      {/* Progress Timeline */}
      <Card title="当前进度">
        <Steps 
          current={1} 
          direction="horizontal"
          size="small"
          style={{ marginTop: '24px' }}
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              status={step.status as any}
              icon={step.icon}
            />
          ))}
        </Steps>
        
        
      </Card>
    </div>
  );
}
