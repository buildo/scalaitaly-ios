'use strict';

var React = require('react-native');
var TalkDetail = require('./TalkDetail');
var palette = require('./palette');
var TimeView = require('./TimeView');

var {
  ListView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} = React;

var speakerT = React.PropTypes.shape({
  displayName: React.PropTypes.string.isRequired,
  picture: React.PropTypes.shape({
    uri: React.PropTypes.string.isRequired
  })
});

var talkT = React.PropTypes.shape({
  title: React.PropTypes.string.isRequired,
  speaker: speakerT.isRequired,
  room: React.PropTypes.string.isRequired,
});

var TalkSummary = React.createClass({

  propTypes: {
    talk: speakerT.isRequired
  },

  render: function() {
    var speaker2Name = () => {
      if (this.props.talk.secondSpeaker) {
        return `& ${this.props.talk.secondSpeaker.displayName}`
      }
    };
    return (
      <View style={styles.talkSummary}>
        <Text style={talkSummaryStyles.speaker}>{this.props.talk.speaker.displayName} {speaker2Name()}</Text>
        <Text style={talkSummaryStyles.title}>{this.props.talk.title}</Text>
        <Text style={this.roomStyle()}>{this.props.talk.room}</Text>
      </View>
    );
  },

  roomStyle: function() {
    switch (this.props.talk.room) {
      case 'Plenary': return talkSummaryStyles.plenaryRoom;
      case 'Room A': return talkSummaryStyles.roomA;
      case 'Room B': return talkSummaryStyles.roomB;
    }
  },

});

var TalkRow = React.createClass({

  propTypes: {
    talk: talkT.isRequired,
    onPress: React.PropTypes.func
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.row}>
          <TimeView time={this.props.talk.time} image={this.props.talk.speaker.picture} />
          <TalkSummary talk={this.props.talk} />
        </View>
      </TouchableHighlight>
    );
  }

});

var ParallelTalksRow = React.createClass({

  propTypes: {
    talks: React.PropTypes.arrayOf(talkT).isRequired,
    time: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func
  },

  render: function() {

    var talkSummaries = this.props.talks.map((t, i) => {
      return (
        <TouchableHighlight onPress={() => this.props.onPress(t, this.props.time)} key={i}>
          <View>
            <TalkSummary talk={t} />
          </View>
        </TouchableHighlight>
      );
    });

    return (
      <View style={styles.row}>
        <TimeView time={this.props.time} image={this.props.talks[0].speaker.picture} />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          {talkSummaries}
        </View>
      </View>
    );
  }

});

var BreakRow = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <View style={styles.breakRow}>
        <View style={styles.breakRowTime}>
          <Text style={breakRowStyles.time}>{this.props.time}</Text>
        </View>
        <Text style={breakRowStyles.label}>{this.props.label}</Text>
      </View>
    )
  },

});

var Schedule = React.createClass({
  propTypes: {
    speakers: React.PropTypes.arrayOf(speakerT).isRequired
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(this.props.talks)
    };
  },

  showTalkDetail(talk, time) {
    this.props.navigator.push({
      title: talk.title,
      component: TalkDetail,
      passProps: { talk, time }
    });
  },

  render: function() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={ (slot) => {
          switch(slot.type) {
            case 'break': return <BreakRow {...slot} />;
            case 'talk': return <TalkRow talk={slot} onPress={() => this.showTalkDetail(slot, slot.time)} />;
            case 'parallel-talks': return <ParallelTalksRow time={slot.time} talks={slot.talks} onPress={this.showTalkDetail} />;
          }
        }} />
    );
  }
});

var styles = StyleSheet.create({
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  talkSummary: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 9,
    borderBottomWidth: 0.5,
    borderColor: palette.lineSeparatorColor,
    backgroundColor: 'white'
  },
  breakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.breakColor,
    color: 'black',
    height: 43,
    fontSize: 17,
    fontFamily: 'Lato',
    fontWeight: '500'
  },
  breakRowTime: {
    width: 82,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var breakRowStyles = StyleSheet.create({
  label: {
    fontFamily: 'Lato',
    fontSize: 17,
    fontWeight: '500'
  },
  time: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '500'
  }
});

var talkSummaryStyles = StyleSheet.create({
  speaker: {
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Lato'
  },
  title: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Lato',
  },
  plenaryRoom: {
    color: palette.plenaryRoomColor,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Lato',
  },
  roomA: {
    color: palette.roomAColor,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Lato',
  },
  roomB: {
    color: palette.roomBColor,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Lato',
  }
});

module.exports = Schedule;
