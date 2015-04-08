/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Schedule = require('./Schedule');
var talks = require('./talks');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var scalaitaly = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        barTintColor='black'
        initialRoute={{
          component: Schedule,
          title: 'Schedule',
          passProps: { talks }
        }} />
    );
  }
});

AppRegistry.registerComponent('scalaitaly', () => scalaitaly);
