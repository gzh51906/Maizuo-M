import React, { Component } from 'react';
import { Row, Col, Input, Button, Upload, Modal, Icon } from 'antd';
const { TextArea } = Input;
import Api from '../../api'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class Addfilm extends Component {
    state = {

        // 影片名
        name: '',
        // 影片导演
        director: '',
        //影片演员
        actors: {},
        //影片类型
        category: '',
        // 影片国家
        nation: '',
        // 影片语言
        language: '',
        // 影片时长
        runtime: '',
        //影片简介
        synopsis: '',

        // 上传图片
        previewVisible: false,
        previewImage: '',
        fileList: [],

    }
    async componentDidMount() {
        // console.log(this.props)


    }

    // 影片名
    filmname = ({ target: { value } }) => {
        console.log(value)
        this.setState({ name: value })
    }
    // 影片导演
    filmdirector = ({ target: { value } }) => {
        console.log(value)
        this.setState({ director: value })
    }
    //影片演员
    filmactors = ({ target: { value } }) => {
        console.log(value)
        let arr = value.split("|")
        // console.log(arr)


        this.setState({ actors: arr })
    }
    //影片类型
    filmcategory = ({ target: { value } }) => {
        console.log(value)
        this.setState({ category: value })
    }
    // 影片国家
    filmnation = ({ target: { value } }) => {
        console.log(value)
        this.setState({ nation: value })
    }
    // 影片语言
    filmlanguage = ({ target: { value } }) => {
        console.log(value)
        this.setState({ language: value })
    }
    // 影片时长
    filmruntime = ({ target: { value } }) => {
        console.log(value)
        this.setState({ runtime: value })
    }
    //影片简介
    filmsynopsis = ({ target: { value } }) => {
        console.log(value)
        this.setState({ synopsis: value })
    }

    // 确认按钮事件
    btn = async () => {
        // 把演员列表转换为数组
        let arr = []
        this.state.actors.forEach((item, i) => {
            let obj = { name: item }
            arr.push(obj)
        })

        // 图片路径
        let src = `http://localhost:1906/${this.state.fileList[0].response[0].path}`
        // 时间
        let time = parseInt(Date.now() / 1000)

        await Api.post('http://localhost:1906/cinema/addfilm', {
            name: this.state.name, director: this.state.director, actors: JSON.stringify(arr), category: this.state.category, nation: this.state.nation, language: this.state.language, runtime: this.state.runtime, synopsis: this.state.synopsis, poster: src, grade: 2.0, premiereAt: time
        })



        alert("添加成功")
        this.props.history.push({ pathname: `/home/hotfilm` })
    }
    // ---------------------
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    // 点击添加图片的函数
    handleChange = ({ fileList }) => {

        this.setState({ fileList });
        console.log(this.state.fileList)

    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传海报</div>
            </div>
        );
        return (

            <div className='editcinema'>

                <div className='cinema-name item'><Row gutter={16}>
                    <Col span={3}>影片名</Col>
                    <Col span={18}>
                        <Input value={this.state.name} onChange={this.filmname} placeholder="请输入影片名" style={{ width: 500 }} />
                    </Col>
                </Row></div>
                <div className="cinema-address item">
                    <Row gutter={16}>
                        <Col span={3}>影片导演</Col>
                        <Col span={18}>
                            <Input onChange={this.filmdirector} placeholder="请输入影片导演" style={{ width: 200 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-districtName item">
                    <Row gutter={16}>
                        <Col span={3}>影片演员</Col>
                        <Col span={18}>
                            <Input onChange={this.filmactors} placeholder="请输入影片演员" style={{ width: 500 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-phone item">
                    <Row gutter={16}>
                        <Col span={3}>影片类型</Col>
                        <Col span={18}>
                            <Input onChange={this.filmcategory} placeholder="请输入影片类型" style={{ width: 400 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-lowPrice item">
                    <Row gutter={16}>
                        <Col span={3}>影片国家</Col>
                        <Col span={18}>
                            <Input onChange={this.filmnation} placeholder="请输入影片国家" style={{ width: 200 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-tips item">
                    <Row gutter={16}>
                        <Col span={3}>影片语言</Col>
                        <Col span={18}>
                            <Input onChange={this.filmlanguage} placeholder="请输入影片语言" style={{ width: 500 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-time item">
                    <Row gutter={16}>
                        <Col span={3}>影片时长</Col>
                        <Col span={18}>
                            <Input onChange={this.filmruntime} placeholder="请输入影片时长" style={{ width: 200 }} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-time item">
                    <Row gutter={16}>
                        <Col span={3}>影片简介</Col>
                        <Col span={18}>
                            <TextArea rows={4} onChange={this.filmsynopsis} />
                        </Col>
                    </Row>
                </div>
                <div className="cinema-time item">
                    <Row gutter={16}>
                        <Col span={3}>影片海报</Col>
                        <Col span={18}>
                            <div className="clearfix">
                                <Upload
                                    action="http://localhost:1906/upload/poster"
                                    listType="picture-card"
                                    fileList={fileList}
                                    name='poster'
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='btn'>  <Button onClick={this.btn}>确认添加</Button></div>
            </div>
        )
    }
}


export default Addfilm