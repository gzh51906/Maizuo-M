import React from 'react';

import { Table, Button, Input, Icon } from 'antd';
const { Search } = Input;
const ButtonGroup = Button.Group;
import Api from '../../api'



class Hotfilm extends React.Component {
    state = {
        //数据
        datalist: [],
        //当前页面
        page: 1
    }
    async componentDidMount() {
        // 请求影片列表
        let { data } = await Api.getcinema('http://localhost:1906/cinema/allfilm')
        console.log(data)
        data.forEach((item, i) => {
            item.key = i

        })
        this.setState({ datalist: data })

    }
    // 点击编辑跳转到编辑影院页面
    goto = (id) => {

    }
    // 点击跳转到添加影片页面
    addfilm = () => {
        this.props.history.push({ pathname: `/home/addfilm` })
    }
    // 点击删除影片
    remove = async (index) => {
        let i = index + (this.state.page - 1) * 10
        let _id = this.state.datalist[i]._id
        console.log(_id, i)

        // 删除请求
        await Api.remove('http://localhost:1906/cinema/removefilm', { _id })
        let list = this.state.datalist.splice(i, 1)
        this.setState({ datalist: this.state.datalist })

    }
    // 页码
    page = (e) => {
        // console.log(e.current)
        this.setState({ page: e.current })

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
                title: '电影名',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
                width: '10%'
            },
            {
                title: '影片导演',
                dataIndex: 'director',
                key: 'director',
                align: 'center',
                className: 'director',
                width: '15%'

            }, {
                title: '影片类型',
                dataIndex: 'category',
                key: 'category',
                align: 'center',
                width: '10%'
            },
            {
                title: '拍摄国家',
                dataIndex: 'nation',
                key: 'nation',
                align: 'center',
                width: '15%'
            }, {
                title: '语言',
                dataIndex: 'language',
                key: 'language',
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
                        <Button type="danger" size='small' onClick={this.remove.bind(this, index)}>删除</Button>
                    </ButtonGroup>
                ),
            },
        ];
        return <div className='cinema'>
            <Search
                placeholder="查询影片"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <Button onClick={this.addfilm} style={{ float: 'right', background: '#58bc58' }}><Icon type="plus-circle" />添加影片</Button>
            <Table style={{ marginTop: 10 }} columns={columns} dataSource={this.state.datalist} bordered onChange={this.page} />
        </div>
    }
}

export default Hotfilm