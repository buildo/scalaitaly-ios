'use strict';

var React = require('react-native');

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

var TimeView = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      uri: React.PropTypes.string.isRequired
    })
  },

  render: function() {
    return (
      <Image
        style={timeViewStyles.avatar}
        source={this.props.image}>
        <View style={timeViewStyles.overlay}>
          <Text style={timeViewStyles.time}>
            {this.props.time}
          </Text>
        </View>
      </Image>
    )
  }

});

var TalkSummary = React.createClass({

  propTypes: {
    talk: speakerT.isRequired
  },

  render: function() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Text style={talkSummaryStyles.speaker}>{this.props.talk.speaker.displayName}</Text>
        <Text style={talkSummaryStyles.title}>{this.props.talk.title}</Text>
        <Text style={talkSummaryStyles.room}>{this.props.talk.room}</Text>
      </View>
    );
  }
});

var ScheduleRow = React.createClass({

  propTypes: {
    talk: talkT.isRequired
  },

  render: function() {
    return (
      <TouchableHighlight>
        <View style={styles.row}>
          <TimeView time={this.props.talk.time} image={this.props.talk.speaker.picture} />
          <TalkSummary talk={this.props.talk} />
        </View>
      </TouchableHighlight>
    );
  }

});

var ParallelScheduleRow = React.createClass({

  propTypes: {
    talks: React.PropTypes.arrayOf(talkT).isRequired,
    time: React.PropTypes.string.isRequired
  },

  render: function() {

    var talkSummaries = this.props.talks.map((t, i) => {
      return (
        <TouchableHighlight key={i}>
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
          <Text>{this.props.time}</Text>
        </View>
        <Text>{this.props.label}</Text>
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

  render: function() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={ (slot) => {
          switch(slot.type) {
            case 'break': return <BreakRow {...slot} />;
            case 'talk': return <ScheduleRow talk={slot} />;
            case 'parallel-talks': return <ParallelScheduleRow time={slot.time} talks={slot.talks} />;
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
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  breakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    color: 'black',
    height: 43
  },
  breakRowTime: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var timeViewStyles = StyleSheet.create({
  time: {
    color: 'white',
    fontWeight: 'bold'
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.7,
    flex: 1,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 8
  }
});

var talkSummaryStyles = StyleSheet.create({
  speaker: {
    fontWeight: 'bold'
  },
  room: {
    color: 'blue'
  }
});

module.exports = Schedule;
