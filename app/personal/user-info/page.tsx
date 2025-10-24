'use client';

import React from 'react';
import { Card, Avatar, Typography, Button, List, Row, Col, Space, Divider, Empty } from 'antd';

import { 
  UserOutlined,
  BankOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  BellOutlined,
  EyeOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function UserInfoPage() {
  

  // User profile data
  const userProfile = {
    name: '名字',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cat',
    position: '前端工程师',
    department: '架构-前端',
    location: '北京'
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user1',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user2',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user3',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user4'
      ]
    },
    {
      id: 2,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user5',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user6',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user7',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user8'
      ]
    },
    {
      id: 3,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user9',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user10',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user11',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user12'
      ]
    },
    {
      id: 4,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user13',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user14',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user15',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user16'
      ]
    },
    {
      id: 5,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user17',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user18',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user19',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user20'
      ]
    },
    {
      id: 6,
      title: '企业级产品设计系统',
      subtitle: 'Arco Design System',
      members: 35,
      avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user21',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user22',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user23',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=user24'
      ]
    }
  ];

  // Latest updates data
  const updates = [
    {
      id: 1,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    },
    {
      id: 2,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    },
    {
      id: 3,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    },
    {
      id: 4,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    },
    {
      id: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    },
    {
      id: 6,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=wang',
      content: '王多鱼审核了图文内容:2021年,你过得怎么样? 新华网年终特别策划:《这一年,你过得怎么样?》回访那些你最熟悉的"陌生人"带你重温这难忘的2021年回顾我们共同记忆中的生动故'
    }
  ];

  // Team data
  const teams = [
    {
      id: 1,
      name: '火灿引擎智能应用团队',
      members: 20,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team1',
      color: '#52c41a'
    },
    {
      id: 2,
      name: '火灿引擎智能应用团队',
      members: 20,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team2',
      color: '#faad14'
    },
    {
      id: 3,
      name: '火灿引擎智能应用团队',
      members: 20,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team3',
      color: '#1890ff'
    },
    {
      id: 4,
      name: '火灿引擎智能应用团队',
      members: 20,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=team4',
      color: '#f5222d'
    }
  ];

  return (
    <div>
      {/* User Profile Section */}
      <Card style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Avatar 
          size={120} 
          src={userProfile.avatar}
          style={{ marginBottom: '16px' }}
        />
        <Title level={3} style={{ marginBottom: '16px' }}>
          {userProfile.name}
        </Title>
        <Space size="large" split={<Divider type="vertical" />}>
          <Space>
            <UserOutlined style={{ color: '#1890ff' }} />
            <Text>{userProfile.position}</Text>
          </Space>
          <Space>
            <BankOutlined style={{ color: '#52c41a' }} />
            <Text>{userProfile.department}</Text>
          </Space>
          <Space>
            <EnvironmentOutlined style={{ color: '#faad14' }} />
            <Text>{userProfile.location}</Text>
          </Space>
        </Space>
      </Card>

      <Row gutter={[24, 24]}>
        {/* Left Column - My Projects and Latest Updates */}
        <Col xs={24} lg={16}>
          {/* My Projects Section */}
          <Card 
            title="我的项目" 
            extra={<Button type="link">查看更多</Button>}
            style={{ marginBottom: '24px' }}
          >
            <Row gutter={[16, 16]}>
              {projects.map(project => (
                <Col xs={24} sm={12} lg={8} key={project.id}>
                  <Card 
                    hoverable
                    style={{ height: '100%' }}
                    styles={{ body: { padding: '16px' } }}
                  >
                    <Title level={5} style={{ marginBottom: '8px' }}>
                      {project.title}
                    </Title>
                    <Text type="secondary" style={{ marginBottom: '12px', display: 'block' }}>
                      {project.subtitle}
                    </Text>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Avatar.Group size="small" >
                        {project.avatars.map((avatar, index) => (
                          <Avatar key={index} src={avatar} />
                        ))}
                      </Avatar.Group>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        共{project.members}人
                      </Text>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Latest Updates Section */}
          <Card 
            title="最新动态" 
            extra={<Button type="link">查看更多</Button>}
          >
            <List
              dataSource={updates}
              renderItem={item => (
                <List.Item style={{ padding: '12px 0' }}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} size="small" />}
                    description={
                      <Text style={{ fontSize: '14px', lineHeight: '1.5' }}>
                        {item.content}
                      </Text>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Right Column - My Team and Site Notifications */}
        <Col xs={24} lg={8}>
          {/* My Team Section */}
          <Card 
            title="我的团队" 
            style={{ marginBottom: '24px' }}
          >
            <List
              dataSource={teams}
              renderItem={item => (
                <List.Item style={{ padding: '12px 0' }}>
                  <List.Item.Meta
                    avatar={
                      <Avatar 
                        src={item.avatar} 
                        size="small"
                        style={{ backgroundColor: item.color }}
                      />
                    }
                    title={item.name}
                    description={`共${item.members}人`}
                  />
                </List.Item>
              )}
            />
          </Card>

          {/* Site Notifications Section */}
          <Card title="站内通知">
            <Empty 
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="暂无数据"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
