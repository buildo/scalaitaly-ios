'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var TimeView = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      uri: React.PropTypes.string.isRequired
    })
  },

  render: function() {
    var innerView = (
      <View style={timeViewStyles.overlay}>
        <Text style={timeViewStyles.time}>
          {this.props.time}
        </Text>
      </View>
    );
    if (this.props.image) {
      return (
        <View style={this.props.style}>
          <Image
            style={timeViewStyles.avatar}
            source={this.props.image}>
            {innerView}
          </Image>
        </View>
      );
    } else {
      return (
        <View style={this.props.style}>
          <View style={timeViewStyles.avatar}>
            {innerView}
          </View>
        </View>
      );
    }
  }

});

var timeViewStyles = StyleSheet.create({
  time: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.84,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 9,
    overflow: 'hidden'
  }
});

module.exports = TimeView;
