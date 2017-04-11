exports.platforms = ['ios',  'android',  'windows'];
//'iphone', 'ipad','mobileweb', 'blackberry', 'tizen', 'apple-watch',

exports.orientations = ['portrait', 'landscape'];

exports.sdkVersion = '4.2.0';

exports.launchScreenXml = '<?xml version="1.0" encoding="utf-8"?>\n<layer-list xmlns:android="http://schemas.android.com/apk/res/android" android:opacity="opaque">\n  <item android:drawable="@drawable/background"/>\n </layer-list>';

exports.dpi = {
	ldpi: 120,
	mdpi: 160,
	'@1x': 160,
	hdpi: 240,
	xhdpi: 320,
	retina: 320,
	'@2x': 320,
	xxhdpi: 480,
	retinahd: 480,
	'retina-hd': 480,
	'@3x': 480,
	xxxhdpi: 640
};
