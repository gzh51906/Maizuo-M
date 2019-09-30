import React from 'react';

import { Table, Button } from 'antd';

const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: idx => {idx+1},
    },
    {
      title: '代办事项',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '预计完成时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '是否完成',
      key: 'done',
      dataIndex: 'done',
    },
    {
      title: '操作',
      key: 'actions',
      render: () => (
        <div>
            <Button>点击</Button>
        </div>
      ),
    },
  ];

  const data = []

class Cinema extends React.Component{
    render(){
        return <div>
                   <Table columns={columns} dataSource={data} />
               </div>
    }
}

export default Cinema



