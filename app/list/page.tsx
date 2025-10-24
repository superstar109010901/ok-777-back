'use client';

import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Input, Button, Switch, Space, Typography, Tag, Avatar } from 'antd';

import { 
  SearchOutlined,
  PlusOutlined,
  MoreOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FunnelPlotOutlined,
  UserOutlined,
  AppstoreOutlined,
  IdcardOutlined,
  ThunderboltOutlined,
  NodeIndexOutlined,
  SunOutlined,
  AimOutlined,
  ThunderboltFilled
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function CardListPage() {
  
  const [activeTab, setActiveTab] = useState('all');
  const [blockingRules, setBlockingRules] = useState([
    {
      id: 1,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: true
    },
    {
      id: 2,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: false
    },
    {
      id: 3,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: false
    },
    {
      id: 4,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: false
    },
    {
      id: 5,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: true
    },
    {
      id: 6,
      title: '内容屏蔽规则',
      description: '用户在执行特定的内容分发任务时,可使用内容屏蔽规则根据特定标签,过滤内容集合。',
      enabled: false
    }
  ]);

  const handleToggleRule = (ruleId: number) => {
    setBlockingRules(prevRules => 
      prevRules.map(rule => 
        rule.id === ruleId 
          ? { ...rule, enabled: !rule.enabled }
          : rule
      )
    );
  };

  const qualityInspectionCards = [
    {
      id: 1,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    },
    {
      id: 2,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    },
    {
      id: 3,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    },
    {
      id: 4,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    },
    {
      id: 5,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    },
    {
      id: 6,
      title: '视频类-历史导入',
      date: '2021-10-12 00:00:00',
      pendingInspection: 120,
      pendingSpotCheck: 0,
      status: 'pending'
    }
  ];

  const serviceCards = [
    {
      id: 1,
      title: '漏斗分析',
      icon: <FunnelPlotOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'enabled',
      buttonText: '取消开通'
    },
    {
      id: 2,
      title: '用户分布',
      icon: <UserOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'disabled',
      buttonText: '开通服务'
    },
    {
      id: 3,
      title: '资源分发',
      icon: <AppstoreOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'disabled',
      buttonText: '开通服务'
    },
    {
      id: 4,
      title: '用户画像分析',
      icon: <ThunderboltOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'disabled',
      buttonText: '开通服务'
    },
    {
      id: 5,
      title: '事件分析',
      icon: <FunnelPlotOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'enabled',
      buttonText: '取消开通'
    },
    {
      id: 6,
      title: '用户路径',
      icon: <NodeIndexOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'disabled',
      buttonText: '开通服务'
    },
    {
      id: 7,
      title: '间隔分析',
      icon: <SunOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'enabled-red',
      buttonText: '开通服务'
    },
    {
      id: 8,
      title: '归因分析',
      icon: <AimOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      description: '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。',
      status: 'disabled',
      buttonText: '开通服务'
    }
  ];


  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>卡片列表</Title>
      </div>

      {/* Tabs and Search */}
      <div style={{ marginBottom: '24px' }}>
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          tabBarExtraContent={
            <Input.Search 
              placeholder="搜索服务" 
              style={{ width: 200 }}
              prefix={<SearchOutlined />}
            />
          }
          items={[
            {
              key: 'all',
              label: (
                <span>
                  <ThunderboltFilled style={{ marginRight: '8px' }} />
                  全部
                </span>
              ),
            },
            {
              key: 'quality',
              label: (
                <span>
                  <ThunderboltFilled style={{ marginRight: '8px' }} />
                  内容质检
                </span>
              ),
            },
            {
              key: 'service',
              label: (
                <span>
                  <ThunderboltFilled style={{ marginRight: '8px' }} />
                  服务开通
                </span>
              ),
            },
            {
              key: 'rules',
              label: (
                <span>
                  <ThunderboltFilled style={{ marginRight: '8px' }} />
                  规则预制
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* Content Quality Inspection Section */}
      {(activeTab === 'quality' || activeTab === 'all') && (
        <div style={{ marginBottom: '32px' }}>
          <Title level={3} style={{ marginBottom: '16px' }}>内容质检</Title>
          <Row gutter={[16, 24]}>
            {/* Add New Card */}
            <Col xs={24} sm={12} lg={8} xl={6}>
              <Card 
                style={{ 
                  height: '200px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '2px dashed #d9d9d9',
                  cursor: 'pointer'
                }}
                hoverable
              >
                <div style={{ textAlign: 'center' }}>
                  <PlusOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                  <div>点击创建质检内容队列</div>
                </div>
              </Card>
            </Col>

            {/* Quality Inspection Cards */}
            {qualityInspectionCards.map((card) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={card.id}>
                <Card
                  title={card.title}
                  extra={<MoreOutlined />}
                  actions={[
                    <Button type="primary" size="small">质检</Button>,
                    <Button type="text" size="small" danger icon={<DeleteOutlined />}>删除</Button>
                  ]}
                  style={{ minHeight: '200px' }}
                  styles={{ body: { padding: '16px' } }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <Text type="secondary">{card.date}</Text>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <Text>待质检数 </Text>
                    <Text strong>{card.pendingInspection}</Text>
                  </div>
                  <div>
                    <Text>待抽检数 </Text>
                    <Text strong>{card.pendingSpotCheck}</Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Service Enabled Section */}
      {(activeTab === 'service' || activeTab === 'all') && (
        <div style={{ marginBottom: '32px' }}>
          <Title level={3} style={{ marginBottom: '16px' }}>服务开通</Title>
          <Row gutter={[16, 24]}>
            {serviceCards.map((service) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={service.id}>
                <Card
                  styles={{ body: { padding: '16px' } }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {service.icon}
                      <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{service.title}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {service.status === 'enabled' ? (
                        <Tag color="green" icon={<CheckCircleOutlined />}>已开通</Tag>
                      ) : service.status === 'enabled-red' ? (
                        <Tag color="red" icon={<CloseCircleOutlined />}>已开通</Tag>
                      ) : null}
                    </div>
                  </div>
                  <Paragraph 
                    style={{ 
                      fontSize: '12px', 
                      color: '#666', 
                      margin: '0 0 16px 0',
                      textAlign: 'left'
                    }}
                  >
                    {service.description}
                  </Paragraph>
                  <div className='flex justify-end'>
                    <Button 
                      type={service.status === 'enabled' ? 'default' : 'primary'} 
                      size="middle"
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Content Blocking Rules Section */}
      {(activeTab === 'rules' || activeTab === 'all') && (
        <div style={{ marginBottom: '32px' }}>
          <Title level={3} style={{ marginBottom: '16px' }}>规则预制</Title>
          <Row gutter={[16, 16]}>
            {blockingRules.map((rule) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={rule.id}>
                <Card
                  title={rule.title}
                  style={{ height: '200px' }}
                  extra={
                    <Switch 
                      checked={rule.enabled}
                      onChange={() => handleToggleRule(rule.id)}
                      checkedChildren="已开启"
                      unCheckedChildren="已关闭"
                    />
                  }
                >
                  <Paragraph 
                    style={{ 
                      fontSize: '12px', 
                      color: '#666', 
                      margin: 0
                    }}
                  >
                    {rule.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}