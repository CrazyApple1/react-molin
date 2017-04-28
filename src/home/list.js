/**
 * Created by shiyanlin
 * 810975746@qq.com
 */
const React = require('react');
const ReactDOM = require('react-dom');

import { Table } from 'antd-mobile';

import {Link} from 'react-router-dom'

import styles from './list.less';

const columns = [
  { title: '标题', dataIndex: 'title', key: 'title', width: '1rem', fixed: 'left' },
  { title: '姓名', dataIndex: 'a', key: 'a', width: '1rem' },
  { title: '年龄', dataIndex: 'b', key: 'b', width: '1rem' },
  { title: '身高', dataIndex: 'c', key: 'c', width: '1rem' },
  { title: '体重', dataIndex: 'b', key: 'd', width: '1rem' },
  { title: '爱好', dataIndex: 'b', key: 'e', width: '1rem' },
  { title: '生日', dataIndex: 'b', key: 'f', width: '1rem' },
  { title: '住址', dataIndex: 'b', key: 'g', width: '1rem' },
  { title: '电话', dataIndex: 'b', key: 'h', width: '1rem' },
  { title: '邮编', dataIndex: 'b', key: 'i', width: '1rem' },
  { title: '其他', dataIndex: 'b', key: 'j', width: '1rem' },
];

const data = [
  { title: '人物1', a: '二哈', b: '32', d: 3, key: '1' },
  { title: '人物2', a: '小明', b: '98', d: 3, key: '2' },
  { title: '人物3', a: '猪头', c: '16', d: 2, key: '3' },
  { title: '人物4', a: '小二', c: '33', d: 2, key: '4' },
];

export default class List extends React.Component{
	render(){
        return(
            <div style={{ padding: 20 }}>
      				<Table
      					titleFixed
      					columns={columns}
      					dataSource={data}
      				/>
              <Link to='index'>home/index页面</Link>
      			</div>
        )
    }
}

module.exports = List;
