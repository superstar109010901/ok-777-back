'use client';

import React from 'react';
import { Card, Descriptions, Tag, Button, Space, Avatar, Timeline, Divider, Typography, Row, Col, Statistic } from 'antd';

import { 
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  UserOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function DetailPage() {
  

  const userInfo = {
    id: '001',
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '+86 138 0013 8000',
    position: '高级前端开发工程师',
    department: '技术部',
    location: '北京市朝阳区',
    joinDate: '2022-03-15',
    status: '在职',
    level: 'P6',
    manager: '李四',
    team: '前端开发组',
  };

  const projectHistory = [
    {
      date: '2024-01-15',
      action: '完成用户管理系统重构',
      description: '使用React 18和TypeScript重构了整个用户管理模块，提升了性能和用户体验。',
      status: 'completed',
    },
    {
      date: '2024-01-10',
      action: '参与产品需求评审',
      description: '与产品经理和设计师讨论新功能需求，提供技术可行性分析。',
      status: 'completed',
    },
    {
      date: '2024-01-08',
      action: '代码审查',
      description: '审查团队成员提交的代码，确保代码质量和最佳实践。',
      status: 'completed',
    },
    {
      date: '2024-01-05',
      action: '技术分享',
      description: '在团队内部分享React性能优化最佳实践。',
      status: 'completed',
    },
  ];

  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Vue.js', level: 75, color: '#4fc08d' },
    { name: 'Python', level: 70, color: '#3776ab' },
  ];

  const achievements = [
    { title: '年度最佳员工', year: '2023', description: '在技术创新和团队协作方面表现突出' },
    { title: '技术专利', year: '2022', description: '获得"前端性能优化方法"技术专利' },
    { title: '开源贡献', year: '2021', description: '为多个开源项目贡献代码，获得社区认可' },
  ];

  return (
    <div>
      {/* Header Actions */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>{''}</Title>
        <Space>
          <Button icon={<EditOutlined />}>{''}</Button>
          <Button icon={<ShareAltOutlined />}>{''}</Button>
          <Button icon={<DownloadOutlined />}>{''}</Button>
          <Button danger icon={<DeleteOutlined />}>{''}</Button>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        {/* Basic Information */}
        <Col xs={24} lg={16}>
          <Card title={''} style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <Avatar size={80} icon={<UserOutlined />} style={{ marginRight: '16px' }} />
              <div>
                <Title level={3} style={{ margin: 0 }}>{userInfo.name}</Title>
                <Text type="secondary">{userInfo.position}</Text>
                <div style={{ marginTop: '8px' }}>
                  <Tag color="green">{userInfo.status}</Tag>
                  <Tag color="blue">{userInfo.level}</Tag>
                </div>
              </div>
            </div>

            <Descriptions column={2} bordered>
              <Descriptions.Item label={''}>{userInfo.id}</Descriptions.Item>
              <Descriptions.Item label={''}>{userInfo.department}</Descriptions.Item>
              <Descriptions.Item label={''}>{userInfo.team}</Descriptions.Item>
              <Descriptions.Item label={''}>{userInfo.manager}</Descriptions.Item>
              <Descriptions.Item label={''}>{userInfo.joinDate}</Descriptions.Item>
              <Descriptions.Item label={''}>
                <EnvironmentOutlined /> {userInfo.location}
              </Descriptions.Item>
              <Descriptions.Item label={''}>
                <MailOutlined /> {userInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label={''}>
                <PhoneOutlined /> {userInfo.phone}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Skills */}
          <Card title={''} style={{ marginBottom: '16px' }}>
            <Row gutter={[16, 16]}>
              {skills.map((skill, index) => (
                <Col xs={24} sm={12} key={index}>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <Text strong>{skill.name}</Text>
                      <Text>{skill.level}%</Text>
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '8px', 
                      backgroundColor: '#f0f0f0', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: `${skill.level}%`, 
                        height: '100%', 
                        backgroundColor: skill.color,
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Recent Activity */}
          <Card title={''}>
            <Timeline>
              {projectHistory.map((item, index) => (
                <Timeline.Item key={index} color="green">
                  <div>
                    <Text strong>{item.action}</Text>
                    <div style={{ color: '#666', fontSize: '12px', marginBottom: '4px' }}>
                      <CalendarOutlined /> {item.date}
                    </div>
                    <Text type="secondary">{item.description}</Text>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>

        {/* Sidebar */}
        <Col xs={24} lg={8}>
          {/* Statistics */}
          <Card title={''} style={{ marginBottom: '16px' }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic
                  title={''}
                  value={12}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title={''}
                  value={48}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title={''}
                  value={42}
                  valueStyle={{ color: '#faad14' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title={''}
                  value={87.5}
                  suffix="%"
                  valueStyle={{ color: '#ff4d4f' }}
                />
              </Col>
            </Row>
          </Card>

          {/* Achievements */}
          <Card title={''} style={{ marginBottom: '16px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              {achievements.map((achievement, index) => (
                <div key={index} style={{ padding: '12px', background: '#f9f9f9', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text strong>{achievement.title}</Text>
                    <Tag color="blue">{achievement.year}</Tag>
                  </div>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    {achievement.description}
                  </Text>
                </div>
              ))}
            </Space>
          </Card>

          {/* Contact Information */}
          <Card title={''}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <MailOutlined style={{ marginRight: '8px' }} />
                <Text>{userInfo.email}</Text>
              </div>
              <div>
                <PhoneOutlined style={{ marginRight: '8px' }} />
                <Text>{userInfo.phone}</Text>
              </div>
              <div>
                <EnvironmentOutlined style={{ marginRight: '8px' }} />
                <Text>{userInfo.location}</Text>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
