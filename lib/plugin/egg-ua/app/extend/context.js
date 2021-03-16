module.exports = {
    get isIOS() {
      const iosReg = /iphone|ipad|ipod/i;
      // console.log({
      //   userAgent: this.get('user-agent')
      // })
      return iosReg.test(this.get('user-agent'));
    },
  };