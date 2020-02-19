import React, { Component } from 'react'
import styles from './index.scss'
import { Link } from 'react-router'
import { Button, InputItem } from 'antd-mobile';

export default class Login extends Component {
  state = {
    user: {}
  }
  login(){
    console.log('点击登录')
  }

  render() {
    const { user } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.loginBox}>
          <div className={styles.avatarBox}> 
            <div className={styles.avatarBg}></div>
          </div>
          <div className={styles.inputBox}>
            <InputItem placeholder="账号" className={styles.inputItem}>
              <i className={`iconfont icon-zhanghao ${styles.icon}`} />
            </InputItem>
            <InputItem placeholder="密码" type="password" className={`inputLine ${styles.inputItem}`}>
              <i className={`iconfont icon-mima ${styles.icon}`} />
            </InputItem>
          </div>

          <div className={styles.loginBtn}>
            <Link to="/">
              <Button type="primary" onClick={this.login}>登录</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}