'use client';

import React, { useState } from 'react';
import { Card, Form, Input, Select, Button, Typography, Space, Row, Col, message } from 'antd';

import { 
  VideoCameraOutlined,
  AudioOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { delay } from '../../utils/delay';

const { Title } = Typography;
const { Option } = Select;

export default function GroupedFormPage() {
  
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await delay(1000);
      message.success('配置保存成功！');
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

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>分组表单</Title>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          videoConfigMode: 'custom',
          videoCaptureResolution: 'custom',
          audioConfigMode: 'custom',
          audioCaptureResolution: 'custom'
        }}
      >
        {/* Video Parameters Section */}
        <Card 
          title={
            <Space>
              <VideoCameraOutlined style={{ color: '#1890ff' }} />
              <span>视频参数</span>
            </Space>
          }
          style={{ marginBottom: '24px' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoConfigMode"
                label="配置模式"
              >
                <Select>
                  <Option value="auto">自动</Option>
                  <Option value="custom">自定义</Option>
                  <Option value="preset">预设</Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoEncodingResolution"
                label="编码分辨率"
              >
                <Select placeholder="请选择">
                  <Option value="720p">720p (1280x720)</Option>
                  <Option value="1080p">1080p (1920x1080)</Option>
                  <Option value="4k">4K (3840x2160)</Option>
                  <Option value="custom">自定义</Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoBitrateDefault"
                label="编码码率默认值"
              >
                <Input 
                  placeholder="输入" 
                  suffix="bps"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoCaptureResolution"
                label="采集分辨率"
              >
                <Select>
                  <Option value="auto">自动</Option>
                  <Option value="custom">自定义</Option>
                  <Option value="native">原生</Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoBitrateMin"
                label="编码码率最小值"
              >
                <Input 
                  placeholder="输入" 
                  suffix="fps"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoBitrateMin2"
                label="编码码率最小值"
              >
                <Input 
                  placeholder="输入" 
                  suffix="bps"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="videoFrameRate"
                label="编码帧率"
              >
                <Input 
                  placeholder="输入" 
                  suffix="fps"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Audio Parameters Section */}
        <Card 
          title={
            <Space>
              <AudioOutlined style={{ color: '#52c41a' }} />
              <span>音频参数</span>
            </Space>
          }
          style={{ marginBottom: '24px' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="audioConfigMode"
                label="配置模式"
              >
                <Select>
                  <Option value="auto">自动</Option>
                  <Option value="custom">自定义</Option>
                  <Option value="preset">预设</Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="audioBitrateMin"
                label="编码码率最小值"
              >
                <Input 
                  placeholder="输入" 
                  suffix="bps"
                />
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="audioCaptureResolution"
                label="采集分辨率"
              >
                <Select>
                  <Option value="auto">自动</Option>
                  <Option value="custom">自定义</Option>
                  <Option value="native">原生</Option>
                </Select>
              </Form.Item>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="audioBitrateMin2"
                label="编码码率最小值"
              >
                <Input 
                  placeholder="输入" 
                  suffix="fps"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Activity Form Section */}
        <Card 
          title={
            <Space>
              <SettingOutlined style={{ color: '#faad14' }} />
              <span>活动参数</span>
            </Space>
          }
          style={{ marginBottom: '24px' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                name="activityForm"
                label="活动形式"
              >
                <Input placeholder="请输入内容" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Navigation Buttons */}
        <div style={{ textAlign: 'right', marginTop: '24px' }}>
          <Space>
            <Button onClick={handleReset}>
              重置
            </Button>
            <Button 
              type="primary" 
              htmlType="submit"
              loading={loading}
            >
              下一步
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
}
