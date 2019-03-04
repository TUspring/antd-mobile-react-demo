import React, { Component } from 'react'
import { Nav } from '../../components'
import styles from './index.scss'


export default class Tour extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <div className={styles.title}>美文语录</div>
          <ul>
            <li className={styles.items}>
              <img src="{../../assets/images/timg.jpg}" /> 
              <div className={styles.prompt}>
                 相信努力和时光，时光第一个辜负你，不负时光，不负自己，努力，这刻起！
              </div>
            </li>
            <li className={styles.items}>
              <img src="../../assets/images/timg2.jpg" /> 
              <div className={styles.prompt}>
              人生最难缠的是自己。有些忙碌，是自己倒腾的；
              有些劳累，是自己折腾的。拼命追逐本无谓的东西，
              我们漠视了心灵的平静。有些精彩注定属于他人，
              你无须驻足；走好平凡的步履，期待无常会不约不至。
              没有什么快乐，胜过有颗安闲自在的心。
              </div>
            </li>
            <li className={styles.items}>
              <img src="../../assets/images/timg3.jpg" /> 
              <div className={styles.prompt}>
                你爱的那个人也不见得百般好，只要他有一个优点，
                就被你无限放大，爱不释手。——《肆爱》
              </div>
            </li>
            <li className={styles.items}>
              <img src="../../assets/images/timg4.jpg" /> 
              <div className={styles.prompt}>
              人生，哪能事事如意；生活，哪能样样顺心。
              不和小人较真，因为不值得；不和自己较真，
              因为伤不起；不和往事较真，因为没价值；
              不和现实较真，因为要继续。因为善良，所以宽容；
              因为责任，所以承担；因为某种理由；所以愿意妥协。
              因为看轻，所以快乐；因为看淡，所以幸福。
              </div>
            </li>
          </ul>
        </div>
        <Nav />
        
      </div>
    )
  }
}
