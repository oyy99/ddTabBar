import utils from '/utils/utils'
dd['utils'] = utils
App({
  onLaunch(options) {
    console.log('App Launch', options);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
  },
});
