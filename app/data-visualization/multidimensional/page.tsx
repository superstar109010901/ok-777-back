'use client';

import React from 'react';
import { Card, Row, Col, Typography, Statistic } from 'antd';

import { 
  FileTextOutlined,
  LikeOutlined,
  EyeOutlined,
  UserOutlined,
  ShareAltOutlined,
  MessageOutlined,
  HeartOutlined
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const { Title } = Typography;

// ECharts configurations for multidimensional analysis
const trendLineChartOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    textStyle: { color: '#fff' }
  },
  legend: {
    data: ['内容曝光量', '内容点击量', '内容生产量', '活跃用户数'],
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
    data: ['12.11', '12.12', '12.13', '12.14', '12.15', '12.16', '12.17'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: '#666' }
  },
  yAxis: {
    type: 'value',
    max: 5000,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: '#666' },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#e0e0e0'
      }
    }
  },
  series: [
    {
      name: '内容曝光量',
      type: 'line',
      smooth: true,
      data: [1200, 1320, 1010, 1340, 900, 2300, 2100],
      itemStyle: { color: '#1890ff' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
          { offset: 1, color: 'rgba(24, 144, 255, 0)' }
        ])
      }
    },
    {
      name: '内容点击量',
      type: 'line',
      smooth: true,
      data: [2200, 1820, 1910, 2340, 2900, 3300, 3100],
      itemStyle: { color: '#52c41a' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(82, 196, 26, 0.3)' },
          { offset: 1, color: 'rgba(82, 196, 26, 0)' }
        ])
      }
    },
    {
      name: '内容生产量',
      type: 'line',
      smooth: true,
      data: [1500, 2320, 2010, 1540, 1900, 3300, 4100], 
      itemStyle: { color: '#faad14' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(250, 173, 20, 0.3)' },
          { offset: 1, color: 'rgba(250, 173, 20, 0)' }
        ])
      }
    },
    {
      name: '活跃用户数',
      type: 'line',
      smooth: true,
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      itemStyle: { color: '#722ed1' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(114, 46, 209, 0.3)' },
          { offset: 1, color: 'rgba(114, 46, 209, 0)' }
        ])
      }
    }
  ]
};

const sharesCommentsLikesOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    max: 1800,
    axisLabel: {
      formatter: '{value}k'
    }
  },
  yAxis: {
    type: 'category',
    data: ['点赞量', '评论量', '分享量']
  },
  series: [
    {
      type: 'bar',
      data: [800, 1200, 1620],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
          { offset: 1, color: 'rgba(24, 144, 255, 0)' }
        ])
      }
    }
  ]
};

const contentTopicDistributionOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['纯文本', '图文类', '视频类']
  },
  radar: {
    indicator: [
      { name: '国际', max: 100 },
      { name: '财经', max: 100 },
      { name: '科技', max: 100 },
      { name: '其他', max: 100 },
      { name: '体育', max: 100 },
      { name: '娱乐', max: 100 }
    ],
    radius: '60%'
  },
  series: [
    {
      name: '内容题材分布',
      type: 'radar',
      data: [
        {
          value: [80, 60, 70, 50, 40, 90],
          name: '纯文本',
          itemStyle: { color: '#87d068' }
        },
        {
          value: [60, 80, 50, 70, 60, 80],
          name: '图文类',
          itemStyle: { color: '#1890ff' }
        },
        {
          value: [70, 50, 90, 60, 80, 70],
          name: '视频类',
          itemStyle: { color: '#722ed1' }
        }
      ]
    }
  ]
};

const userRetentionTrendOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      type: 'line',
      data: [120, 132, 101, 134, 90, 230],
      smooth: true,
      lineStyle: { color: '#1890ff', width: 2 },
      itemStyle: { color: '#1890ff' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
          { offset: 1, color: 'rgba(24, 144, 255, 0)' }
        ])
      }
    }
  ]
};

const userRetentionVolumeOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      type: 'bar',
      data: [120, 132, 101, 134, 90, 230],
      itemStyle: { color: '#52c41a' }
    }
  ]
};

const contentConsumptionTrendOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      type: 'line',
      data: [120, 132, 101, 134, 90, 230],
      smooth: true,
      lineStyle: { color: '#1890ff', width: 2 },
      itemStyle: { color: '#1890ff' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
          { offset: 1, color: 'rgba(24, 144, 255, 0)' }
        ])
      }
    }
  ]
};

const contentConsumptionVolumeOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      type: 'bar',
      data: [120, 132, 101, 134, 90, 230],
      itemStyle: { color: '#52c41a' }
    }
  ]
};

const contentTimeDistributionOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '内容时段分',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 43, name: 'UGC原创', itemStyle: { color: '#1890ff' } },
        { value: 24, name: '国外网站', itemStyle: { color: '#52c41a' } },
        { value: 8, name: '转载文章', itemStyle: { color: '#faad14' } },
        { value: 4, name: '行业报告', itemStyle: { color: '#722ed1' } },
        { value: 21, name: '其他', itemStyle: { color: '#f5222d' } }
      ]
    }
  ]
};

export default function MultidimensionalAnalysisPage() {
  

  return (
    <div>
      {/* Data Overview Section */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>数据总览</Title>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="内容生产量"
              value={1902}
              prefix={<FileTextOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="内容点击量"
              value={2445}
              prefix={<LikeOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="内容曝光量"
              value={3056}
              prefix={<EyeOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="活跃用户数"
              value={688}
              prefix={<UserOutlined style={{ color: '#722ed1' }} />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Trend Line Chart */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col span={24}>
          <Card>
            <div style={{ height: '400px' }}>
              <ReactECharts option={trendLineChartOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Shares, Comments, Likes Chart and Content Topic Distribution */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={12}>
          <Card title="今日转评赞统计">
            <div style={{ height: '300px' }}>
              <ReactECharts option={sharesCommentsLikesOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="内容题材分布">
            <div style={{ height: '300px' }}>
              <ReactECharts option={contentTopicDistributionOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Four Metric Cards with Mini Charts */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4} style={{ marginBottom: '16px' }}>用户留存趋势</Title>
              <Statistic
                value={5982}
                valueStyle={{ color: '#1890ff', fontSize: '24px' }}
              />
              <div style={{ height: '60px', marginTop: '16px' }}>
                <ReactECharts option={userRetentionTrendOption} style={{ height: '100%', width: '100%' }} />
              </div>
              <div style={{ marginTop: '8px', color: '#ff4d4f' }}>1</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4} style={{ marginBottom: '16px' }}>用户留存量</Title>
              <Statistic
                value={2942}
                valueStyle={{ color: '#52c41a', fontSize: '24px' }}
              />
              <div style={{ height: '60px', marginTop: '16px' }}>
                <ReactECharts option={userRetentionVolumeOption} style={{ height: '100%', width: '100%' }} />
              </div>
              <div style={{ marginTop: '8px', color: '#52c41a' }}>206+</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4} style={{ marginBottom: '16px' }}>内容消费趋势</Title>
              <Statistic
                value={1382}
                valueStyle={{ color: '#1890ff', fontSize: '24px' }}
              />
              <div style={{ height: '60px', marginTop: '16px' }}>
                <ReactECharts option={contentConsumptionTrendOption} style={{ height: '100%', width: '100%' }} />
              </div>
              <div style={{ marginTop: '8px', color: '#52c41a' }}>28%+</div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4} style={{ marginBottom: '16px' }}>内容消费量</Title>
              <Statistic
                value={5382}
                valueStyle={{ color: '#52c41a', fontSize: '24px' }}
              />
              <div style={{ height: '60px', marginTop: '16px' }}>
                <ReactECharts option={contentConsumptionVolumeOption} style={{ height: '100%', width: '100%' }} />
              </div>
              <div style={{ marginTop: '8px', color: '#52c41a' }}>22+</div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Content Time Distribution Donut Charts */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card title="纯文本">
            <div style={{ height: '200px' }}>
              <ReactECharts option={contentTimeDistributionOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="图文类">
            <div style={{ height: '200px' }}>
              <ReactECharts option={contentTimeDistributionOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card title="视频类">
            <div style={{ height: '200px' }}>
              <ReactECharts option={contentTimeDistributionOption} style={{ height: '100%', width: '100%' }} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Legend for Donut Charts */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={24}>
          <div style={{ textAlign: 'center', color: '#666' }}>
            <span style={{ marginRight: '16px' }}>UGC原创</span>
            <span style={{ marginRight: '16px' }}>国外网站</span>
            <span style={{ marginRight: '16px' }}>转载文章</span>
            <span style={{ marginRight: '16px' }}>行业报告</span>
            <span>其他</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
