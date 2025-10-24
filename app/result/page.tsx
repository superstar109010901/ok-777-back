'use client';

import React from 'react';
import { Card, Result, Button, Space, Typography, Row, Col, Statistic, Progress, Timeline } from 'antd';
import { 
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  ReloadOutlined,
  HomeOutlined,
  DownloadOutlined,
  ShareAltOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function ResultPage() {

  const results = [
    {
      type: 'success',
      title: '操作成功',
      description: '您的操作已成功完成',
      icon: <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '48px' }} />,
      actions: [
        <Button type="primary" key="view">{'查看详情'}</Button>,
        <Button key="download" icon={<DownloadOutlined />}>{'下载'}</Button>,
      ]
    },
    {
      type: 'error',
      title: '操作失败',
      description: '操作过程中出现错误',
      icon: <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '48px' }} />,
      actions: [
        <Button type="primary" key="retry" icon={<ReloadOutlined />}>{'重试'}</Button>,
        <Button key="contact">{'联系支持'}</Button>,
      ]
    },
    {
      type: 'warning',
      title: '警告',
      description: '请注意以下事项',
      icon: <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: '48px' }} />,
      actions: [
        <Button type="primary" key="continue">{'继续'}</Button>,
        <Button key="back">{'返回'}</Button>,
      ]
    },
    {
      type: 'info',
      title: '信息',
      description: '相关信息提示',
      icon: <InfoCircleOutlined style={{ color: '#1890ff', fontSize: '48px' }} />,
      actions: [
        <Button type="primary" key="learn">{'了解更多'}</Button>,
        <Button key="dismiss">{'关闭'}</Button>,
      ]
    }
  ];

  const processSteps = [
    { title: '步骤1', status: 'finish', description: '第一步描述' },
    { title: '步骤2', status: 'finish', description: '第二步描述' },
    { title: '步骤3', status: 'process', description: '第三步描述' },
    { title: '步骤4', status: 'wait', description: '第四步描述' },
  ];

  const statistics = [
    { title: '总处理数', value: 1234, color: '#1890ff' },
    { title: '成功数', value: 1156, color: '#52c41a' },
    { title: '失败数', value: 78, color: '#ff4d4f' },
    { title: '成功率', value: 93.7, suffix: '%', color: '#faad14' },
  ];

  return (
    <div>
      <Title level={2}>{'结果页面'}</Title>

      {/* Result Types */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        {results.map((result, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card>
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                {result.icon}
                <Title level={4} style={{ marginTop: '16px', marginBottom: '8px' }}>
                  {result.title}
                </Title>
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                  {result.description}
                </Text>
                <Space>
                  {result.actions}
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Process Status */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={12}>
          <Card title={'处理状态'}>
            <Timeline
              items={processSteps.map((step, index) => ({
                key: index,
                children: (
                  <div>
                    <Text strong>{step.title}</Text>
                    <div style={{ color: '#666', fontSize: '12px' }}>
                      {step.description}
                    </div>
                  </div>
                ),
                color: step.status === 'finish' ? 'green' : step.status === 'process' ? 'blue' : 'gray'
              }))}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={'进度'}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Progress 
                type="circle" 
                percent={75} 
                size={120}
                strokeColor="#52c41a"
              />
              <div style={{ marginTop: '16px' }}>
                <Text strong>{'整体进度'}</Text>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" size="large" icon={<ReloadOutlined />}>
                {'刷新状态'}
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Statistics */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        {statistics.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Action Results */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card title={'最近操作'}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ padding: '12px', background: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '6px' }}>
                <Text strong style={{ color: '#52c41a' }}>✓ {'操作1'}</Text>
                <div style={{ fontSize: '12px', color: '#666' }}>2分钟前</div>
              </div>
              <div style={{ padding: '12px', background: '#fff7e6', border: '1px solid #ffd591', borderRadius: '6px' }}>
                <Text strong style={{ color: '#faad14' }}>⚠ {'操作2'}</Text>
                <div style={{ fontSize: '12px', color: '#666' }}>5分钟前</div>
              </div>
              <div style={{ padding: '12px', background: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '6px' }}>
                <Text strong style={{ color: '#52c41a' }}>✓ {'操作3'}</Text>
                <div style={{ fontSize: '12px', color: '#666' }}>10分钟前</div>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={'下一步'}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ padding: '12px', background: '#f0f5ff', border: '1px solid #adc6ff', borderRadius: '6px' }}>
                <Text strong>1. {'下一步1'}</Text>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {'下一步1描述'}
                </div>
              </div>
              <div style={{ padding: '12px', background: '#f0f5ff', border: '1px solid #adc6ff', borderRadius: '6px' }}>
                <Text strong>2. {'下一步2'}</Text>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {'下一步2描述'}
                </div>
              </div>
              <div style={{ padding: '12px', background: '#f0f5ff', border: '1px solid #adc6ff', borderRadius: '6px' }}>
                <Text strong>3. {'下一步3'}</Text>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                  {'下一步3描述'}
                </div>
              </div>
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={'快速操作'}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button type="primary" block icon={<HomeOutlined />}>
                {'返回首页'}
              </Button>
              <Button block icon={<DownloadOutlined />}>
                {'下载报告'}
              </Button>
              <Button block icon={<ShareAltOutlined />}>
                {'分享结果'}
              </Button>
              <Button block icon={<ReloadOutlined />}>
                {'再次运行'}
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
