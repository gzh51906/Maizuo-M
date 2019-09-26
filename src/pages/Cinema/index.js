import React from 'react';

import { Table, Button, Input } from 'antd';
const { Search } = Input;
const ButtonGroup = Button.Group;
import Api from '../../api'
import './cinema.css'


class AddUrse extends React.Component {
  state = { datalist: [] }
  async componentDidMount() {
    // 获取电影影院列表
    let { data } = await Api.getcinema('http://localhost:1906/cinema/allcinema')
    console.log(data)
    data.forEach((item, i) => {
      item.key = i
      item.lowPrice = item.lowPrice / 100
    })
    this.setState({ datalist: data })
  }
  // 点击编辑跳转到编辑影院页面
  goto = (id) => {
    console.log(id)
    this.props.history.push({ pathname: `/home/editcinema/${id}` })
  }
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        align: 'center',
        width: '5%',
        render: (text, record, index) => {
          return index + 1

        },
      },
      {
        title: '电影院名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: '15%'
      },
      {
        title: '影院地址',
        dataIndex: 'address',
        key: 'address',
        align: 'center',
        className: 'address',
        width: '43%'

      }, {
        title: '影院所属区域',
        dataIndex: 'districtName',
        key: 'districtName',
        align: 'center',
        width: '12%'
      },
      {
        title: '影院电话',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',
        width: '15%'
      }, {
        title: '最低票价',
        dataIndex: 'lowPrice',
        key: 'lowPrice',
        align: 'center',
        width: '10%'
      },
      {
        title: '操作',
        key: 'actions',
        align: 'center',
        width: '10%',
        render: (text, record, index) => (
          <ButtonGroup >
            <Button size='small' onClick={this.goto.bind(this, this.state.datalist[index]._id)}>编辑</Button>
            <Button type="danger" size='small'>删除</Button>
          </ButtonGroup>
        ),
      },
    ];
    return <div className='cinema'>
      <Search
        placeholder="查询影院"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <Table columns={columns} dataSource={this.state.datalist} bordered />
    </div>
  }
}

export default AddUrse



