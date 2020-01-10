import React, { Component } from 'react'
// import { Nav, Timer } from 'app/components'
import { Header, Nav, Swipe, FastNav, Title, ShopList, Message } from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TimerActions from 'app/actions/TimerActions'

class Home extends Component {
  state =
    {
      swipeImgHeight: 0,
      swipeList: [
        { link: 'https://www.github.com', thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578632395873&di=537825c12dd868decabfc71dfc12dac7&imgtype=0&src=http%3A%2F%2Ffile2.desktx.com%2Fpc%2Fwallpaper%2F2014%2F12%2F53c729c5e99d2.jpg' },
        { link: 'https://www.github.com', thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578632426293&di=980a4a75045687f32e726c08950e9ad1&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg' },
        { link: 'https://www.github.com', thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578632497406&di=e2e24ff090bf283416ceb08913831bf9&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180917%2F19%2F1537185049-iTfRIWxCDm.jpeg' },
        { link: 'https://www.github.com', thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578632511736&di=e8a0e5bceb3ba920d27f29ace81864a9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F12%2F20160712213804_PZHxQ.thumb.700_0.jpeg' },
      ],
      fastNav: [
        {
          link: "https://www.github.com",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: "林俊杰"
        },
        {
          link: "https://www.github.com",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: "周杰伦"
        },
        {
          link: "https://www.github.com",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: "刘德华"
        },
        {
          link: "https://www.github.com",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: ""
        },
        {
          link: "https://www.github.com",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: "林俊杰"
        },
        {
          link: "/hello/",
          thumb: "http://pic.616pic.com/bg_w1180/00/24/83/LbWNiSp5Qc.jpg",
          title: "林俊杰"
        }
      ],
      shopLists: [
        {
          id: 1,
          thumb: 'http://img0.imgtn.bdimg.com/it/u=3957635465,1447645555&fm=214&gp=0.jpg',
          label: '推荐',
          discount_scale: '1',
          title: '奶茶coco',
          caption: '本市最棒的烤鱼店',
          tag: '美食',
          distance: '2.5km',
          discount_text: '本店支持微信支付',
          discount_time: '周一到周五每天9:00-24:00'
        }, {
          id: 2,
          thumb: 'http://img.zcool.cn/community/010d2e5b880899a8012126ce731e76.png@1280w_1l_2o_100sh.png',
          label: '五折优惠',
          discount_scale: '2',
          title: '年年有鱼2',
          caption: '本市最棒的烤鱼店2',
          tag: '美食',
          distance: '12.5km',
          discount_text: '本店支持微信支付',
          discount_time: '周一到周五每天9:00-24:00'
        }
      ],
      messages: [
        {
          link: '#',
          desc: '新哥说今晚八点王者5黑'
        }, {
          link: '#',
          desc: '咸鱼也要有梦想'
        }, {
          link: '#',
          desc: '来到你的城市'
        }
      ]
    }

  componentDidMount() {

  }

  render() {
    const settings = {
      autoplay: true,
      autoplayInterval: 3000,
      infinite: true,
      dots: true
    }

    const { swipeList, fastNav, shopLists, messages } = this.state

    return (
      <div ref="box" className="box">
        <Header />
        {
          swipeList &&
          <Swipe data={swipeList} hackHeight="home-swipe" {...settings} />
        }
        <div className="bg-white hor pt30">
          {fastNav.map((item, index) =>
            <FastNav key={index} data={item} />
          )}
        </div>
        <Message data={messages} />
        <Title text="精品好店" linkName="查看全部" path="/shop" />
        <div className="plr20 bg-white">
          {shopLists.map(item =>
            <ShopList key={item.id} data={item} />
          )}
        </div>
        <Nav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.timer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)