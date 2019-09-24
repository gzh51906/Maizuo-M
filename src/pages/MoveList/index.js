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
      dataIndex: 'movename',
      key: 'movename',
    },
    {
      title: '制作国家',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: '语言',
      key: 'language',
      dataIndex: 'language',
    },
    {
      title: '电影时长',
      key: 'movetime',
      dataIndex: 'movetime',
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
            movename: 'name',
            country:  'nation',
            language: 'language',
            movetime: 'runtime'
        })
        this.setState({
            filmlist
        })
        console.log('lisy',this.state.filmlist);
        
    }

    render(){
        let { filmlist } = this.state
        return <div>
                   <Table columns={columns} dataSource={filmlist} />
               </div>
    }
}

export default MoveList



