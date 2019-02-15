import React from 'react';
import './TaskDetail.css';
import {Col, Divider, Row} from 'antd';

/**
 * 任务管理详情
 */
class TaskDetail extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const DescriptionItem = ({title, content}) => (
            <div className="div_description_style">
                <p className="p_description_style">
                    {title}:
                </p>
                {content}
            </div>
        );
        return (
            <div>
                {/*<p className="p_title_style">User Profile</p>*/}
                <p className="p_style">Personal</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Full Name" content="Lily"/>{' '}
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Account" content="AntDesign@example.com"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="City" content="HangZhou"/>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Country" content="China🇨🇳"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Birthday" content="February 2,1900"/>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Website" content="-"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Message"
                            content="Make things as simple as possible but no simpler."
                        />
                    </Col>
                </Row>
                <Divider/>
                <p className="p_style">Company</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Position" content="Programmer"/>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Responsibilities" content="Coding"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Department" content="AFX"/>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Supervisor" content={<a href="https://www.baidu.com">Lin</a>}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                        />
                    </Col>
                </Row>
                <Divider/>
                <p className="p_style">Contacts</p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Email" content="AntDesign@example.com"/>
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={(
                                <div
                                    className="div_detail_table_list_style">http://github.com/ant-design/ant-design/</div>
                            )}
                        />
                    </Col>
                </Row>
                {/*<div className="assignment_detail_block">*/}
                {/*<div className="assignment_detail_title">基本信息</div>*/}
                {/*<table className="detail_table">*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                {/*<td className="detail_table_title">Name</td>*/}
                {/*<td className="detail_table_content">Edward King 1</td>*/}
                {/*<td className="detail_table_title">Age</td>*/}
                {/*<td className="detail_table_content">20</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td  className="detail_table_title">Address</td>*/}
                {/*<td className="detail_table_content">London, Park Lane no. 1</td>*/}
                {/*<td  className="detail_table_title">Name</td>*/}
                {/*<td className="detail_table_content">Edward King 2</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td  className="detail_table_title">Age</td>*/}
                {/*<td className="detail_table_content">20</td>*/}
                {/*<td  className="detail_table_title">Address</td>*/}
                {/*<td className="detail_table_content">London, Park Lane no. 2</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*<td  className="detail_table_title">Name</td>*/}
                {/*<td className="detail_table_content">Tom</td>*/}
                {/*<td  className="detail_table_title">Age</td>*/}
                {/*<td className="detail_table_content">20</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
                {/*</table>*/}
                {/*<div className="assignment_detail_block">*/}
                {/*<div className="assignment_detail_title">网元信息</div>*/}
                {/*<table className="detail_table">*/}
                {/*<tbody>*/}
                {/*<tr>*/}
                {/*<td className="detail_table_list">课程</td>*/}
                {/*<td>*/}
                {/*<div className="detail_table_list_content">语文</div>*/}
                {/*</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
                {/*</table>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default TaskDetail;
