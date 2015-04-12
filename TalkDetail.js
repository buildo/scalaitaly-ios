'use strict';

var React = require('react-native');
var palette = require('./palette');

var {
  ListView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var TalkDetail = React.createClass({
  propTypes: {
    talk: React.PropTypes.object
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.talk.title}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'red',
  }
});

module.exports = TalkDetail;
