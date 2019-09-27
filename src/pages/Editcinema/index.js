import React, { Component } from 'react';
import { Row, Col, Input, Cascader, Button } from 'antd';
import Api from '../../api'
import './editcinema.css'


class Editcinema extends Component {
    state = {
        options: [{
            value: '白云区',
            label: '白云区',
        },
        {
            value: '海珠区',
            label: '海珠区',
        },
        {
            value: '天河区',
            label: '天河区',
        }, {
            value: '越秀区',
            label: '越秀区',
        }, {
            value: '番禺区',
            label: '番禺区',
        }, {
            value: '荔湾区',
            label: '荔湾区',
        }, {
            value: '花都区',
            label: '花都区',
        }, {
            value: '黄埔区',
            label: '黄埔区',
        }, {
            value: '南沙区',
            label: '南沙区',
        }, {
            value: '萝岗区',
            label: '萝岗区',
        }, {
            value: '从化区',
            label: '从化区',
        }, {
            value: '增城区',
            label: '增城区',
        }],
        // 影院所有信息
        cinemaAll: {},
        // 影院名
        name: '',
        // 影院地址
        address: '',
        //影院所属区域
        districtName: '',
        //影院电话
        phone: '',
        //影院票价
        price: '',
        // 影院提示
        tips: ''

    }
    async componentDidMount() {
        console.log(this.props)
        let { data } = await Api.getcinema('http://localhost:1906/cinema/idcinema', { _id: this.props.match.params.id })
        console.log(data[0], this.props.match.params.id)
        //设置影院初始值
        this.setState({ cinemaAll: data[0], name: data[0].name, address: data[0].address, districtName: data[0].districtName, price: data[0].lowPrice, phone: data[0].phone, tips: data[0].notice })

    }
    // 影院所属地区
    onChange = (value) => {
        console.log(value.join(''))
        this.setState({ districtName: value.join('') })
    }
    // 电影院名
    cinemaname = ({ target: { value } }) => {
        console.log(value)
        this.setState({ name: value })
    }
    // 电影院地址
    cinemaaddress = ({ target: { value } }) => {
        console.log(value)
        this.setState({ address: value })
    }
    // 电影院电话
    cinemaphone = ({ target: { value } }) => {
        console.log(value)
        this.setState({ phone: value })
    }
    // 影院票价
    cinemaprice = ({ target: { value } }) => {
        console.log(value)
        this.setState({ price: value })
    }
    // 影院提示
    cinematips = ({ target: { value } }) => {
        console.log(value)
        this.setState({ tips: value })
    }
    // 确认按钮事件
    btn = async () => {

        // console.log(this.state.cinemaAll)
        let data = await Api.patchcinema('http://localhost:1906/cinema/upcinema', { _id: this.state.cinemaAll._id, name: this.state.name, address: this.state.address, districtName: this.state.districtName, phone: this.state.phone, lowPrice: this.state.price, notice: this.state.tips })
        alert("修改成功")
    }


    render() {
        return (
            <div className='editcinema'>
                <div className='cinema-name item'><Row gutter={16}>
                    <Col span={3}>影院名称</Col>
                    <Col span={18}>
                        <Input value={this.state.name} onChange={this.cinemaname} placeholder="请输入影院名称" style={{ width: 500 }} />
                    </Col>
                </Row></div>
                <div className="cinema-address item">
                    <Row gutter={16}>
                        <Col span={3}>影院地址</Col>
                        <Col span={18}>
                            <Input onChange={this.cinemaaddress} placeholder="请输入影院地址" value={this.state.address} style={{ width: 900 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-districtName item">
                    <Row gutter={16}>
                        <Col span={3}>影院所属区域</Col>
                        <Col span={18}>
                            <Cascader defaultValue={[`${this.state.districtName}`]} options={this.state.options} onChange={this.onChange} placeholder="请选择区域" />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-phone item">
                    <Row gutter={16}>
                        <Col span={3}>影院电话</Col>
                        <Col span={18}>
                            <Input onChange={this.cinemaphone} value={this.state.phone} placeholder="请输入影院电话" style={{ width: 400 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-lowPrice item">
                    <Row gutter={16}>
                        <Col span={3}>影院最低票价</Col>
                        <Col span={18}>
                            <Input onChange={this.cinemaprice} value={this.state.price} placeholder="请输入影院票价" style={{ width: 200 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-tips item">
                    <Row gutter={16}>
                        <Col span={3}>影院提示</Col>
                        <Col span={18}>
                            <Input onChange={this.cinematips} value={this.state.tips} placeholder="请输入影院提示" style={{ width: 500 }} />
                        </Col>
                    </Row>
                </div>
                <div className='btn'>  <Button onClick={this.btn}>确认修改</Button></div>
            </div>
        )
    }
}


export default Editcinema