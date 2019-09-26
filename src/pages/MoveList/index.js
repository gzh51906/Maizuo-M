import React from 'react';
import { Table,Button } from 'antd';
import Api from '../../api';
import axios from 'axios';

class MoveList extends React.Component{
    state={
        filmlist:[]
    }

    componentDidMount = async () => {
        let {data:filmlist} = await Api.get({
            name: 'name',
            nation:  'nation',
            language: 'language',
            runtime: 'runtime',
            filmId: 'filmId'
        })
        this.setState({
            filmlist:filmlist
        })
    }

    goto = () => {
      this.props.history.push('/home/addmove'); 
    }
    
    remove = async (idx) => {
      await axios.delete("http://localhost:1906/film/",{
        data:{
          filmId:idx
        }
      }).then(res=>{
        this.componentDidMount()
      })
    }

    render(){
      const columns = [
        {
          title: '电影编号',
          dataIndex: 'filmId',
          key: 'filmId',
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
          key: 'actions',
          render: (text,record,idx) => (
            <Button.Group>
               <Button>编辑</Button>
               <Button type='danger' onClick={this.remove.bind(null,this.state.filmlist[idx].filmId)}>删除</Button>
            </Button.Group>
          ),
        }
      ];
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



