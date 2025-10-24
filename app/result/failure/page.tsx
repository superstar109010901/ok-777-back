'use client';

import React from 'react';
import { Card, Button, Typography, Space, Result, List } from 'antd';

import { 
  CloseCircleOutlined,
  HomeOutlined,
  EditOutlined,
  LinkOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function FailurePage() {
  

  const failureReasons = [
    {
      title: '当前域名未备案,备案流程请查看:',
      link: '备案流程',
      description: '域名备案是网站上线的前置条件，请按照相关流程完成备案。'
    },
    {
      title: '你的用户组不具有进行此操作的权限;',
      link: '申请权限',
      description: '请联系管理员申请相应权限，或联系技术支持获取帮助。'
    }
  ];

  const handleBackToHome = () => {
    // In a real app, you would navigate to the home page
    console.log('Navigate to home page');
  };

  const handleReturnToModify = () => {
    // In a real app, you would navigate back to the form
    console.log('Return to modify form');
  };

  const handleApplyPermission = () => {
    // In a real app, you would navigate to permission application
    console.log('Apply for permissions');
  };

  const handleFilingProcess = () => {
    // In a real app, you would navigate to filing process
    console.log('View filing process');
  };

  return (
    <div style={{ textAlign: 'center', padding: '24px' }}>
      <Card style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '48px 0',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}>
        <CloseCircleOutlined style={{ fontSize: '80px', color: '#ff4d4f', marginBottom: '24px' }} />
        <Title level={2} style={{ color: '#ff4d4f', marginBottom: '8px' }}>提交失败</Title>
        <Text type="secondary" style={{ fontSize: '16px', marginBottom: '40px', display: 'block' }}>
          表单提交失败，请检查以下问题后重试
        </Text>

        <Space size="large" style={{ marginBottom: '40px' }}>
          <Button 
            icon={<HomeOutlined />} 
            onClick={handleBackToHome}
            style={{ height: '40px', minWidth: '120px' }}
          >
            回到首页
          </Button>
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            onClick={handleReturnToModify}
            style={{ height: '40px', minWidth: '160px' }}
          >
            返回修改
          </Button>
        </Space>

        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <Title level={4} style={{ marginBottom: '24px' }}>当前进度</Title>
          <Card style={{ background: '#fafafa', border: '1px solid #d9d9d9' }}>
            <List
              dataSource={failureReasons}
              renderItem={(item, index) => (
                <List.Item style={{ border: 'none', padding: '12px 0' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ marginBottom: '8px' }}>
                      <Text strong style={{ color: '#ff4d4f' }}>
                        {index + 1}. {item.title}
                      </Text>
                      <Button 
                        type="link" 
                        icon={<LinkOutlined />}
                        onClick={index === 0 ? handleFilingProcess : handleApplyPermission}
                        style={{ padding: '0', height: 'auto', color: '#1890ff' }}
                      >
                        {item.link}
                      </Button>
                    </div>
                    <Text type="secondary" style={{ fontSize: '14px' }}>
                      {item.description}
                    </Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Card>
    </div>
  );
}