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

export default function WithdrawalPage() {
  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(51);
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [form] = Form.useForm();
  const [createForm] = Form.useForm();

  const handleSearch = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Search values:', values);
      message.success('搜索完成');
    } catch (error) {
      message.error('搜索失败');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setCreateModalVisible(true);
  };

  const handleView = (record: any) => {
    setSelectedRecord(record);
    setModalVisible(true);
  };

  const handleAccept = (record: any) => {
    message.success(`已接受记录: ${record.id}`);
  };

  const handleReject = (record: any) => {
    message.error(`已拒绝记录: ${record.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    message.info(`切换到第 ${page} 页`);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedRecord(null);
  };

  const handleCreateModalClose = () => {
    setCreateModalVisible(false);
    createForm.resetFields();
  };

  const handleCreateSubmit = async (values: any) => {
    try {
      setLoading(true);
      // Simulate API call
      await delay(1000);
      message.success('提现申请创建成功！');
      setCreateModalVisible(false);
      createForm.resetFields();
      console.log('Create withdrawal:', values);
    } catch (error) {
      message.error('创建失败，请重试');
      console.error('Create failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success('已复制到剪贴板');
  };

  const withdrawalData = [
    {
      id: '1',
      orderId: 'AAABBB',
      userId: 'AAABBBCCC',
      userName: 'Tom',
      currency: 'USDT',
      network: 'TRC20',
      amount: '5.00',
      transactionId: 'TGFf7z3UtYgmoHkMi9NG58n1kNVuePvThd',
      sending: 'TGFf7z3UtYgmoHkMi9NG58n1kNVuePvThd',
      receiving: '2NijxAjqMhSUoygvyeM2BBzMkFXRVGxPhabj58Js4',
      rate: '1.001',
      fees: '1',
      realArrival: '4.00 USDT',
      state: 'Success',
      createTime: '2025/10/23 16:45'
    },
    {
      id: '2',
      orderId: 'BBBCCC',
      userId: 'AAABBBCCC',
      userName: 'Tom',
      currency: 'BNB',
      network: 'BEP20',
      amount: '10.00',
      transactionId: '2cb84...379c8',
      sending: '2cb84...379c8',
      receiving: '3MijxAjqMhSUoygvyeM2BBzMkFXRVGxPhabj58Js4',
      rate: '1.002',
      fees: '2',
      realArrival: '8.00 BNB',
      state: 'Fail',
      createTime: '2024-01-15 09:15:00'
    },
    {
      id: '3',
      orderId: 'CCCAAA',
      userId: 'AAABBBCCC',
      userName: 'Tom',
      currency: 'TRX',
      network: 'TRC20',
      amount: '100.00',
      transactionId: null,
      sending: null,
      receiving: '4NijxAjqMhSUoygvyeM2BBzMkFXRVGxPhabj58Js4',
      rate: '1.000',
      fees: '5',
      realArrival: '95.00 TRX',
      state: 'Pending',
      createTime: '2024-01-15 08:45:00'
    },
    {
      id: '4',
      orderId: 'DDDEEE',
      userId: 'AAABBBCCC',
      userName: 'Tom',
      currency: 'TON',
      network: 'TON',
      amount: '300.00',
      transactionId: null,
      sending: null,
      receiving: '5NijxAjqMhSUoygvyeM2BBzMkFXRVGxPhabj58Js4',
      rate: '1.003',
      fees: '10',
      realArrival: '290.00 TON',
      state: 'Pending Review',
      createTime: '2024-01-15 07:20:00'
    },
    {
      id: '5',
      orderId: 'EEEFFF',
      userId: 'AAABBBCCC',
      userName: 'Tom',
      currency: 'BTC',
      network: 'BITCOIN',
      amount: '300.00',
      transactionId: null,
      sending: null,
      receiving: '6NijxAjqMhSUoygvyeM2BBzMkFXRVGxPhabj58Js4',
      rate: '1.001',
      fees: '15',
      realArrival: '285.00 BTC',
      state: 'Reject',
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
      case 'Success': return 'Success';
      case 'Fail': return 'Fail';
      case 'Pending': return 'Pending';
      case 'Pending Review': return 'Pending Review';
      case 'Reject': return 'Reject';
      default: return state;
    }
  };

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
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
    },
    {
      title: 'Amount/$',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (text: string, record: any) => {
        if (record.state === 'Pending') {
          return <LoadingOutlined spin />;
        }
        if (text) {
          return (
            <Space>
              <span>{text}</span>
              <LinkOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
              <CopyOutlined 
                style={{ color: '#1890ff', cursor: 'pointer' }} 
                onClick={() => copyToClipboard(text)}
              />
            </Space>
          );
        }
        return '-';
      },
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      render: (state: string) => (
        <Tag color={getStateColor(state)}>
          {getStateText(state)}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => {
        switch (record.state) {
          case 'Success':
          case 'Fail':
          case 'Reject':
            return (
              <Button type="link" onClick={() => handleView(record)}>
                View
              </Button>
            );
          case 'Pending Review':
            return (
              <Space>
                <Button type="link" onClick={() => handleAccept(record)}>
                  Accep
                </Button>
                <Button type="link" onClick={() => handleReject(record)}>
                  Reject
                </Button>
              </Space>
            );
          case 'Pending':
            return null;
          default:
            return null;
        }
      },
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>Withdrawal Management</Title>
      </div>

      {/* Search/Filter Section */}
      <Card style={{ marginBottom: '24px' }}>
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
          style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}
        >
          <Form.Item name="order" label="Order">
            <Input placeholder="Please enter your order number" style={{ width: 200 }} />
          </Form.Item>
          
          <Form.Item name="userId" label="User ID">
            <Input placeholder="Please enter your user ID" style={{ width: 200 }} />
          </Form.Item>
          
          <Form.Item name="transactionId" label="Transaction ID">
            <Input placeholder="Please enter your Transaction ID" style={{ width: 200 }} />
          </Form.Item>
          
          <Form.Item name="currency" label="Currency">
            <Select placeholder="ALL" style={{ width: 120 }}>
              <Option value="all">ALL</Option>
              <Option value="USDT">USDT</Option>
              <Option value="BNB">BNB</Option>
              <Option value="TRX">TRX</Option>
              <Option value="TON">TON</Option>
              <Option value="BTC">BTC</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="network" label="NetWork">
            <Select placeholder="ALL" style={{ width: 120 }}>
              <Option value="all">ALL</Option>
              <Option value="TRC20">TRC20</Option>
              <Option value="BEP20">BEP20</Option>
              <Option value="TON">TON</Option>
              <Option value="BITCOIN">BITCOIN</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="state" label="State">
            <Select placeholder="ALL" style={{ width: 120 }}>
              <Option value="all">ALL</Option>
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
            <Space>
              <Button 
                type="primary" 
                htmlType="submit" 
                icon={<SearchOutlined />}
                loading={loading}
              >
                Search
              </Button>
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={handleCreate}
              >
                Create
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      {/* Withdrawal Records Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={withdrawalData}
          rowKey="id"
          pagination={false}
          scroll={{ x: 800 }}
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
                  {selectedRecord.orderId}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="User ID">
                <span style={{ fontFamily: 'monospace' }}>
                  {selectedRecord.userId}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="UserName">
                <span>{selectedRecord.userName}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Currency">
                <span>{selectedRecord.currency}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Type">
                <span>加密货币</span>
              </Descriptions.Item>
              <Descriptions.Item label="Network">
                <span>{selectedRecord.network}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <span>{selectedRecord.amount}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Sending">
                <span style={{ color: '#1890ff', fontFamily: 'monospace' }}>
                  {selectedRecord.sending || '-'}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Receiving">
                <span style={{ color: '#1890ff', fontFamily: 'monospace' }}>
                  {selectedRecord.receiving || '-'}
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

      {/* Create Withdrawal Modal */}
      <Modal
        title="Create Withdrawal"
        open={createModalVisible}
        onCancel={handleCreateModalClose}
        footer={null}
        width={500}
      >
        <Form
          form={createForm}
          layout="vertical"
          onFinish={handleCreateSubmit}
        >
          <Form.Item
            name="currency"
            label="Currency"
            rules={[{ required: true, message: 'Please select currency' }]}
          >
            <Select placeholder="Select currency">
              <Option value="BTC">BTC</Option>
              <Option value="USDT">USDT</Option>
              <Option value="ETH">ETH</Option>
              <Option value="BNB">BNB</Option>
              <Option value="TRX">TRX</Option>
              <Option value="TON">TON</Option>
              <Option value="LTC">LTC</Option>
              <Option value="USDC">USDC</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="network"
            label="Network"
            rules={[{ required: true, message: 'Please select network' }]}
          >
            <Select placeholder="Select network">
              <Option value="BITCOIN">BITCOIN</Option>
              <Option value="ERC20">ERC20</Option>
              <Option value="TRC20">TRC20</Option>
              <Option value="BEP20">BEP20</Option>
              <Option value="SOLANA">SOLANA</Option>
              <Option value="TON">TON</Option>
              <Option value="LITECOIN">LITECOIN</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="receiving"
            label="Receiving"
            rules={[{ required: true, message: 'Please enter receiving address' }]}
          >
            <Input placeholder="Enter receiving address" />
          </Form.Item>

          <Form.Item
            name="amount"
            label="Amount/USD"
            rules={[{ required: true, message: 'Please enter amount' }]}
          >
            <Input type="number" placeholder="Enter amount" />
          </Form.Item>

          <Form.Item
            name="fees"
            label="Fees/USD"
            rules={[{ required: true, message: 'Please enter fees' }]}
          >
            <Input type="number" placeholder="Enter fees" />
          </Form.Item>

          <Form.Item
            name="realArrival"
            label="Real arrival/Native"
          >
            <Input placeholder="Calculated automatically" readOnly />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={handleCreateModalClose}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Create
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
