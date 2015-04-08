var slots = [{
  type: 'talk',
  speaker: {
    displayName: "Martin Odersky",
    picture: {
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
    }
  },
  title: 'The evolution of Scala',
  room: 'Plenary',
  time: '9.30'
}, {
  type: 'break',
  time: '13.00',
  label: 'Lunch'
}, {
  type: 'parallel-talks',
  talks: [{
    speaker: {
      displayName: "Martin Odersky",
      picture: {
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
      }
    },
    title: "The evolution of Scala",
    room: "Plenary"
  }, {
    speaker: {
      displayName: "Martin Odersky",
      picture: {
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
      }
    },
    title: 'The evolution of Scala',
    room: 'Plenary'
  }],
  time: '14.30'
}];

module.exports = slots;
