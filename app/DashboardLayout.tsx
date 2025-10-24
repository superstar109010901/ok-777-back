'use client';

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Avatar, Input, Button, Space, Typography, Breadcrumb, Drawer } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { 
  SearchOutlined, 
  SunOutlined, 
  BellOutlined, 
  DashboardOutlined,
  DesktopOutlined,
  BarChartOutlined,
  UnorderedListOutlined,
  FormOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  ThunderboltFilled,
  MenuOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuVisible(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Initialize openKeys based on current path
  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    if (pathname.includes('/workbench')) return ['1'];
    if (pathname.includes('/data-visualization')) return ['3'];
    if (pathname.includes('/list')) return ['4'];
    if (pathname.includes('/form')) return ['5'];
    if (pathname.includes('/detail')) return ['6'];
    if (pathname.includes('/result')) return ['7'];
    if (pathname.includes('/personal')) return ['9'];
    return [];
  });

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    // Close mobile menu on navigation
    if (isMobile) {
      setMobileMenuVisible(false);
    }
    
    switch (key) {
      case '1':
        // When clicking parent "仪表盘", redirect to first child "工作台"
        router.push('/workbench');
        break;
      case '1-1':
        router.push('/workbench');
        break;
      case '3':
        // When clicking parent "数据可视化", redirect to first child "分析页"
        router.push('/data-visualization/analysis');
        break;
      case '3-1':
        router.push('/data-visualization/analysis');
        break;
      case '3-2':
        router.push('/data-visualization/multidimensional');
        break;
      case '4':
        // When clicking parent "列表页", redirect to first child "查询表格"
        router.push('/list/query-table');
        break;
      case '4-1':
        router.push('/list/query-table');
        break;
      case '4-2':
        router.push('/list');
        break;
      case '4-3':
        router.push('/list/wallet');
        break;
      case '4-4':
        router.push('/list/withdrawal');
        break;
      case '4-5':
        router.push('/list/deposit');
        break;
      case '5':
        // When clicking parent "表单页", redirect to first child "分布表单"
        router.push('/form/distribution');
        break;
      case '5-1':
        router.push('/form/distribution');
        break;
      case '5-2':
        router.push('/form/grouped');
        break;
      case '6':
        // When clicking parent "详情页", redirect to first child "基础详情页"
        router.push('/detail/basic');
        break;
      case '6-1':
        router.push('/detail/basic');
        break;
      case '6-2':
        router.push('/detail/advanced');
        break;
      case '7':
        // When clicking parent "结果页", redirect to first child "成功页"
        router.push('/result/success');
        break;
      case '7-1':
        router.push('/result/success');
        break;
      case '7-2':
        router.push('/result/failure');
        break;
      case '8':
        router.push('/exception');
        break;
      case '9':
        // When clicking parent "个人中心", redirect to first child "用户信息"
        router.push('/personal/user-info');
        break;
      case '9-1':
        router.push('/personal/user-info');
        break;
      case '9-2':
        router.push('/personal/user-settings');
        break;
      default:
        break;
    }
  };

  // Determine selected keys based on current path
  const getSelectedKeys = () => {
    if (pathname === '/') return ['1-1']; // Default to workbench when on root
    if (pathname.includes('/workbench')) return ['1-1'];
    if (pathname.includes('/data-visualization/multidimensional')) return ['3-2'];
    if (pathname.includes('/data-visualization/analysis')) return ['3-1'];
    if (pathname.includes('/data-visualization')) return ['3-1'];
    if (pathname.includes('/list/query-table')) return ['4-1'];
    if (pathname.includes('/list/wallet')) return ['4-3'];
    if (pathname.includes('/list/withdrawal')) return ['4-4'];
    if (pathname.includes('/list/deposit')) return ['4-5'];
    if (pathname.includes('/list')) return ['4-2'];
    if (pathname.includes('/form/distribution')) return ['5-1'];
    if (pathname.includes('/form/grouped')) return ['5-2'];
    if (pathname.includes('/form')) return ['5'];
    if (pathname.includes('/detail/basic')) return ['6-1'];
    if (pathname.includes('/detail/advanced')) return ['6-2'];
    if (pathname.includes('/detail')) return ['6'];
    if (pathname.includes('/result/success')) return ['7-1'];
    if (pathname.includes('/result/failure')) return ['7-2'];
    if (pathname.includes('/result')) return ['7'];
    if (pathname.includes('/exception')) return ['8'];
    if (pathname.includes('/personal/user-info')) return ['9-1'];
    if (pathname.includes('/personal/user-settings')) return ['9-2'];
    if (pathname.includes('/personal')) return ['9'];
    return ['1-1']; // Default to workbench
  };

  // Generate breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const items = [];
    
    if (pathname.includes('/workbench')) {
      items.push({ title: '仪表盘' });
    } else if (pathname.includes('/data-visualization')) {
      items.push({ title: '数据可视化' });
      if (pathname.includes('/analysis')) {
        items.push({ title: '分析页' });
      } else if (pathname.includes('/multidimensional')) {
        items.push({ title: '多维数据分析' });
      }
    } else if (pathname.includes('/list')) {
      items.push({ title: '列表页' });
      if (pathname.includes('/query-table')) {
        items.push({ title: '查询表格' });
      } else if (pathname.includes('/wallet')) {
        items.push({ title: '钱包管理' });
      } else if (pathname.includes('/withdrawal')) {
        items.push({ title: '提现管理' });
      } else if (pathname.includes('/deposit')) {
        items.push({ title: '存款管理' });
      } else if (pathname === '/list') {
        items.push({ title: '卡片列表' });
      }
    } else if (pathname.includes('/form')) {
      items.push({ title: '表单页' });
      if (pathname.includes('/distribution')) {
        items.push({ title: '分布表单' });
      } else if (pathname.includes('/grouped')) {
        items.push({ title: '分组表单' });
      }
    } else if (pathname.includes('/detail')) {
      items.push({ title: '详情页' });
      if (pathname.includes('/basic')) {
        items.push({ title: '基础详情页' });
      } else if (pathname.includes('/advanced')) {
        items.push({ title: '高级详情页' });
      }
    } else if (pathname.includes('/result')) {
      items.push({ title: '结果页' });
      if (pathname.includes('/success')) {
        items.push({ title: '成功页' });
      } else if (pathname.includes('/failure')) {
        items.push({ title: '失败页' });
      }
    } else if (pathname.includes('/personal')) {
      items.push({ title: '个人中心' });
      if (pathname.includes('/user-info')) {
        items.push({ title: '用户信息' });
      } else if (pathname.includes('/user-settings')) {
        items.push({ title: '用户设置' });
      }
    } else if (pathname.includes('/exception')) {
      items.push({ title: '异常页' });
    }
    
    return items;
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        background: '#fff', 
        padding: isMobile ? '0 16px' : '0 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0'
      }}>
         {/* Left section - Logo and Mobile Menu Button */}
         <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
           {isMobile && (
             <Button 
               type="text" 
               icon={<MenuOutlined />} 
               onClick={() => setMobileMenuVisible(true)}
               style={{ fontSize: '18px' }}
             />
           )}
           <img src="/images/logo.svg" alt="logo" style={{ height: '32px' }} />
         </div>
         
         {/* Center section - Search (hidden on mobile) */}
         
         
         {/* Right section - Utility icons */}
         <div style={{display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '16px'}}>
           {!isMobile && <Input.Search placeholder="搜索" style={{ width: 300 }} />}
           <Button type="text" icon={<SunOutlined />} />
           <Button type="text" icon={<BellOutlined />} />
           <Avatar style={{ backgroundColor: '#1890ff' }}>A</Avatar>
         </div>
      </Header>
      
      <Layout>
        {/* Desktop Sider */}
        {!isMobile && (
          <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            style={{ 
              background: '#fff',
              borderRight: '1px solid #f0f0f0'
            }}
          >
          <Menu
            mode="inline"
            selectedKeys={getSelectedKeys()}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
             items={[
               {
                 key: '1',
                 icon: <DashboardOutlined />,
                 label: '仪表盘',
                 children: [
                   { key: '1-1', label: '工作台' },
                 ],
               },
               {
                 key: '3',
                 icon: <BarChartOutlined />,
                 label: '数据可视化',
                 children: [
                   { key: '3-1', label: '分析页' },
                   { key: '3-2', label: '多维数据分析' },
                 ],
               },
               {
                 key: '4',
                 icon: <UnorderedListOutlined />,
                 label: '列表页',
                 children: [
                   { key: '4-1', label: '查询表格' },
                   { key: '4-2', label: '卡片列表' },
                   { key: '4-3', label: '钱包管理' },
                   { key: '4-4', label: '提现管理' },
                   { key: '4-5', label: '存款管理' },
                 ],
               },
               {
                 key: '5',
                 icon: <FormOutlined />,
                 label: '表单页',
                 children: [
                   { key: '5-1', label: '分布表单' },
                   { key: '5-2', label: '分组表单' },
                 ],
               },
               {
                 key: '6',
                 icon: <FileTextOutlined />,
                 label: '详情页',
                 children: [
                   { key: '6-1', label: '基础详情页' },
                   { key: '6-2', label: '高级详情页' },
                 ],
               },
               {
                 key: '7',
                 icon: <CheckCircleOutlined />,
                 label: '结果页',
                 children: [
                   { key: '7-1', label: '成功页' },
                   { key: '7-2', label: '失败页' },
                 ],
               },
               {
                 key: '8',
                 icon: <ExclamationCircleOutlined />,
                 label: '异常页',
               },
               {
                 key: '9',
                 icon: <UserOutlined />,
                 label: '个人中心',
                 children: [
                   { key: '9-1', label: '用户信息' },
                   { key: '9-2', label: '用户设置' },
                 ],
               },
             ]}
          />
        </Sider>
        )}
        
        {/* Mobile Drawer */}
        <Drawer
          title="菜单"
          placement="left"
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          width={280}
          styles={{ body: { padding: 0 } }}
        >
          <Menu
            mode="inline"
            selectedKeys={getSelectedKeys()}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
            items={[
              {
                key: '1',
                icon: <DashboardOutlined />,
                label: '仪表盘',
                children: [
                  { key: '1-1', label: '工作台' },
                ],
              },
              {
                key: '3',
                icon: <BarChartOutlined />,
                label: '数据可视化',
                children: [
                  { key: '3-1', label: '分析页' },
                  { key: '3-2', label: '多维分析' },
                ],
              },
              {
                key: '4',
                icon: <UnorderedListOutlined />,
                label: '列表页',
                children: [
                  { key: '4-1', label: '卡片列表' },
                  { key: '4-2', label: '查询表格' },
                  { key: '4-3', label: '钱包管理' },
                  { key: '4-4', label: '提现管理' },
                  { key: '4-5', label: '存款管理' },
                ],
              },
              {
                key: '5',
                icon: <FormOutlined />,
                label: '表单页',
                children: [
                  { key: '5-1', label: '分布表单' },
                  { key: '5-2', label: '分组表单' },
                ],
              },
              {
                key: '6',
                icon: <FileTextOutlined />,
                label: '详情页',
                children: [
                  { key: '6-1', label: '基础详情页' },
                  { key: '6-2', label: '高级详情页' },
                ],
              },
              {
                key: '7',
                icon: <CheckCircleOutlined />,
                label: '结果页',
                children: [
                  { key: '7-1', label: '成功页' },
                  { key: '7-2', label: '失败页' },
                ],
              },
              {
                key: '8',
                icon: <ExclamationCircleOutlined />,
                label: '异常页',
              },
              {
                key: '9',
                icon: <UserOutlined />,
                label: '个人中心',
                children: [
                  { key: '9-1', label: '用户信息' },
                  { key: '9-2', label: '用户设置' },
                ],
              },
            ]}
          />
        </Drawer>
        
        <Layout style={{ padding: isMobile ? '16px' : '24px' }}>
          <Content style={{ 
            background: '#f5f5f5', 
            padding: isMobile ? '16px' : '24px', 
            borderRadius: '8px',
            minHeight: 'calc(100vh - 64px - 48px)'
          }}>
            {/* Breadcrumb */}
            <Breadcrumb 
              style={{ marginBottom: '16px' }}
              items={getBreadcrumbItems().map((item, index) => ({
                title: index === 0 ? (
                  <span>
                    <ThunderboltFilled style={{ marginRight: '8px', color: '#1890ff' }} />
                    {item.title}
                  </span>
                ) : item.title
              }))}
            />
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
