import React from 'react';
import {Card, Col, Icon, Layout, Row} from 'antd';
import {withRouter} from 'react-router-dom';
import {injectIntl} from 'react-intl';
import HeadsComponent from '../module/HeadsComponent';
import './HomeComponent.css';

/**
 * 模块展示页
 */
const {Meta} = Card;
const {Content} = Layout;

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // 模块点击事件
    cardClick = () => {
        this.props.history.push("/app/configure")
    }

    render() {
        return (
            <div>
                {/* 头部组件 */}
                <HeadsComponent/>
                <div id="homeDiv">
                    <Content id="homeContent">
                        <div>
                            <Row style={{margin:'0'}} gutter={48}>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='solution' className="iconStyle1" style={{
                                            backgroundColor: '#9cca65',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='setting' style={{
                                            backgroundColor: '#2286da',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='bell' style={{
                                            backgroundColor: '#fad863',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='bar-chart' style={{
                                            backgroundColor: '#f99d53',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='fork' style={{
                                            backgroundColor: '#63c1de',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='database' style={{
                                            backgroundColor: '#2ac0c1',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='desktop' style={{
                                            backgroundColor: '#65ca78',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='code-o' style={{
                                            backgroundColor: '#f9856e',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='profile' style={{
                                            backgroundColor: '#8d8de6',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='switcher' style={{
                                            backgroundColor: '#ddbb68',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='check-square-o' style={{
                                            backgroundColor: '#5cadf1',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                                <Col className="colStyle" xs={24} sm={12} md={8} lg={6}>
                                    <Card
                                        className="cardStyle"
                                        cover={<Icon type='environment-o' style={{
                                            backgroundColor: '#f6c059',
                                            width: '180px',
                                            height: '110px',
                                            borderRadius: '5px'
                                        }}/>}
                                        // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                                        onClick={this.cardClick}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Configure"
                                            description="This is the Configure description"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </div>
            </div>
        );
    }
}

export default withRouter(injectIntl(HomeComponent));
