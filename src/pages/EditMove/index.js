import React from 'react';
import { Input,Col,Button } from 'antd';
import axios from 'axios'
import './editmove.css';

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

    async componentDidMount() {
        let { data:{data} } = await axios.get('http://localhost:1906/film/'+this.props.match.params.id, { params:this.props.match.params })
        
        this.setState({ name: data[0].name, 
                        filmId: data[0].filmId, 
                        nation: data[0].nation, 
                        language: data[0].language, 
                        runtime: data[0].runtime,
                        director: data[0].director, 
                        category: data[0].category })
    }

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

    editConfirm = async () => {
        await axios.patch('http://localhost:1906/film/',{
            name: this.state.name, 
            filmId: this.state.filmId, 
            nation: this.state.nation, 
            language: this.state.language, 
            runtime: this.state.runtime,
            director: this.state.director, 
            category: this.state.category
        })
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
                      <Input disabled placeholder="请输入内容" value={this.state.filmId} onChange={this.Movefilmid}/>
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