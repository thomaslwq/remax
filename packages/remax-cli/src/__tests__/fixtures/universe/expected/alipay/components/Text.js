'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
var Platform = require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/MovableArea/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CoverImage/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Icon/index.js');
var index$a = require('../npm/remax/npm/remax-alipay/esm/hostComponents/Text/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/RichText/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Progress/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Button/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/CheckboxGroup/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Checkbox/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Form/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Input/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Label/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Picker/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/PickerView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/PickerViewColumn/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/RadioGroup/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Radio/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Slider/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Switch/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Textarea/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Navigator/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Image/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Map/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Canvas/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/WebView/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Lifestyle/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/ContactButton/index.js');
require('../npm/remax/npm/remax-alipay/esm/hostComponents/Video/index.js');
require('../npm/remax/npm/remax-alipay/esm/api/index.js');
var index$A = require('../npm/remax/npm/remax-wechat/esm/hostComponents/index.js');
var index$B = require('../npm/remax/npm/remax-toutiao/esm/hostComponents/index.js');

function Text() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (Platform.default.current) {
    case 'alipay':
      return React.createElement(index$a.default, props);

    case 'wechat':
      return React.createElement(index$A.Text, props);

    case 'toutiao':
      return React.createElement(index$B.Text, props);
  }
}

exports.default = Text;
