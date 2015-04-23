'use strict';

var React = require('react-native');
var palette = require('./palette');
var TimeView = require('./TimeView');
var tweenState = require('react-tween-state');

var {
  ListView,
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var Header = React.createClass({
  propTypes: {
    talk: React.PropTypes.object
  },

  render: function() {
    var style;
    switch (this.props.talk.room) {
      case 'Room A': style = styles.headerA; break;
      case 'Room B': style = styles.headerB; break;
      case 'Plenary': style = styles.headerPlenary; break;
    }
    return (
      <View style={style}>
        <View style={styles.headerContent}>
          <Text style={styles.headerAuthor}>
            {this.props.talk.speaker.displayName}
          </Text>
          <Text style={styles.headerTitle}>
            {this.props.talk.title}
          </Text>
          <Text style={styles.headerRoom}>
            {this.props.talk.room}
          </Text>
        </View>
      </View>
    );
  }
});

var Abstract = React.createClass({
  propTypes: {
    talk: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <View style={styles.abstractWrapper}>
        <Text style={styles.abstract}>
          {this.props.talk.abstract}
        </Text>
      </View>
    )
  }

});

var SpeakerBio = React.createClass({
  propTypes: {
    talk: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.avatar} source={this.props.talk.speaker.picture} />
        <View style={styles.speakerBioWrapper}>
          <Text style={styles.speakerBioSpeaker}>Speaker</Text>
          <Text style={styles.speakerBioName}>{this.props.talk.speaker.displayName}</Text>
          <Text style={styles.speakerBio}>{this.props.talk.speaker.bio}</Text>
        </View>
      </View>
    )
  }
});

var RatingView = React.createClass({
  mixins: [tweenState.Mixin],

  render() {
    var style = {
      fontSize: 22,
      paddingTop: 10
    };
    return (
      <View style={this.props.style}>
        <Text style={style}>How did you like this talk?</Text>
      </View>
    );
  }
});

var TalkDetail = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    talk: React.PropTypes.object.isRequired,
    time: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      ratingPosition: -150
    };
  },

  componentDidMount() {
    setTimeout(this.measureHeader);
  },

  measureHeader() {
    this.refs.header.measure((ox, oy, width, height) => {
      this.setState({headerHeight: height});
    });
  },

  presentRating() {
    this.tweenState('ratingPosition', {
      easing: tweenState.easingTypes.easeInOutQuad,
      duration: 500,
      endValue: 0
    });
  },

  render: function() {
    var ratingStyle = {
      backgroundColor: 'yellow',
      height: 150,
      position: 'absolute',
      bottom: this.getTweeningValue('ratingPosition'),
      left: 0,
      right: 0,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.8,
      shadowRadius: 9,
      shadowOffset: {
        height: 6,
        width: 0
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View ref='header'>
            <Header talk={this.props.talk} />
          </View>
          <ScrollView style={styles.scrollView} automaticallyAdjustContentInsets={false}>
            <Abstract talk={this.props.talk} />
            <SpeakerBio talk={this.props.talk} />
          </ScrollView>
          <TimeView time={this.props.time} style={{
            position: 'absolute', top: this.state.headerHeight - 26, left: 0,
            width: 52, height: 52, backgroundColor: 'transparent'
          }}/>
        </View>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },
  scrollView: {
    flex: 1,
    paddingRight: 8
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    color: 'red',
  },
  headerPlenary: {
    flexDirection: 'row',
    backgroundColor: palette.plenaryRoomColor,
    paddingTop: 14
  },
  headerA: {
    flexDirection: 'row',
    backgroundColor: palette.roomAColor,
    paddingTop: 14
  },
  headerB: {
    flexDirection: 'row',
    backgroundColor: palette.roomBColor,
    paddingTop: 14
  },
  headerTime: {
    position: 'absolute',
  },
  headerContent: {
    paddingLeft: 82,
    flexDirection: 'column',
    flex: 1
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '200'
  },
  headerAuthor: {
    fontSize: 22,
    fontWeight: '500'
  },
  headerRoom: {
    marginTop: 10,
    marginBottom: 4,
    fontSize: 15,
    color: 'white'
  },
  abstract: {
    paddingTop: 18,
    paddingBottom: 10,
    paddingLeft: 4,
    fontSize: 18,
  },
  abstractWrapper: {
    marginLeft: 78,
    borderBottomColor: palette.lineSeparatorColor,
    borderBottomWidth: 1
  },
  speakerBioWrapper: {
    flex: 1,
    marginLeft: 16,
    paddingTop: 10,
    marginRight: 20,
    paddingBottom: 8
  },
  speakerBioSpeaker: {
    fontSize: 18,
    fontWeight: '200',
  },
  speakerBioName: {
    fontSize: 18,
    fontWeight: '600'
  },
  speakerBio: {
    marginTop: 10,
    fontSize: 18
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginLeft: 12,
    marginTop: 11
  }
});

module.exports = TalkDetail;
