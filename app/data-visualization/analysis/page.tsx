'use client';

import React from 'react';
import { Card, Row, Col, Typography, Space, Button, Table, Statistic } from 'antd';

import { 
  UserOutlined,
  FileTextOutlined,
  MessageOutlined,
  ShareAltOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';

const { Title, Text } = Typography;

// ECharts configurations for analysis page
const contentReleaseRatioOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['视频类', '图文类', '纯文本'],
    bottom: 10
  },
  grid: {
    left: '8%',
    right: '8%',
    bottom: '20%',
    top: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    axisLabel: {
      interval: 1
    }
  },
  yAxis: {
    type: 'value',
    max: 4000
  },
  series: [
    {
      name: '视频类',
      type: 'bar',
      stack: 'total',
      data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
      itemStyle: { color: '#87d068' }
    },
    {
      name: '图文类',
      type: 'bar',
      stack: 'total',
      data: [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400],
      itemStyle: { color: '#1890ff' }
    },
    {
      name: '纯文本',
      type: 'bar',
      stack: 'total',
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      itemStyle: { color: '#722ed1' }
    }
  ]
};

const contentTimeDistributionOption = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['视频类', '图文类', '纯文本'],
    bottom: 10
  },
  grid: {
    left: '8%',
    right: '8%',
    bottom: '20%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    axisLabel: {
      interval: 0
    }
  },
  yAxis: {
    type: 'value',
    max: 100,
    axisLabel: {
      formatter: '{value}%'
    }
  },
  series: [
    {
      name: '视频类',
      type: 'line',
      data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
      smooth: true,
      itemStyle: { color: '#87d068' }
    },
    {
      name: '图文类',
      type: 'line',
      data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      smooth: true,
      itemStyle: { color: '#1890ff' }
    },
    {
      name: '纯文本',
      type: 'line',
      data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      smooth: true,
      itemStyle: { color: '#722ed1' }
    }
  ]
};

export default function AnalysisPage() {
  

  // Popular authors data
  const popularAuthorsData = [
    {
      key: '1',
      rank: 1,
      author: '用魔法打败魔法',
      contentVolume: 1500,
      clickVolume: 32214
    },
    {
      key: '2',
      rank: 2,
      author: '王多余',
      contentVolume: 2100,
      clickVolume: 22145
    },
    {
      key: '3',
      rank: 3,
      author: '请叫我小李',
      contentVolume: 1800,
      clickVolume: 23567
    },
    {
      key: '4',
      rank: 4,
      author: 'Christopher',
      contentVolume: 1743,
      clickVolume: 12586
    },
    {
      key: '5',
      rank: 5,
      author: '-朵追逐月亮的向...',
      contentVolume: 1421,
      clickVolume: 12356
    },
    {
      key: '6',
      rank: 6,
      author: 'Christopher',
      contentVolume: 1743,
      clickVolume: 11586
    },
    {
      key: '7',
      rank: 7,
      author: '橙皮',
      contentVolume: 1421,
      clickVolume: 10356
    }
  ];

  const popularAuthorsColumns = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      width: 80,
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '内容量',
      dataIndex: 'contentVolume',
      key: 'contentVolume',
      sorter: (a: any, b: any) => a.contentVolume - b.contentVolume,
      render: (value: number) => value.toLocaleString()
    },
    {
      title: '点击量',
      dataIndex: 'clickVolume',
      key: 'clickVolume',
      sorter: (a: any, b: any) => a.clickVolume - b.clickVolume,
      render: (value: number) => value.toLocaleString()
    },
  ];

  return (
    <div>
      {/* Public Opinion Analysis KPI Cards */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>舆情分析</Title>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="访问总人数"
              value={12256}
              prefix={<UserOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff' }}
            />
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>较昨天</Text>
              <Text style={{ color: '#ff4d4f', marginLeft: '4px' }}>206</Text>
              <ArrowUpOutlined style={{ color: '#ff4d4f', marginLeft: '4px' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="内容发布量"
              value={1138}
              prefix={<FileTextOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>较昨天</Text>
              <Text style={{ color: '#52c41a', marginLeft: '4px' }}>405</Text>
              <ArrowUpOutlined style={{ color: '#52c41a', marginLeft: '4px' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="评论总量"
              value={4592}
              prefix={<MessageOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>较昨天</Text>
              <Text style={{ color: '#ff4d4f', marginLeft: '4px' }}>112</Text>
              <ArrowUpOutlined style={{ color: '#ff4d4f', marginLeft: '4px' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="分享总量"
              value={3256}
              prefix={<ShareAltOutlined style={{ color: '#722ed1' }} />}
              valueStyle={{ color: '#722ed1' }}
            />
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>较昨天</Text>
              <Text style={{ color: '#ff4d4f', marginLeft: '4px' }}>588</Text>
              <ArrowUpOutlined style={{ color: '#ff4d4f', marginLeft: '4px' }} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Content Release Ratio and Popular Authors */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={16}>
          <Card 
            title="内容发布比" 
            extra={<Button type="link">查看更多</Button>}
          >
            <div style={{ height: '400px' }}>
              <ReactECharts option={contentReleaseRatioOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card 
            title="热门作者榜" 
            extra={<Button type="link">查看更多</Button>}
          >
            <Table
              columns={popularAuthorsColumns}
              dataSource={popularAuthorsData}
              pagination={false}
              size="small"
              scroll={{ y: 300 }}
            />
          </Card>
        </Col>
      </Row>

      {/* Content Time Distribution */}
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card title="内容时段分">
            <div style={{ height: '400px' }}>
              <ReactECharts option={contentTimeDistributionOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}