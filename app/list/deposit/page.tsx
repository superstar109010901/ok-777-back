'use client';

import React, { useState } from 'react';
import { Card, Row, Col, Form, Input, Select, DatePicker, Button, Table, Space, Typography, Tag, message, Pagination, Modal, Descriptions } from 'antd';

import { 
  SearchOutlined,
  PlusOutlined,
  LinkOutlined,
  CopyOutlined,
  LoadingOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { delay } from '../../utils/delay';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function DepositPage() {
  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(51);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [form] = Form.useForm();

  const handleSearch = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await delay(1000);
      message.success('查询成功');
      console.log('Search values:', values);
    } catch (error) {
      message.error('查询失败');
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    message.info('创建新存款记录');
  };

  const handleView = (record: any) => {
    setSelectedRecord(record);
    setModalVisible(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    message.info(`切换到第 ${page} 页`);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedRecord(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success('已复制到剪贴板');
  };

  const depositData = [
    {
      id: '1',
      transactionId: '2cb84...379c8',
      userId: 'AAABBBCCC',
      type: 'Crypto',
      currency: 'USDT',
      network: 'TRC20',
      amount: '5.00',
      rate: '1.001',
      realArrival: '5.00',
      state: 'Success',
      createTime: '2024-01-15 10:30:00'
    },
    {
      id: '2',
      transactionId: null,
      userId: 'AAABBBCCC',
      type: 'Fiat',
      currency: 'JPY',
      network: null,
      amount: '3000.00',
      rate: '0.0066',
      realArrival: '19.68',
      state: 'Pending',
      createTime: '2024-01-15 09:15:00'
    },
    {
      id: '3',
      transactionId: '2cb84...379c8',
      userId: 'AAABBBCCC',
      type: 'Crypto',
      currency: 'BNB',
      network: 'BEP20',
      amount: '0.02',
      rate: '1,082.80',
      realArrival: '21.66',
      state: 'Fail',
      createTime: '2024-01-15 08:45:00'
    },
    {
      id: '4',
      transactionId: '3db95...489d9',
      userId: 'AAABBBCCC',
      type: 'Crypto',
      currency: 'BTC',
      network: 'BITCOIN',
      amount: '0.001',
      rate: '45,000.00',
      realArrival: '45.00',
      state: 'Success',
      createTime: '2024-01-15 07:20:00'
    },
    {
      id: '5',
      transactionId: null,
      userId: 'AAABBBCCC',
      type: 'Fiat',
      currency: 'USD',
      network: null,
      amount: '100.00',
      rate: '1.00',
      realArrival: '100.00',
      state: 'Pending',
      createTime: '2024-01-15 06:10:00'
    }
  ];

  const getStateColor = (state: string) => {
    switch (state) {
      case 'Success': return 'green';
      case 'Fail': return 'red';
      case 'Pending': return 'blue';
      case 'Pending Review': return 'orange';
      case 'Reject': return 'red';
      default: return 'default';
    }
  };

  const getStateText = (state: string) => {
    switch (state) {
      case 'Success': return '成功';
      case 'Fail': return '失败';
      case 'Pending': return '待处理';
      case 'Pending Review': return '待审核';
      case 'Reject': return '拒绝';
      default: return state;
    }
  };

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (text: string, record: any) => {
        if (record.state === 'Pending' && !text) {
          return <LoadingOutlined style={{ color: '#1890ff' }} />;
        }
        if (!text) return '-';
        const truncatedId = text ? `${text.substring(0, 5)}...${text.substring(text.length - 5)}` : '';
        return (
          <Space>
            {truncatedId}
            {text && (
              <>
                <LinkOutlined style={{ cursor: 'pointer' }} onClick={() => message.info('查看区块链浏览器')} />
                <CopyOutlined style={{ cursor: 'pointer' }} onClick={() => copyToClipboard(text)} />
              </>
            )}
          </Space>
        );
      },
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'NetWork',
      dataIndex: 'network',
      key: 'network',
      render: (text: string) => text || '-',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: true,
    },
    {
      title: 'rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Real arrival',
      dataIndex: 'realArrival',
      key: 'realArrival',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      render: (state: string) => {
        return <Tag color={getStateColor(state)}>{getStateText(state)}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button type="link" size="small" icon={<EyeOutlined />} onClick={() => handleView(record)}>
            查看
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px' }}>存款管理</Title>

      <Card style={{ marginBottom: '24px' }}>
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
          initialValues={{
            currency: 'ALL',
            network: 'ALL',
            type: 'ALL',
            state: 'ALL'
          }}
          style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}
        >
          <Form.Item name="order" label="Order">
            <Input placeholder="Please enter your order number" />
          </Form.Item>
          <Form.Item name="userId" label="User ID">
            <Input placeholder="Please enter your user ID" />
          </Form.Item>
          <Form.Item name="transactionId" label="Transaction ID">
            <Input placeholder="Please enter your Transaction ID" />
          </Form.Item>
          <Form.Item name="currency" label="Currency">
            <Select style={{ width: 120 }}>
              <Option value="ALL">ALL</Option>
              <Option value="USDT">USDT</Option>
              <Option value="BTC">BTC</Option>
              <Option value="ETH">ETH</Option>
              <Option value="BNB">BNB</Option>
              <Option value="JPY">JPY</Option>
              <Option value="USD">USD</Option>
            </Select>
          </Form.Item>
          <Form.Item name="network" label="NetWork">
            <Select style={{ width: 120 }}>
              <Option value="ALL">ALL</Option>
              <Option value="TRC20">TRC20</Option>
              <Option value="ERC20">ERC20</Option>
              <Option value="BEP20">BEP20</Option>
              <Option value="BITCOIN">BITCOIN</Option>
              <Option value="SOLANA">SOLANA</Option>
            </Select>
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Select style={{ width: 120 }}>
              <Option value="ALL">ALL</Option>
              <Option value="Crypto">Crypto</Option>
              <Option value="Fiat">Fiat</Option>
            </Select>
          </Form.Item>
          <Form.Item name="state" label="State">
            <Select style={{ width: 120 }}>
              <Option value="ALL">ALL</Option>
              <Option value="Success">Success</Option>
              <Option value="Fail">Fail</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Pending Review">Pending Review</Option>
              <Option value="Reject">Reject</Option>
            </Select>
          </Form.Item>
          <Form.Item name="createTime" label="CreateTim">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit" loading={loading}>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Table
          columns={columns}
          dataSource={depositData}
          rowKey="id"
          pagination={false}
          loading={loading}
        />

        {/* Pagination */}
        <div style={{ marginTop: '16px', textAlign: 'right' }}>
          <Space>
            <span>共658条</span>
            <Pagination
              current={currentPage}
              total={658}
              pageSize={10}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={false}
              showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            />
          </Space>
        </div>
      </Card>

      {/* Transaction Details Modal */}
      <Modal
        title="Transaction Details"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" type="primary" onClick={handleModalClose}>
            Close
          </Button>
        ]}
        width={600}
      >
        {selectedRecord && (
          <div>
            <Descriptions column={1} bordered={false} size="small">
              <Descriptions.Item label="Transaction ID">
                <span style={{ color: '#1890ff', fontFamily: 'monospace' }}>
                  {selectedRecord.transactionId || '-'}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Order ID">
                <span style={{ fontFamily: 'monospace' }}>
                  {selectedRecord.orderId || selectedRecord.id}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="User ID">
                <span style={{ fontFamily: 'monospace' }}>
                  {selectedRecord.userId}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="UserName">
                <span>Tom</span>
              </Descriptions.Item>
              <Descriptions.Item label="Currency">
                <span>{selectedRecord.currency}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <span>{selectedRecord.type === 'Crypto' ? '加密货币' : '法币'}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Network">
                <span>{selectedRecord.network || '-'}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <span>{selectedRecord.amount}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Sending">
                <span style={{ color: '#1890ff', fontFamily: 'monospace' }}>
                  {selectedRecord.sendingAddress || '-'}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Receiving">
                <span style={{ color: '#1890ff', fontFamily: 'monospace' }}>
                  {selectedRecord.receivingAddress || '-'}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Rate">
                <span>{selectedRecord.rate}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Real Conversion">
                <span>{selectedRecord.realArrival}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Real arrival">
                <span>{selectedRecord.realArrival}</span>
              </Descriptions.Item>
              <Descriptions.Item label="CreateTime">
                <span>{selectedRecord.createTime}</span>
              </Descriptions.Item>
              <Descriptions.Item label="State">
                <Tag color={getStateColor(selectedRecord.state)}>
                  {getStateText(selectedRecord.state)}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Modal>
    </div>
  );
}
