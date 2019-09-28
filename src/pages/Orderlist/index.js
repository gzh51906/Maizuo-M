import React from 'react';

import { Table, Button, Input } from 'antd';
const { Search } = Input;
const ButtonGroup = Button.Group;
import Api from '../../api'



class Orderlist extends React.Component {
    state = {
        datalist: [],
        //当前页面
        page: 1
    }
    async componentDidMount() {
        let { data } = await Api.getcinema('http://localhost:1906/cinema/userlist')
        // console.log(data)
        // 遍历用户信息
        let arr = []
        data.forEach((item, index) => {
            let list = JSON.parse(item.oderlist)
            // console.log("list", list)
            list.forEach((e, i) => {
                item.key = e.name + item.phone + i
                let obj = { ...item, ...e }
                arr.push(obj)
            })
        })
        // console.log(arr)
        this.setState({ datalist: arr })

    }
    // 点击编辑跳转到编辑影院页面
    goto = (index) => {

    }
    // 页码
    page = (e) => {

        this.setState({ page: e.current })

    }
    // 点击删除
    remove = async (index) => {
        let i = index + (this.state.page - 1) * 10
        // let _id = this.state.datalist[i]._id

        // console.log(i)
        // 删除请求
        // console.log(this.state.datalist[i].phone)
        let phone = this.state.datalist[i].phone
        let list = this.state.datalist.splice(i, 1)
        this.setState({ datalist: this.state.datalist })
        let res = this.state.datalist.filter((e) => {
            return e.phone == phone
        })
        let oderlist = []
        res.forEach((item, i) => {
            let obj = {}
            obj.name = item.name
            obj.time = item.time
            obj.src = item.src
            obj.num = item.num
            obj.price = item.price
            obj.total = item.total
            oderlist.push(obj)
        })
        oderlist = JSON.stringify(oderlist)
        let data = await Api.patchcinema('http://localhost:1906/cinema/uporderlist', { phone, oderlist })
        // console.log(oderlist)
        alert("删除成功")




    }
    // 搜索
    search = async (value) => {

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
                title: '用户电话',
                dataIndex: 'phone',
                key: 'phone',
                align: 'center',
                width: '15%'
            },
            {
                title: '用户账户名',
                dataIndex: 'nickname',
                key: 'nickname',
                align: 'center',
                className: 'address',
                width: '10%'

            }, {
                title: '订单电影',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
                width: '12%'
            }, {
                title: '电影价格',
                dataIndex: 'price',
                key: 'price',
                align: 'center',
                width: '5%'
            },
            {
                title: '订单数量',
                dataIndex: 'num',
                key: 'num',
                align: 'center',
                width: '5%'
            }, {
                title: '总价',
                dataIndex: 'total',
                key: 'total',
                align: 'center',
                width: '5%'
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
                placeholder="查询用户"
                onSearch={this.search}
                style={{ width: 200 }}
            />
            <Table columns={columns} dataSource={this.state.datalist} bordered onChange={this.page} />
        </div>
    }
}

export default Orderlist



