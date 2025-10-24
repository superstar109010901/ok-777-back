'use client';

import React, { useState } from 'react';
import { Card, Row, Col, Button, Typography, Space, Tag, Avatar, Modal, Form, Input } from 'antd';

import { 
  ThunderboltOutlined,
  WalletOutlined,
  SendOutlined,
  QrcodeOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function WalletPage() {
  
  const [loading, setLoading] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');
  const [form] = Form.useForm();

  const handleAction = async (action: string, currency: string) => {
    if (action === 'receive') {
      setSelectedCurrency(currency);
      // Reset form with currency-specific initial values
      const currencyData = walletData.find(w => w.id === currency);
      if (currencyData) {
        const initialValues: any = {};
        currencyData.depositNetworks.forEach(network => {
          const networkKey = network.toLowerCase();
          initialValues[`${networkKey}_public`] = networkKey === 'erc20' ? '0x60c42f2e764c6cca9a10c8b099a2abe559216204' : '';
          initialValues[`${networkKey}_private`] = networkKey === 'erc20' ? 'aaabbb' : '';
        });
        form.setFieldsValue(initialValues);
      }
      setModalVisible(true);
      return;
    }
    
    setLoading(`${action}-${currency}`);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`${action} ${currency}`);
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleModalOk = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values:', values);
      setModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const walletData = [
    {
      id: 'usdt',
      name: 'USDT',
      depositNetworks: ['ERC20', 'TRC20', 'BEP20', 'SOLANA', 'TON'],
      withdrawalNetworks: ['ERC20', 'TRC20', 'BEP20', 'SOLANA', 'TON']
    },
    {
      id: 'sol',
      name: 'SOL',
      depositNetworks: ['SOLANA'],
      withdrawalNetworks: ['SOLANA']
    },
    {
      id: 'bnb',
      name: 'BNB',
      depositNetworks: ['BEP20'],
      withdrawalNetworks: ['BEP20']
    },
    {
      id: 'ltc',
      name: 'LTC',
      depositNetworks: ['LITECOIN'],
      withdrawalNetworks: ['LITECOIN']
    },
    {
      id: 'eth',
      name: 'ETH',
      depositNetworks: ['ERC20'],
      withdrawalNetworks: ['ERC20']
    },
    {
      id: 'trx',
      name: 'TRX',
      depositNetworks: ['TRC20'],
      withdrawalNetworks: ['TRC20']
    },
    {
      id: 'btc',
      name: 'BTC',
      depositNetworks: ['BITCOIN'],
      withdrawalNetworks: ['BITCOIN']
    },
    {
      id: 'ton',
      name: 'TON',
      depositNetworks: ['TON'],
      withdrawalNetworks: ['TON']
    },
    {
      id: 'usdc',
      name: 'USDC',
      depositNetworks: ['ERC20', 'TRC20', 'BEP20'],
      withdrawalNetworks: ['ERC20', 'TRC20', 'BEP20']
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2}>Wallet Manager</Title>
      </div>

      {/* Wallet Cards */}
      <Row gutter={[16, 24]}>
        {walletData.map((wallet) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={wallet.id}>
            <Card
              hoverable
              style={{ 
                minHeight: '280px',
                textAlign: 'center'
              }}
              styles={{ body: { padding: '20px' } }}
            >
              {/* Currency Name */}
              <div style={{ marginBottom: '20px' }}>
                <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                  {wallet.name}
                </Title>
              </div>

              {/* Deposit Networks */}
              <div style={{ marginBottom: '16px' }}>
                <Text strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>
                  存款网络
                </Text>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
                  {wallet.depositNetworks.map((network, index) => (
                    <Tag key={index} color="blue" style={{ fontSize: '12px' }}>
                      {network}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Withdrawal Networks */}
              <div style={{ marginBottom: '20px' }}>
                <Text strong style={{ display: 'block', marginBottom: '8px', color: '#666' }}>
                  提现网络
                </Text>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
                  {wallet.withdrawalNetworks.map((network, index) => (
                    <Tag key={index} color="green" style={{ fontSize: '12px' }}>
                      {network}
                    </Tag>
                  ))}
                </div>
              </div>
<div className='flex justify-end gap-2'>
<Button
                  type="primary"
                  loading={loading === `receive-${wallet.id}`}
                  onClick={() => handleAction('receive', wallet.id)}
                >
                  收款
                </Button>
                <Button
                  type="primary"
                  loading={loading === `withdraw-${wallet.id}`}
                  onClick={() => handleAction('withdraw', wallet.id)}
                >
                  取款
                </Button>

</div>
              {/* Action Buttons */}
              
            </Card>
          </Col>
        ))}
      </Row>

      {/* Withdrawal Address Edit Modal */}
      <Modal
        title={`${selectedCurrency.toUpperCase()} Withdrawal Address Edit`}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
        footer={[
          <Button type='primary' danger key="back" onClick={handleModalCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleModalOk}>
            确定          
          </Button>
          
        ]}
       
      >
        <Form
          form={form}
          layout="vertical"
        >
          {(() => {
            const currencyData = walletData.find(w => w.id === selectedCurrency);
            if (!currencyData) return null;

            return currencyData.depositNetworks.map((network, index) => {
              const networkKey = network.toLowerCase();
              const isFirstNetwork = index === 0;
              
              return (
                <div key={network} style={{ marginBottom: '24px' }}>
                  <Title level={4} style={{ marginBottom: '16px' }}>{network}</Title>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        name={`${networkKey}_public`}
                        label={isFirstNetwork ? "pub:" : "公钥:"}
                      >
                        <Input.TextArea 
                          rows={3} 
                          placeholder="请输入内容"
                          style={{ fontFamily: 'monospace' }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name={`${networkKey}_private`}
                        label={isFirstNetwork ? "private:" : "私钥:"}
                      >
                        <Input 
                          placeholder="请输入内容"
                          style={{ fontFamily: 'monospace' }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              );
            });
          })()}
        </Form>
      </Modal>
    </div>
  );
}
