'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
require('../npm/remax/esm/render.js');
var React = require('react');
require('../npm/remax/esm/createAppConfig.js');
require('../npm/remax/esm/createHostComponent.js');
require('../npm/remax/esm/Platform.js');
var createPageConfig = require('../npm/remax/esm/createPageConfig.js');
require('../npm/remax/esm/index.js');
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
var index$e = require('../npm/remax/npm/remax-wechat/esm/hostComponents/Text/index.js');
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

var pageA = function pageA() {
  var props = {};
  var TextElement = React.cloneElement(React.createElement(index$e.default, null));

  function handleClick() {}

  function handleTouchStart() {}

  return React.createElement(index$2.default, null, React.createElement(index$2.default, _rollupPluginBabelHelpers.extends({
    onClick: handleClick,
    onTouchStart: handleTouchStart,
    id: "view",
    "data-foo": "bar"
  }, props), "foo"), TextElement);
};

var _page = pageA;
var index = Page(createPageConfig.default(_page));

exports.default = index;
