
!function(){"use strict";function e(e){e.message="",e.messageClass="",e.lunch="",e.clear=function(){e.message="",e.messageClass="",e.lunch=""},e.checkLunck=function(){switch(function(e,s){var c=e.split(s).filter(function(e){return/\S/.test(e)});c.length;return null==c||0===c.length?"0":c.length>3?"2":"1"}(e.lunch,",")){case"0":e.messageClass="text-danger border border-danger",e.message="Please enter data first.";break;case"1":e.messageClass="text-success border border-success",e.message="Enjoy!";break;case"2":e.messageClass="text-success border border-success",e.message="Too much!"}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
