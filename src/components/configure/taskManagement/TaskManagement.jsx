import React from 'react';
import {Icon, Input, message, Modal, Pagination, Popover, Table, Tooltip, Upload} from 'antd';
import TaskDetail from '../taskManagement/children/TaskDetail';
import {updateUser} from "../../../api/configure";
import {ajaxUrl} from "../../../utils/config";
import {injectIntl} from 'react-intl';
import {withRouter} from 'react-router-dom';
import axios from "../../../utils/interceptors";
import './TaskManagement.css';
import DetailsComponent from "../../module/DetailsComponent";
import BreadcrumbComponent from "../../module/BreadcrumbComponent";


const Search = Input.Search;

/**
 * 任务管理
 */
class TaskManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // table测试数据
            taskManagementTable: [
                {
                    key: 1,
                    name: `Edward King 1`,
                    age: 32,
                    address: `London, Park Lane no. 1`,

                }, {
                    key: 2,
                    name: `Edward King 2`,
                    age: 32,
                    address: `London, Park Lane no. 2`,

                },
                {
                    key: 3,
                    name: `Edward King 3`,
                    age: 32,
                    address: `London, Park Lane no. 3`,

                },
                {
                    key: 4,
                    name: `Edward King 4`,
                    age: 32,
                    address: `London, Park Lane no. 4`,

                },
                {
                    key: 5,
                    name: `Edward King 5`,
                    age: 32,
                    address: `London, Park Lane no. 5`,

                },
                {
                    key: 6,
                    name: `Edward King 6`,
                    age: 32,
                    address: `London, Park Lane no. 6`,

                },
                {
                    key: 7,
                    name: `Edward King 7`,
                    age: 32,
                    address: `London, Park Lane no. 7`,

                },
                {
                    key: 8,
                    name: `Edward King 8`,
                    age: 32,
                    address: `London, Park Lane no. 8`,

                },
                {
                    key: 9,
                    name: `Edward King 9`,
                    age: 32,
                    address: `London, Park Lane no. 9`,

                },
                {
                    key: 10,
                    name: `Edward King 10`,
                    age: 32,
                    address: `London, Park Lane no. 10`,

                },
                {
                    key: 11,
                    name: `Edward King 11`,
                    age: 32,
                    address: `London, Park Lane no. 11`,

                }
            ],
            // 选中的table行
            selectedRowKeys: [],
            // 控制详情显示隐藏
            display: false,
            // 分页
            pagination: {
                pageNumber: 1,
                pageSize: 10,
                current: 1,
                total: 11,
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ['10', '20', '50', '100']
            }
        }
    }

    // table左侧复选框选中事件
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
    }
    // table右侧按钮时间
    operationClick = (index, record) => {
        switch (index) {
            case 'delete':// 删除
                Modal.confirm({
                    title: 'confirm',
                    content: 'Are you sure to delete?',
                    onOk: () => {
                        updateUser().then(function (response) {
                            if (response.status === 200) {
                                message.success('delete:' + record.name + ' success');
                            }
                        })
                    }
                })
                break;
            case 'download':// 下载
                // 以blob流的形式下载
                let instance = axios.create({responseType: 'blob'});
                // 请求头添加token
                instance.defaults.headers.common['Authorization'] = sessionStorage.getItem('_token').replace(/(^")|("$)/g, '');
                let ids = [];
                instance.post(`${ajaxUrl}/logger/test?_number=` + JSON.parse(sessionStorage.getItem('_userInfo')).userId, ids).then(response => {
                    debugger
                    if (response.status === 200) {
                        // 下载组件js-file-download
                        let fileDownload = require('js-file-download');
                        let time = new Date();
                        let year = time.getFullYear();
                        let month = time.getMonth() + 1;
                        let day = time.getDate();
                        let horus = time.getHours();
                        let minutes = time.getMinutes();
                        let seconds = time.getSeconds();
                        let dateTime = `${year}${month}${day}${horus}${minutes}${seconds}`
                        fileDownload(response.data, dateTime + '.xls')
                    }
                })
                break;
            case 'edit':// 编辑
                // alert('edit:' + record.name);
                this.props.history.push('/app/configure/taskManagement/edit');
                break;
            default:
        }
    }
    // 添加
    clickAdd = () => {
        // alert('add');
        this.props.history.push('/app/configure/taskManagement/add')
    }
    // 批量删除
    clickDelete = () => {
        // 判断有无选中行
        if (this.state.selectedRowKeys.length > 0) {
            Modal.confirm({
                title: 'confirm',
                content: 'Are you sure to delete?',
                onOk: () => {
                    message.success('delete success')
                }
            })
        } else {
            alert('please choose the data')
        }
    }
    // 批量下载
    clickDownload = () => {
        // 判断有无选中行
        if (this.state.selectedRowKeys.length > 0) {
            alert('batch download');
        } else {
            alert('please choose the data')
        }
    }
    // 刷新
    clickReload = () => {
        // js清空input
        for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
            document.getElementsByTagName('input')[i].value = '';
        }
        // 清空table复选框
        this.setState({
            selectedRowKeys: []
        })
        // 刷新列表
        alert('reload table');
    }
    // 搜索
    searchList = (value) => {
        alert(value);
    }
    // 展示详情
    _handleShowDetails = () => {
        this.setState({
            display: true
        })
    }
    // 关闭详情
    _closeDetailView = () => {
        this.setState({
            display: false
        })
    }
    // 点击页码事件(Table自带分页属性的调用事件)
    // _pageSearch = (page) => {
    //     this.setState({
    //         pagination: ({
    //             pageSize: page.pageSize,
    //             pageNumber: page.current,
    //             current: page.current
    //         })
    //     })
    // }
    // 点击页码事件(Pagination组件)
    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pagination: ({
                pageSize: pageSize,
                pageNumber: current,
                current: current,
                total: 11
            })
        })
    }
    // 上传
    fileChange = (info) => {
        // 文件上传中
        if (info.file.state === 'uploading') {
            return
        }
        // 文件上传完成
        if (info.file.state === 'done') {
            // let data = info.file.response.data;
            // 文件上传错误
        } else if (info.file.status === 'error') {
            message.error('error msg');
        }
    }

    render() {
        const {selectedRowKeys} = this.state;
        // table复选框选择奇数或偶数行
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({selectedRowKeys: newSelectedRowKeys});
                },
            }],
            onSelection: this.onSelection,
        };
        // table列
        const columns = [
            {
                title: 'Name', dataIndex: 'name',
                render: (text, record) => <span className="span_pointer_style"
                                                onClick={() => this._handleShowDetails(record)}>{text}</span>
            },
            {title: 'Age', dataIndex: 'age'},
            {title: 'Address', dataIndex: 'address'},
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, record) => operation.map((value, index) => {
                    let display = {};
                    if (value.key === 'copy') {
                        // 用于置灰样式，无法点击
                        display = {
                            color: '#e7e4e7'
                        }
                    } else if (value.key === 'delete') {
                        // 高危操作样式，一般有二次确认
                        display = {
                            color: '#f74231',
                            cursor: 'pointer'
                        }
                    } else {
                        // 正常样式
                        display = {
                            color: '#108ee9',
                            cursor: 'pointer'
                        }
                    }
                    if (value.key === 'more') {
                        return (
                            <Popover key={value.key} triggger="click" placement="bottom"
                                     title={this.props.intl.formatMessage({id: 'more'})} content={
                                <div>
                                    <span className="span_pointer_style">
                                        {this.props.intl.formatMessage({id: 'upload'})}
                                    </span>
                                </div>
                            }>
                                &nbsp;&nbsp;<Icon style={{color: '#108ee9'}} type="ellipsis"/>
                            </Popover>
                        )
                    } else {
                        return (
                            <Tooltip key={value.key} title={value.locale}>
                                &nbsp;&nbsp;<Icon type={value.type} key={value.key} index={value.index} style={display}
                                                  onClick={() => this.operationClick(value.index, record)}></Icon>
                            </Tooltip>
                        )
                    }
                })
            },
        ];
        // table右侧操作按钮
        const operation = [
            {
                type: 'edit',
                key: 'edit',
                index: 'edit',
                isPopover: 'false',
                locale: this.props.intl.formatMessage({id: 'edit'})
            },
            {
                type: 'copy',
                key: 'copy',
                index: 'copy',
                isPopover: 'false',
                locale: this.props.intl.formatMessage({id: 'copy'})
            },
            {
                type: 'download',
                key: 'download',
                index: 'download',
                isPopover: 'false',
                locale: this.props.intl.formatMessage({id: 'download'})
            },
            {
                type: 'delete',
                key: 'delete',
                index: 'delete',
                isPopover: 'false',
                locale: this.props.intl.formatMessage({id: 'delete'})
            },
            {
                type: 'more',
                key: 'more',
                index: 'more',
                isPopover: 'false',
                locale: this.props.intl.formatMessage({id: 'more'})
            }
        ]
        // 面包屑
        const breadcrumbList = [
            {path: null, name: 'configure', icon: null, locale: 'configure'},
            {path: null, name: 'configure_taskManagement', icon: null, locale: 'configure_taskManagement'}
        ]
        return (
            <div className="div_module_style" id="div_taskManagement">
                {/* 面包屑 */}
                <BreadcrumbComponent currentPath={breadcrumbList}/>
                <div className="div_main_style">
                    {/* 按钮 */}
                    <div>
                        <Tooltip title={this.props.intl.formatMessage({id: 'reload'})}>
                            <span className="span_blue_style" onClick={this.clickReload}><Icon type="reload"/></span>
                        </Tooltip>
                        <Tooltip title={this.props.intl.formatMessage({id: 'download'})}>
                            <span className="span_blue_style" onClick={this.clickDownload}><Icon
                                type="download"/>&nbsp;{this.props.intl.formatMessage({id: 'download'})}</span>
                        </Tooltip>
                        <Tooltip title={this.props.intl.formatMessage({id: 'upload'})}>
                            <Upload
                                onChnage={this.fileChange.bind(this)}
                                showUploadList={false}
                                multiple={false}
                                action={`${ajaxUrl}/logger/test?_number=${JSON.parse(sessionStorage.getItem('_userInfo')) ? JSON.parse(sessionStorage.getItem('_userInfo')).userId : null}`}
                                accept=".xls,.xlsx"
                                headers={{'Authorization': sessionStorage.getItem('_token') ? sessionStorage.getItem('_token').replace(/(^")|("$)/g, '') : null}}>
                                <span className="span_blue_style"><Icon
                                    type="upload"/>&nbsp;{this.props.intl.formatMessage({id: 'upload'})}</span>
                            </Upload>
                        </Tooltip>
                        <Tooltip title={this.props.intl.formatMessage({id: 'delete'})}>
                            <span className="span_red_style" onClick={this.clickDelete}><Icon type="delete"/></span>
                        </Tooltip>
                        <Tooltip title={this.props.intl.formatMessage({id: 'add'})}>
                            <span className="span_green_style" onClick={this.clickAdd}><Icon type="plus"/></span>
                        </Tooltip>
                    </div>
                    {/* 搜索框 */}
                    <Search
                        className="search_style"
                        placeholder="input search text"
                        onSearch={this.searchList.bind(this)}/>
                    {/* 表格 */}
                    <Table
                        className="table_style"
                        size='middle'
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.taskManagementTable}
                        pagination={false}
                        // pagination={this.state.pagination}
                        // onChange={(page) => {this._pageSearch(page)}}
                        // onShowSizeChange={(page) => {this._pageSearch(page)}}
                    />
                    {/* 分页 */}
                    <div className="div_pagination_style">
                        <Pagination
                            showQuickJumper
                            size="small"
                            total={this.state.pagination.total || 0}
                            onShowSizeChange={this.onShowSizeChange.bind(this)}
                            onChange={this.onShowSizeChange.bind(this)}
                            pageSize={this.state.pagination.pageSize}
                            showSizeChanger={this.state.pagination.showSizeChanger || true}
                            pageSizeOptions={this.state.pagination.pageSizeOptions || ['10', '20', '50', '100']}
                            current={this.state.pagination.current || 1}
                            showTotal={() => {
                                return `${this.props.intl.formatMessage({id: 'total'})} ${this.state.pagination.total ? this.state.pagination.total : 0} ${this.props.intl.formatMessage({id: 'number'})}`
                            }}
                        />
                    </div>
                </div>
                <div>
                    {/* 详情 */}
                    <DetailsComponent
                        title="User Profile"
                        close={this._closeDetailView}
                        display={this.state.display}>
                        <TaskDetail>
                        </TaskDetail>
                    </DetailsComponent>
                </div>
            </div>
        );
    }
}

export default withRouter(injectIntl(TaskManagement));