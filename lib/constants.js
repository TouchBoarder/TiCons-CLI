exports.platforms = ['ios','android',  'windows','uwp','iphone', 'ipad','ipro'];
//'mobileweb', 'blackberry', 'tizen', 'apple-watch',

exports.orientations = ['portrait', 'landscape'];

exports.sdkVersion = '4.2.0';

exports.launchScreenXml = '<?xml version="1.0" encoding="utf-8"?>\n<layer-list xmlns:android="http://schemas.android.com/apk/res/android" android:opacity="opaque">\n <!--Used in values/launch_theme.xml-->\n <item android:drawable="@drawable/background"/>\n </layer-list>';

exports.launchThemeXml = '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n <!--Update Activity annotation in MainActivity.cs with [Activity(...Theme = "@style/LaunchTheme"...)]\n-then in OnCreate(Bundle bundle) call SetTheme(Resource.Style.MainTheme); to set it back to your App Theme-->\n <style name="LaunchTheme" parent="MainTheme">\n    <item name="android:windowBackground">@drawable/launch_screen</item>\n    <item name="android:windowNoTitle">true</item>\n  </style>\n </resources>';


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
