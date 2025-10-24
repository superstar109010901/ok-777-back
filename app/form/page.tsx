'use client';

import React from 'react';
import { Card, Form, Input, Select, DatePicker, Button, Row, Col, Switch, Radio, Checkbox, Upload, message, Space } from 'antd';

import { UploadOutlined, SaveOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

export default function FormPage() {
  
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('');
  };

  return (
    <div>
      <Card title={''} style={{ marginBottom: '24px' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            status: 'active',
            notifications: true,
            gender: 'male',
            interests: ['technology', 'design'],
          }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="name"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <Input placeholder={''} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label={''}
                rules={[
                  { required: true, message: '' },
                  { type: 'email', message: '' }
                ]}
              >
                <Input placeholder={''} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phone"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <Input placeholder={''} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="department"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <Select placeholder={''}>
                  <Select.Option value="engineering">{''}</Select.Option>
                  <Select.Option value="marketing">{''}</Select.Option>
                  <Select.Option value="sales">{''}</Select.Option>
                  <Select.Option value="hr">{''}</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="position"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <Input placeholder={''} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="experience"
                label={''}
                rules={[{ required: true, message: '' }]}
              >
                <Select placeholder={''}>
                  <Select.Option value="junior">{''}</Select.Option>
                  <Select.Option value="mid">{''}</Select.Option>
                  <Select.Option value="senior">{''}</Select.Option>
                  <Select.Option value="lead">{''}</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="gender"
            label={''}
            rules={[{ required: true, message: '' }]}
          >
            <Radio.Group>
              <Radio value="male">{''}</Radio>
              <Radio value="female">{''}</Radio>
              <Radio value="other">{''}</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="interests"
            label={''}
            rules={[{ required: true, message: '' }]}
          >
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox value="technology">{''}</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="design">{''}</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="business">{''}</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="marketing">{''}</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="finance">{''}</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="other">{''}</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="startDate"
            label={''}
            rules={[{ required: true, message: '' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="description"
            label={''}
            rules={[{ required: true, message: '' }]}
          >
            <TextArea 
              rows={4} 
              placeholder={''}
              showCount
              maxLength={500}
            />
          </Form.Item>

          <Form.Item
            name="resume"
            label={''}
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e && e.fileList;
            }}
          >
            <Upload
              name="resume"
              listType="text"
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>{''}</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="notifications"
            label={''}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="status"
            label={''}
            rules={[{ required: true, message: '' }]}
          >
            <Radio.Group>
              <Radio value="active">{''}</Radio>
              <Radio value="inactive">{''}</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
                {''}
              </Button>
              <Button htmlType="button" icon={<SaveOutlined />}>
                {''}
              </Button>
              <Button htmlType="reset">
                {''}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      {/* Form Preview */}
      <Card title={''}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
          <p><strong>{''}:</strong> John Doe</p>
          <p><strong>{''}:</strong> john.doe@example.com</p>
          <p><strong>{''}:</strong> +1 234 567 8900</p>
          <p><strong>{''}:</strong> Engineering</p>
          <p><strong>{''}:</strong> Senior Developer</p>
          <p><strong>{''}:</strong> Senior</p>
          <p><strong>{''}:</strong> Male</p>
          <p><strong>{''}:</strong> Technology, Design</p>
          <p><strong>{''}:</strong> 2024-01-15</p>
          <p><strong>{''}:</strong> Experienced developer with 5+ years in web development...</p>
          <p><strong>{''}:</strong> Yes</p>
          <p><strong>{''}:</strong> Active</p>
        </div>
      </Card>
    </div>
  );
}
