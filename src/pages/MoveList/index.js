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
            <Button>点击</Button>
        </div>
      ),
    }
  ];

// const data = [{
//     key: 1,
//     movename: "扫毒",
//     country: "中国",
//     language: "简体中文",
//     movetime: "107分钟"
//   },{
//     key:2,
//     movename: "速度与激情",
//     country: "美国",
//     language: "英文",
//     movetime: "131分钟"
// }]

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

    render(){
        let { filmlist } = this.state
        return <div>
                   <Table columns={columns} 
                          dataSource={filmlist}
                          rowKey={filmlist => filmlist.filmId} />
               </div>
    }
}

export default MoveList



