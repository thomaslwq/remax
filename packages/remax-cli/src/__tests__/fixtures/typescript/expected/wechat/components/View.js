'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
var Platform = require('../npm/remax/esm/Platform.js');
require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
var index$1 = require('../npm/remax/npm/remax-alipay/esm/hostComponents/index.js');
var index$2 = require('../npm/remax/npm/remax-wechat/esm/hostComponents/View/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Input/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Textarea/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Video/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Swiper/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/ScrollView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/SwiperItem/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/MovableView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/MovableArea/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CoverView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CoverImage/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Icon/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Text/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/RichText/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Progress/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Button/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/CheckboxGroup/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Checkbox/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Form/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Label/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Picker/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/PickerView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/PickerViewColumn/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/RadioGroup/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Radio/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Slider/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Switch/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Navigator/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Image/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/LivePlayer/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/LivePusher/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Map/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Canvas/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/OpenData/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/OfficialAccount/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Editor/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Audio/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/Ad/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/WebView/index.js');
require('../npm/remax/npm/remax-wechat/esm/hostComponents/FunctionalPageNavigator/index.js');
require('../npm/remax/npm/remax-wechat/esm/api/index.js');
var index$H = require('../npm/remax/npm/remax-toutiao/esm/hostComponents/index.js');

function View() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  switch (Platform.default.current) {
    case 'alipay':
      return React.createElement(index$1.View, props);

    case 'toutiao':
      return React.createElement(index$H.View, props);

    case 'wechat':
    default:
      return React.createElement(index$2.default, props);
  }
}

exports.default = View;
