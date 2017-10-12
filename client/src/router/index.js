import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: ArticleDetail
        },
        {
          name: 'Details',
          path: '/details/:id',
          component: ArticleDetail,
          props: true
        }

      ]
    },
  ],
});
