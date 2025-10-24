'use client';

import React, { useState } from 'react';
import { Card, Form, Input, Select, DatePicker, Button, Table, Space, Typography, Tag, message } from 'antd';

import { 
  SearchOutlined,
  ReloadOutlined,
  DownloadOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { delay } from '../../utils/delay';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function QueryTablePage() {
  
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Sample data for the table
  const tableData = [
    {
      key: '1',
      orderId: 'AAABBBCCC',
      userId: 'AAABBBCCC',
      depositCurrency: 'USDT',
      depositNetwork: 'TRC20',
      transferAmount: '5',
      exchangeRate: '1.001',
      actualArrival: '5',
      status: '成功',
      operation: '查看'
    },
    {
      key: '2',
      orderId: 'DDDEEEFFF',
      userId: 'DDDEEEFFF',
      depositCurrency: 'BTC',
      depositNetwork: 'Bitcoin',
      transferAmount: '0.001',
      exchangeRate: '45000.00',
      actualArrival: '45',
      status: '处理中',
      operation: '查看'
    },
    {
      key: '3',
      orderId: 'GGGHHHIII',
      userId: 'GGGHHHIII',
      depositCurrency: 'ETH',
      depositNetwork: 'Ethereum',
      transferAmount: '0.1',
      exchangeRate: '3000.00',
      actualArrival: '300',
      status: '成功',
      operation: '查看'
    },
    {
      key: '4',
      orderId: 'JJJKKKLLL',
      userId: 'JJJKKKLLL',
      depositCurrency: 'USDT',
      depositNetwork: 'ERC20',
      transferAmount: '100',
      exchangeRate: '1.000',
      actualArrival: '100',
      status: '失败',
      operation: '查看'
    },
    {
      key: '5',
      orderId: 'MMMNNNOOO',
      userId: 'MMMNNNOOO',
      depositCurrency: 'BNB',
      depositNetwork: 'BSC',
      transferAmount: '1',
      exchangeRate: '300.00',
      actualArrival: '300',
      status: '成功',
      operation: '查看'
    }
  ];

  const columns = [
    {
      title: '订单ID',
      dataIndex: 'orderId',
      key: 'orderId',
      width: 120,
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId',
      width: 120,
    },
    {
      title: '存款币种',
      dataIndex: 'depositCurrency',
      key: 'depositCurrency',
      width: 100,
      render: (currency: string) => (
        <Tag color="blue">{currency}</Tag>
      ),
    },
    {
      title: '存款网络',
      dataIndex: 'depositNetwork',
      key: 'depositNetwork',
      width: 120,
    },
    {
      title: '转账金额',
      dataIndex: 'transferAmount',
      key: 'transferAmount',
      width: 100,
    },
    {
      title: '实时汇率',
      dataIndex: 'exchangeRate',
      key: 'exchangeRate',
      width: 120,
    },
    {
      title: '实际到账',
      dataIndex: 'actualArrival',
      key: 'actualArrival',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        const color = status === '成功' ? 'green' : status === '处理中' ? 'blue' : 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 80,
      render: (text: string) => (
        <Button type="link" size="small" icon={<EyeOutlined />}>
          {text}
        </Button>
      ),
    },
  ];

  const handleQuery = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await delay(1000);
      message.success('查询成功');
      console.log('Query values:', values);
    } catch (error) {
      message.error('查询失败');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    form.resetFields();
  };

  const handleDownload = () => {
    message.success('下载功能开发中...');
  };

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>存款管理</Title>
      </div>

      {/* Filter Form */}
      <Card style={{ marginBottom: '24px' }}>
        <Form
          form={form}
          layout="inline"
          onFinish={handleQuery}
          style={{ marginBottom: '16px' }}
        >
          <Form.Item
            name="collectionId"
            label="集合编号"
            style={{ marginBottom: '16px' }}
          >
            <Input placeholder="请输入集合编号" style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="collectionName"
            label="集合名称"
            style={{ marginBottom: '16px' }}
          >
            <Input placeholder="请输入集合编号" style={{ width: 200 }} />
          </Form.Item>

          <Form.Item
            name="contentCarrier"
            label="内容体载"
            style={{ marginBottom: '16px' }}
          >
            <Select placeholder="全部" style={{ width: 120 }}>
              <Option value="all">全部</Option>
              <Option value="text">文本</Option>
              <Option value="image">图文</Option>
              <Option value="video">视频</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="filterMethod"
            label="筛选方式"
            style={{ marginBottom: '16px' }}
          >
            <Select placeholder="全部" style={{ width: 120 }}>
              <Option value="all">全部</Option>
              <Option value="manual">人工</Option>
              <Option value="rule">规则筛选</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="createTime"
            label="创建时间"
            style={{ marginBottom: '16px' }}
          >
            <RangePicker 
              placeholder={['开始日期', '结束日期']}
              style={{ width: 240 }}
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="状态"
            style={{ marginBottom: '16px' }}
          >
            <Select placeholder="全部" style={{ width: 120 }}>
              <Option value="all">全部</Option>
              <Option value="success">成功</Option>
              <Option value="processing">处理中</Option>
              <Option value="failed">失败</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ marginBottom: '16px' }}>
            <Space>
              <Button 
                type="primary" 
                htmlType="submit" 
                icon={<SearchOutlined />}
                loading={loading}
              >
                查询
              </Button>
              <Button 
                onClick={handleReset}
                icon={<ReloadOutlined />}
              >
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      {/* Download Button */}
      <div style={{ marginBottom: '16px' }}>
        <Button 
          type="default" 
          icon={<DownloadOutlined />}
          onClick={handleDownload}
        >
          下载
        </Button>
      </div>

      {/* Data Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: 658,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `共${total}条`,
            pageSizeOptions: ['10', '20', '50', '100'],
            onChange: handleTableChange,
            onShowSizeChange: handleTableChange,
          }}
          scroll={{ x: 1000 }}
          loading={loading}
          size="middle"
        />
      </Card>
    </div>
  );
}
