'use client';

import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Typography, Button, Space, Tabs, Tag, List, Avatar } from 'antd';
import { 
  FileTextOutlined,
  UserOutlined,
  MessageOutlined,
  RiseOutlined,
  BarChartOutlined,
  SettingOutlined,
  TeamOutlined,
  RocketOutlined,
  SendOutlined,
  BellOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  ApiOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';

const { Title, Text } = Typography;

// ECharts configurations for workbench
const contentDataTrendOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['总内容量']
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2021-03-09', '2021-03-10', '2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16']
  },
  yAxis: {
    type: 'value',
    max: 60000
  },
  series: [
    {
      name: '总内容量',
      type: 'line',
      data: [20000, 25000, 39068, 35000, 40000, 45000, 50000, 55000],
      smooth: true,
      itemStyle: { color: '#1890ff' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'rgba(24, 144, 255, 0.3)'
          }, {
            offset: 1, color: 'rgba(24, 144, 255, 0.1)'
          }]
        }
      }
    }
  ]
};

const contentCategoryOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    bottom: 'bottom',
    data: ['纯文本', '图文类', '视频类']
  },
  series: [
    {
      name: '内容类别分布',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 16, name: '纯文本', itemStyle: { color: '#1890ff' } },
        { value: 48, name: '图文类', itemStyle: { color: '#52c41a' } },
        { value: 36, name: '视频类', itemStyle: { color: '#722ed1' } }
      ]
    }
  ]
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('text');

  // Hot content data
  const hotContentData = [
    {
      key: '1',
      rank: 1,
      title: '经济日报:财政政策要精准...',
      clicks: '346.3w+',
      dailyIncrease: '35% ▲'
    },
    {
      key: '2',
      rank: 2,
      title: '经济日报:财政政策要精准...',
      clicks: '346.3w+',
      dailyIncrease: '35% ▲'
    },
    {
      key: '3',
      rank: 3,
      title: '经济日报:财政政策要精准...',
      clicks: '346.3w+',
      dailyIncrease: '35% ▲'
    },
    {
      key: '4',
      rank: 4,
      title: '经济日报:财政政策要精准...',
      clicks: '346.3w+',
      dailyIncrease: '35% ▲'
    },
    {
      key: '5',
      rank: 5,
      title: '经济日报:财政政策要精准...',
      clicks: '346.3w+',
      dailyIncrease: '35% ▲'
    }
  ];

  const hotContentColumns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      width: 60,
    },
    {
      title: '内容标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '点击量',
      dataIndex: 'clicks',
      key: 'clicks',
      width: 100,
    },
    {
      title: '日涨量',
      dataIndex: 'dailyIncrease',
      key: 'dailyIncrease',
      width: 100,
      render: (text: string) => <Text style={{ color: '#52c41a' }}>{text}</Text>
    },
  ];

  // Management sections data
  const managementItems = [
    { icon: <FileTextOutlined />, title: '内容管理' },
    { icon: <BarChartOutlined />, title: '内容统计' },
    { icon: <SettingOutlined />, title: '高级管理' },
    { icon: <RocketOutlined />, title: '线上推广' },
    { icon: <SendOutlined />, title: '内容投放' }
  ];

  const managementItems2 = [
    { icon: <BarChartOutlined />, title: '数据统计' },
    { icon: <FileTextOutlined />, title: '内容管理' },
    { icon: <SettingOutlined />, title: '高级管理' }
  ];

  // Announcements data
  const announcements = [
    { type: 'activity', title: '内容最新优惠活动', tag: '活动' },
    { type: 'message', title: '新增内容尚未通过审核,详...', tag: '消息' },
    { type: 'notification', title: '新增内容尚未通过审核,详...', tag: '通知' },
    { type: 'notification', title: '新增内容尚未通过审核,详...', tag: '通知' },
    { type: 'message', title: '新增内容尚未通过审核,详...', tag: '消息' }
  ];

  const getTagColor = (type: string) => {
    switch (type) {
      case 'activity': return 'blue';
      case 'message': return 'green';
      case 'notification': return 'orange';
      default: return 'default';
    }
  };

  // Help documents data
  const helpDocuments = [
    { title: '产品概括', icon: <BookOutlined /> },
    { title: '使用指南', icon: <QuestionCircleOutlined /> },
    { title: '接入流程', icon: <PlayCircleOutlined /> },
    { title: '接口文档', icon: <ApiOutlined /> }
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div style={{ marginBottom: '24px' }}>
        <Space>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>欢迎回来, Ryan Septimus</Text>
          <Text style={{ fontSize: '16px' }}>👋</Text>
        </Space>
      </div>

      {/* Key Metrics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="线上总内容"
              value="373.5w+"
              prefix={<FileTextOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="线上总内容"
              value="368"
              prefix={<UserOutlined style={{ color: '#722ed1' }} />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="日新增评论"
              value="8874"
              prefix={<MessageOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="较昨日新增"
              value="2.8%"
              prefix={<RiseOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
              suffix="▲"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        {/* Left Column */}
        <Col xs={24} lg={16}>
          {/* Content Data Trend Chart */}
          <Card 
            title="内容数据 (近7)" 
            extra={<Button type="link">查看更多</Button>}
            style={{ marginBottom: '24px' }}
          >
            <div style={{ height: '300px' }}>
              <ReactECharts option={contentDataTrendOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>

          {/* Online Hot Content Table */}
          <Card 
            title="线上热门内" 
            extra={<Button type="link">查看更多</Button>}
          >
            <Tabs 
              activeKey={activeTab} 
              onChange={setActiveTab}
              items={[
                {
                  key: 'text',
                  label: '文本',
                  children: (
                    <Table
                      columns={hotContentColumns}
                      dataSource={hotContentData}
                      pagination={false}
                      size="small"
                    />
                  )
                },
                {
                  key: 'image',
                  label: '图文',
                  children: (
                    <Table
                      columns={hotContentColumns}
                      dataSource={hotContentData}
                      pagination={false}
                      size="small"
                    />
                  )
                },
                {
                  key: 'video',
                  label: '视频',
                  children: (
                    <Table
                      columns={hotContentColumns}
                      dataSource={hotContentData}
                      pagination={false}
                      size="small"
                    />
                  )
                }
              ]}
            />
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} lg={8}>
          {/* Content Category Distribution */}
          <Card 
            title="内容类别占" 
            style={{ marginBottom: '24px' }}
          >
            <div style={{ height: '250px' }}>
              <ReactECharts option={contentCategoryOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>

          {/* Management Section 1 */}
          <Card 
            title="线上热门内" 
            extra={<Button type="link">管理</Button>}
            style={{ marginBottom: '24px' }}
          >
            <Row gutter={[8, 8]}>
              {managementItems.map((item, index) => (
                <Col xs={8} key={index}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '16px 8px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px', color: '#1890ff' }}>
                      {item.icon}
                    </div>
                    <Text style={{ fontSize: '12px' }}>{item.title}</Text>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Management Section 2 */}
          <Card 
            title="线上热门内" 
            style={{ marginBottom: '24px' }}
          >
            <Row gutter={[8, 8]}>
              {managementItems2.map((item, index) => (
                <Col xs={8} key={index}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '16px 8px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px', color: '#1890ff' }}>
                      {item.icon}
                    </div>
                    <Text style={{ fontSize: '12px' }}>{item.title}</Text>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Empty Placeholder */}
          <Card style={{ marginBottom: '24px', textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: '48px', color: '#d9d9d9', marginBottom: '16px' }}>
              📦
            </div>
            <Text type="secondary">暂无内容</Text>
          </Card>

          {/* Announcements */}
          <Card 
            title="公告" 
            extra={<Button type="link">查看更多</Button>}
            style={{ marginBottom: '24px' }}
          >
            <List
              dataSource={announcements}
              renderItem={item => (
                <List.Item style={{ padding: '8px 0' }}>
                  <List.Item.Meta
                    title={
                      <Space>
                        <Tag color={getTagColor(item.type)}>{item.tag}</Tag>
                        <Text style={{ fontSize: '14px' }}>{item.title}</Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Help Documents */}
          <Card 
            title="帮助文档" 
            extra={<Button type="link">查看更多</Button>}
          >
            <Row gutter={[8, 8]}>
              {helpDocuments.map((doc, index) => (
                <Col xs={12} key={index}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '16px 8px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ fontSize: '20px', marginBottom: '8px', color: '#1890ff' }}>
                      {doc.icon}
                    </div>
                    <Text style={{ fontSize: '12px' }}>{doc.title}</Text>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}