import React from 'react';

import { Table, Button, Input } from 'antd';
const { Search } = Input;
const ButtonGroup = Button.Group;
import Api from '../../api'
import './cinema.css'


class AddUrse extends React.Component {
  state = {
    datalist: [],
    //当前页面
    page: 1
  }
  async componentDidMount() {
    // 获取电影影院列表
    let { data } = await Api.getcinema('http://localhost:1906/cinema/allcinema')
    // console.log(data)
    data.forEach((item, i) => {
      item.key = i
      item.lowPrice = item.lowPrice / 100
    })
    this.setState({ datalist: data })
  }
  // 点击编辑跳转到编辑影院页面
  goto = (index) => {
    let i = index + (this.state.page - 1) * 10
    let id = this.state.datalist[i]._id
    console.log(id)
    this.props.history.push({ pathname: `/home/editcinema/${id}` })
  }
  // 页码
  page = (e) => {
    // console.log(e.current)
    this.setState({ page: e.current })

  }
  // 点击删除
  remove = async (index) => {
    let i = index + (this.state.page - 1) * 10
    let _id = this.state.datalist[i]._id
    // console.log(_id)


    // 删除请求
    await Api.remove('http://localhost:1906/cinema/removefilm', { _id })
    let list = this.state.datalist.splice(i, 1)
    this.setState({ datalist: this.state.datalist })

  }
  // 搜索
  search = async (value) => {
    let { data } = await Api.getcinema('http://localhost:1906/cinema/allcinema', { name: value })
    // console.log(data)
    data.forEach((item, i) => {
      item.key = i
      item.lowPrice = item.lowPrice / 100
    })
    this.setState({ datalist: data })
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
            <Button size='small' onClick={this.goto.bind(this, index)}>编辑</Button>
            <Button type="danger" size='small' onClick={this.remove.bind(this, index)}>删除</Button>
          </ButtonGroup>
        ),
      },
    ];
    return <div className='cinema'>
      <Search
        placeholder="查询影院"
        onSearch={this.search}
        style={{ width: 200 }}
      />
      <Table columns={columns} dataSource={this.state.datalist} bordered onChange={this.page} />
    </div>
  }
}

export default AddUrse



