import React from 'react';
import { Input,Col,Button } from 'antd';
import axios from 'axios';
import './editmove.css'
import Api from '../../api'

class EditMove extends React.Component{

    state = {
        //电影名称
        name: '',
        //电影编号
        filmId: '',
        //制作国家
        nation: '',
        //语言
        language: '',
        //电影时长
        runtime: '',
        //电影导演
        director: '',
        //电影类型
        category: ''
    }

    // componentDidMount = async () => {
    //     let {data:filmlist} = await Api.get({
    //         name: 'name',
    //         filmId: 'filmId',
    //         nation:  'nation',
    //         language: 'language',
    //         runtime: 'runtime',
    //         director: 'director',
    //         category: 'category'
    //     })
    //     this.setState({
    //         filmlist:filmlist
    //     })
    // }

    Movename = ({ target: { value } }) => {
        this.setState({ name: value })
    }

    Movefilmid = ({ target: { value } }) => {
        this.setState({ filmId: value })
    }

    Movenation = ({ target: { value } }) => {
        this.setState({ nation: value })
    }

    Movelanguage = ({ target: { value } }) => {
        this.setState({ language: value })
    }

    Moveruntime = ({ target: { value } }) => {
        this.setState({ runtime: value })
    }

    Movedirector = ({ target: { value } }) => {
        this.setState({ director: value })
    }

    Movecategory = ({ target: { value } }) => {
        this.setState({ category: value })
    }

    editConfirm = () => {
        console.log(this.props.match.params.id);
        console.log(this);
    }

    render(){
       
        return (
            <div className='addmove'>
                <div className='addmove-item'>
                   <Col span={5}>电影名称</Col>
                      <Col span={12}>
                      <Input placeholder="请输入内容" value={this.state.name} onChange={this.Movename}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>电影编号</Col>
                      <Col span={5}>
                      <Input placeholder="请输入内容" value={this.state.filmId} onChange={this.Movefilmid}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>制作国家</Col>
                      <Col span={5}>
                      <Input placeholder="请输入内容" value={this.state.nation} onChange={this.Movenation}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>语言</Col>
                      <Col span={5}>
                      <Input placeholder="请输入内容" value={this.state.language} onChange={this.Movelanguage}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>电影时长</Col>
                      <Col span={5}>
                      <Input placeholder="请输入内容" value={this.state.runtime} onChange={this.Moveruntime}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>导演</Col>
                      <Col span={5}>
                      <Input placeholder="请输入内容" value={this.state.director} onChange={this.Movedirector}/>
                   </Col>
                </div>
                <div className='addmove-item'>
                   <Col span={5}>电影类型</Col>
                      <Col span={8}>
                      <Input placeholder="请输入内容" value={this.state.category} onChange={this.Movecategory}/>
                   </Col>
                </div>
                <div className='btn'>
                    <Button type="danger" onClick={this.editConfirm}>确认修改</Button>
                </div>
            </div>           
        )
    }
}

export default EditMove