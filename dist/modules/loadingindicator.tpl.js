/**
 * adapt-strap
 * @version v0.2.0 - 2014-08-04
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('adaptv.adaptStrap.loadingindicator').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('loadingindicator/loadingindicator.tpl.html', '<div class="ad-loading-overlay-container" ng-class="containerClasses" ng-style="{\'z-index\': zIndex || \'1000\',\'position\': position || \'absolute\'}" ng-show="loading"><div class="wrapper"><div class="loading-indicator"><ad-loading-icon loading-icon-size="{{ loadingIconSize }}" loading-icon-class="{{ loadingIconClass }}"></ad-loading-icon></div></div></div>');
  }
]);