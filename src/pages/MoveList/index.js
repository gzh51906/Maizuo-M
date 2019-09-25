import React from 'react';
import { Table,Button } from 'antd';
import api from '../../api';

const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      render: idx => {idx+1},
    },
    {
      title: '电影名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '制作国家',
      dataIndex: 'nation',
      key: 'nation',
    },
    {
      title: '语言',
      key: 'language',
      dataIndex: 'language',
    },
    {
      title: '电影时长',
      key: 'runtime',
      dataIndex: 'runtime',
    },
    {
      title: '操作',
      key: 'operation',
      render: () => (
        <div>
            <Button>编辑</Button>
            <Button type="danger">删除</Button>
        </div>
      ),
    }
  ];

class MoveList extends React.Component{
    state={
        filmlist:[]
    }

    async componentDidMount(){
        let {data:filmlist} = await api.get({
            name: 'name',
            nation:  'nation',
            language: 'language',
            runtime: 'runtime'
        })
        this.setState({
            filmlist
        })
    }

    goto = () => {
      this.props.history.push('/home/addmove'); 
    }

    render(){
        let { filmlist } = this.state
        return <div>
                   <Button onClick={this.goto}>添加</Button>
                   <Table columns={columns} 
                          dataSource={filmlist}
                          rowKey={filmlist => filmlist.filmId} />
               </div>
    }
}

export default MoveList



