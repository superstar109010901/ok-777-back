'use client';

import React, { useState } from 'react';
import { Card, Steps, Button, Typography, Space, Row, Col, Table, Tag, Pagination, message } from 'antd';

import { 
  CheckCircleOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  EyeOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Step } = Steps;

interface ContentItem {
  key: string;
  contentId: string;
  adjustmentContent: string;
  currentStatus: string;
  creationTime: string;
}

export default function BasicDetailsPage() {
  
  const [loading, setLoading] = useState(false);

  const steps = [
    {
      title: '提交修改',
      description: 'Submit Modification',
      status: 'finish',
      icon: <CheckCircleOutlined />
    },
    {
      title: '审核中',
      description: 'Under Review',
      status: 'process',
      icon: <ClockCircleOutlined />
    },
    {
      title: '修改完成',
      description: 'Modification Complete',
      status: 'wait',
      icon: <CheckCircleOutlined />
    }
  ];

  const contentData: ContentItem[] = [
    {
      key: '1',
      contentId: '23',
      adjustmentContent: '每日推荐视频集',
      currentStatus: 'under_review',
      creationTime: '2021-02-28 10:30'
    },
    {
      key: '2',
      contentId: '25',
      adjustmentContent: '每日推荐视频集',
      currentStatus: 'approved',
      creationTime: '2021-02-28 10:30'
    }
  ];

  const getStatusTag = (status: string) => {
    switch (status) {
      case 'under_review':
        return <Tag color="blue" icon={<ClockCircleOutlined />}>审核中</Tag>;
      case 'approved':
        return <Tag color="green" icon={<CheckCircleOutlined />}>已通过</Tag>;
      default:
        return <Tag>未知状态</Tag>;
    }
  };

  const columns = [
    {
      title: '内容编号',
      dataIndex: 'contentId',
      key: 'contentId',
      width: 100,
    },
    {
      title: '调整内容',
      dataIndex: 'adjustmentContent',
      key: 'adjustmentContent',
      width: 200,
    },
    {
      title: '当前状态',
      dataIndex: 'currentStatus',
      key: 'currentStatus',
      width: 120,
      render: (status: string) => getStatusTag(status),
    },
    {
      title: '创建时间',
      dataIndex: 'creationTime',
      key: 'creationTime',
      width: 150,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => (
        <Button type="link" size="small">
          查看
        </Button>
      ),
    },
  ];

  const handleCancelProcess = () => {
    message.warning('流程已取消');
  };

  const handleBack = () => {
    message.info('返回上一页');
  };

  const handleView = (record: ContentItem) => {
    message.info(`查看内容 ${record.contentId}`);
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>创建渠道表单</Title>
      </div>

      {/* Step Indicator */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Steps current={1} size="small" style={{ flex: 1 }}>
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
          <Space>
            <Button onClick={handleCancelProcess}>
              取消流程
            </Button>
            <Button type="primary" onClick={handleBack}>
              返回
            </Button>
          </Space>
        </div>
      </Card>

      {/* Current Video Parameters */}
      <Card 
        title={
          <Space>
            <VideoCameraOutlined style={{ color: '#1890ff' }} />
            <span>现视频参数</span>
          </Space>
        }
        style={{ marginBottom: '16px' }}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>配置模式:</Text> <Text>自定</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码分辨率:</Text> <Text type="secondary">(空)</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率默认值:</Text> <Text>1500</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码帧率:</Text> <Text>15 fps</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码帧率:</Text> <Text>15 fps</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Current Audio Parameters */}
      <Card 
        title={
          <Space>
            <AudioOutlined style={{ color: '#52c41a' }} />
            <span>现音频参数</span>
          </Space>
        }
        style={{ marginBottom: '16px' }}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>配置模式:</Text> <Text>自定</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码分辨率:</Text> <Text type="secondary">(空)</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Original Video Parameters */}
      <Card 
        title={
          <Space>
            <VideoCameraOutlined style={{ color: '#faad14' }} />
            <span>原视频参数</span>
          </Space>
        }
        style={{ marginBottom: '16px' }}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>配置模式:</Text> <Text>自定</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码分辨率:</Text> <Text type="secondary">(空)</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率默认值:</Text> <Text>1500</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码帧率:</Text> <Text>15 fps</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码帧率:</Text> <Text>15 fps</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Original Audio Parameters */}
      <Card 
        title={
          <Space>
            <AudioOutlined style={{ color: '#722ed1' }} />
            <span>原音频参数</span>
          </Space>
        }
        style={{ marginBottom: '24px' }}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>配置模式:</Text> <Text>自定</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码分辨率:</Text> <Text type="secondary">(空)</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div>
              <Text strong>采样分辨率:</Text> <Text>720*1280</Text>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Text strong>编码码率最小值:</Text> <Text>1300</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Content Adjustment Table */}
      <Card title="内容调整记录">
        <Table
          columns={columns}
          dataSource={contentData}
          pagination={false}
          scroll={{ x: 'max-content' }}
          size="small"
        />
        <div style={{ marginTop: '16px', textAlign: 'right' }}>
          <Space>
            <Text type="secondary">共2条</Text>
            <Pagination
              current={51}
              total={100}
              pageSize={2}
              showSizeChanger={false}
              showQuickJumper={false}
              size="small"
              onChange={(page) => console.log('Page changed:', page)}
            />
          </Space>
        </div>
      </Card>
    </div>
  );
}
