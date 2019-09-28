import React from 'react';
import { Input,Col } from 'antd';

const InputGroup = Input.Group;

class AddMove extends React.Component{

    render(){
        return <div>
                   <InputGroup size="large">
                      <Col span={5}>
                         <Input defaultValue="0571" />
                      </Col>
                   </InputGroup>
               </div>
    }
}

export default AddMove