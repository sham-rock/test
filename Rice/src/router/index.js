import Vue from 'vue';
import Router from 'vue-router';

import home from '@/components/tabbarcontainers/home';
import getCard from '@/components/tabbarcontainers/getCard';
import my from '@/components/tabbarcontainers/my';

import cardDetails from '@/components/cardDetails';
import setInfo from '@/components/setInfo';
import checkName from '@/components/checkName';
import checkTel from '@/components/checkTel';
import shippingAddress from '@/components/shippingAddress';
import modify from '@/components/modify';
import member from '@/components/member';

import login from '@/components/login'
import share from '@/components/share'
import order from '@/components/order'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/getCard',
			name: 'getCard',
			component: getCard
		},
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/cardDetails',
			name: 'cardDetails',
			component: cardDetails
		},
		{
			path: '/setInfo',
			name: 'setInfo',
			component: setInfo
    },
    {
			path: '/checkName',
			name: 'checkName',
			component: checkName
    },
    {
			path: '/checkTel',
			name: 'checkTel',
			component: checkTel
    },
    {
			path: '/shippingAddress',
			name: 'shippingAddress',
			component: shippingAddress
    },
    {
			path: '/modify',
			name: 'modify',
			component: modify
    },
    {
			path: '/member',
			name: 'member',
			component: member
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/share',
      name:'share',
      component:share
    },
    {
      path:'/order',
      name:'order',
      component:order
    }
	]
});
