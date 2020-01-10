import React from 'react'
import { Route, IndexRoute, Lifecycle } from 'react-router'

import {
  App,
  Home,
  Coupon,
  CouponDetail,
  Tour,
  User,
  NotFoundPage,
} from '../pages'
import { Login } from '../components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="coupon">
      <IndexRoute component={Coupon}/>
      <Route path=":id" component={CouponDetail}/>
    </Route>
    <Route path="tour" component={Tour}/>
    <Route path="user" component={User}/>
    <Route path="login" component={Login}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);