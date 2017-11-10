/**
 * (c) 2010-2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
'use strict';
/* global win, window */

// glob is a temporary fix to allow our es-modules to work.
var glob = typeof win === 'undefined' ? window : win,
	doc = glob.document,
	SVG_NS = 'http://www.w3.org/2000/svg',
	userAgent = (glob.navigator && glob.navigator.userAgent) || '',
	svg = doc && doc.createElementNS && !!doc.createElementNS(SVG_NS, 'svg').createSVGRect,
	isMS = /(edge|msie|trident)/i.test(userAgent) && !glob.opera,
	isFirefox = /Firefox/.test(userAgent);

var Highcharts = glob.Highcharts ? glob.Highcharts.error(16, true) : {
	product: '@product.name@',
	version: '@product.version@',
	deg2rad: Math.PI * 2 / 360,
	doc: doc,
	hasTouch: doc && doc.documentElement.ontouchstart !== undefined,
	isMS: isMS,
	isWebKit: /AppleWebKit/.test(userAgent),
	isFirefox: isFirefox,
	isTouchDevice: /(Mobile|Android|Windows Phone)/.test(userAgent),
	SVG_NS: SVG_NS,
	chartCount: 0,
	seriesTypes: {},
	symbolSizes: {},
	svg: svg,
	win: glob,
	marginNames: ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
	noop: function () {
		return undefined;
	},
	/**
	 * An array containing the current chart objects in the page. A chart's
	 * position in the array is preserved throughout the page's lifetime. When
	 * a chart is destroyed, the array item becomes `undefined`.
	 * @type {Array.<Highcharts.Chart>}
	 * @memberOf Highcharts
	 */
	charts: []
};
export default Highcharts;
