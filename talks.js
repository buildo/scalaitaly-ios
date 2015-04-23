var slots = [{
  type: 'talk',
  speaker: {
    displayName: "Martin Odersky",
    picture: {
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
    },
    bio: 'Martin Odersky heads the programming research group at EPFL. His research interests cover fundamental as well as applied aspects of programming languages. They include semantics, type systems, programming language design, and compiler construction. The main focus if his work lies in the integration of object-oriented and functional programming. His research thesis is that the two paradigms are just two sides of the same coin and should be unified as much as possible. To prove this he has experimented a number of language designs, from Pizza to GJ to Functional Nets. He has also influenced the development of Java as a co-designer of Java generics and as the original author of the current javac reference compiler. His current work concentrates on the Scala programming language, which unifies FP and OOP, while staying completely interoperable with Java and .NET.'
  },
  title: 'The evolution of Scala',
  abstract: "Scala is one of the relatively few languages that escaped from an academic research lab into widespread industrial usage. This was not something that was planned 10 years ago, when Scala was first announced. In this talk I'll give an overview of the development of Scala from its beginning to today, addressing some questions one might ask when looking back: How did motivations and expectations change? In hindsight, what were the important achievements? What was learned along the way?",
  room: 'Plenary',
  time: '9.30'
}, {
  type: 'break',
  time: '10.20',
  label: 'Break'
}, {
  type: 'talk',
  speaker: {
    displayName: "Phil Calçado",
    picture: require('image!phil-calcado'),
    bio: "Phil is the Director of Core Engineering at SoundCloud, his team is responsible for “keeping the trains running” in our microservices architecture. Before that he was the Director of Product Engineering at SoundCloud, and before joining SoundCloud he was a Lead Consultant for ThoughtWorks in Australia and the UK.",
    company: 'SoundCloud',
    twitter: '@pcalcado'
  },
  title: "Demystifying Type Inference",
  abstract: "SoundCloud's microservice architecture is built mostly in Scala, using Finagle as its distributed systems workhorse. Finagle is an RPC system for the JVM, and it is based on a pipes-and-filters architecture that maps very nicely to functional programming concepts of higher-order functions and combinators. Over the past few years we have found that it is extremely useful to go even a step further and think of microservices as functions themselves. In this talk let's explore how SoundCloud uses Scala and Finagle, and how we started thinking of a microservices architecture as a special case of a functional system.",
  room: "Plenary",
  time: '10.40'
}, {
  type: 'talk',
  speaker: {
    displayName: "Jon Pretty",
    picture: require('image!jon-pretty'),
    bio: "Jon is a longstanding active member of the Scala community, having first used Scala in 2004. Since then, he's consulted on Scala in small businesses, large corporations and government projects. Since last summer, Jon has been on sabbatical to concentrate on Rapture, his family of open-source libraries and other Scala projects",
    company: 'Propensive',
    twitter: '@propensive'
  },
  title: "Demystifying Type Inference",
  abstract: "Understanding type inference in Scala is often seen as a dark art. How does the compiler sometimes manage to conjure up exactly the correct type from an horrendous tangle of generic method calls, while at other times it draws a blank at something that seems plainly obvious to everyone else? Jon will look at the variety of influences that guide Scala's type inference, why type ascriptions are sometimes required and sometimes not, and how you can design methods to maximize type inference at the call site. At the end of the talk, Scala's type inference will probably remain somewhat mysterious, but you should be closer to understanding where it works, where it doesn't, and the things to try when you get stuck",
  room: "Plenary",
  time: '11.30'
}, {
  type: 'break',
  time: '12.20',
  label: 'Lunch'
}, {
  type: 'parallel-talks',
  talks: [{
    speaker: {
      displayName: "Mirco Dotta",
      picture: require('image!mirco-dotta'),
      bio: "Mirco Dotta is a Software Engineer at Typesafe, and since January 2015 he is a contributor to the Play! Framework. He is also a long-standing committer to the Scala IDE for Eclipse, and has contributed to a few others development tools for Scala (included scalac - the Scala compiler). His interests include concurrency and testing. In his freetime, you'll see him next to a foosball table.",
      company: 'Typesafe',
      twitter: '@mircodotta'
    },
    title: "Akka Streams",
    abstract: "Akka Streams is an implementation of Reactive Streams, which is a standard for asynchronous stream processing with non-blocking backpressure on the JVM. In this talk we'll cover the rationale behind Reactive Streams, and explore the different building blocks available in Akka Streams. I'll use Scala for all coding examples, but Akka Streams also provides a full-fledged Java8 API. After this session you will be all set and ready to reap the benefits of using Akka Streams!",
    room: "Room A"
  }, {
    speaker: {
      displayName: "Daniela Sfregola",
      picture: require('image!daniela-sfregola'),
      bio: "Daniela Sfregola is a Software Engineer based in London. She has worked as Java developer before moving towards Scala. She is currently a Java / Scala Team Lead at Ovo Energy, a small but fast growing British Energy Provider, and passionate blogger at danielasfregola.com",
      company: 'OVO Energy',
      twitter: "@DanielaSfregola"
    },
    title: "An introduction to Akka and the Actor-Based Model",
    abstract: "Daniela Sfregola is a Software Engineer based in London. She has worked as Java developer before moving towards Scala. She is currently a Java / Scala Team Lead at Ovo Energy, a small but fast growing British Energy Provider, and passionate blogger at danielasfregola.com",
    room: "Room B"
  }],
  time: '14.00'
}, {
  type: 'parallel-talks',
  talks: [{
    speaker: {
      displayName: "Andrea Ferretti",
      picture: require('image!andrea-ferretti'),
      bio: "Andrea is a mathematician turned to programming, who found his sweet spot in the R&D group of UniCredit. There, he can be found proposing yet another programming language or trying to implement some more or less obscure paper",
      company: 'UniCredit',
      twitter: '@AndreaFerrett20'
    },
    title: "Type Hackery: dependent types in Scala",
    abstract: "An exploration of type level computations. First, I would introduce a few standard techniques to summon implicit instances for a given type, or detect type equality. Then, I would show how to use the type system to encode values and computations, with the examples of booleans and Peano naturals. Finally, the main goal of the talk would be to show how these type level encodings allow Scala to partially simulate some typical constructions of dependently-typed languages, such as fixed-size sequences, modular arithmetic and balanced trees. Many of these constructions have been explored before, and good references are the blog post series by Mark Harrah on type-level programming and the library Shapeless by Miles Sabin. The whole presentation is meant to be done inside an interactive iScala notebook, which can then be distributed to participants.",
    room: "Room A"
  }, {
    speaker: {
      displayName: "Federico Feroldi",
      picture: require('image!federico-feroldi'),
      bio: "Federico founded Measurence, Coderloop and Cloudify. He hacked at Gilt Groupe, Yahoo, Vodafone and a few other companies moving between 5 cities, 3 countries and 2 continents.",
      company: 'Measurence',
      twitter: "@cloudify"
    },
    title: "A blueprint for a Scala-based microservices architecture",
    abstract: "During this session we will explore the component and the best practices behind a scalable Scala-based microservice architecture. We will see how to build a REST service with Akka and Spray, how to document its API with Swagger, how to package it with Sbt and Docker, how to deploy it with Mesos and Marathon and how to let him interact with other services with Bamboo. The talk with be full of code and practical tips.",
    room: "Room B"
  }],
  time: '14.50'
}, {
  type: 'break',
  time: '15.50',
  label: 'Coffee break'
}, {
  type: 'parallel-talks',
  talks: [{
    speaker: {
      displayName: "Roberto Bentivoglio & Stefano Rocco",
      picture: {
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
      },
      bio: "Roberto graduated during 2009 at \"Università degli studi di Milano\" but he started to work with Java since 2005. He has been experimenting with Scala since 2009 and he is now using it on his everyday work. He spent four years in Switzerland where he worked for Credit Suisse Group. In the last years Roberto has worked on web applications following the Reactive Manifesto principles. He lives in Milano and he is now Head of IT Innovation at DATABIZ. Stefano graduated in 2008 at the National College of Ireland, spent 10 years working for major investment banks. He has many years of experience in developing low-latency trading applications in Java. He likes experimenting with different programming languages such as Python, Erlang and Julia. He started working with Scala and Typesafe Reactive platform back in 2011. He is CTO at DATABIZ",
      company: 'Databiz',
      twitter: '@robbenti'
    },
    title: "Scala in increasingly demanding environments",
    abstract: "The need to handle increasingly large volumes of data, to quickly drive decisions (via streaming technologies and machine learning algorithms), to scale systems effectively, to guarantee the right level of continuity, to float data across systems efficiently and others are becoming critical and challenging requirements. During this talk we’ll demonstrate how to design reactive, resilient, message driven and elastic applications by combining technologies such as Akka, Kakfa, Cassandra and Spark along with architectural patterns like CQRS, ES, etc. in order to achieve the previously mentioned needs.",
    room: "Room A"
  }, {
    speaker: {
      displayName: "Andrea Lattuada & Gabriele Petronella",
      picture: {
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/gerrenlamson/128.jpg'
      },
      bio: "Andrea is an eclectic engineer with a passion for well crafted software; co-founder of buildo, he focuses on developing stable platforms that enable rapid iteration. A former Google and Facebook intern where he gained experience as a site reliability / production engineer and currently pursuing a MSc degree in Computer Science with a focus on distributed systems at ETH Zürich. Gabriele has a strong entrepreneurial spirit. Before co-founding buildo, he founded Metwit, a crowdsourced-weather startup, in 2011, leading the iOS app development. He has also been working as research assistant at UIC and later as a mobile security consultant at Barclays. He loves studying and researching technologies and he is a functional programming devotee. He graduated from UIC with a Master in Computer Science and from Politecnico di Milano with a Master in Computer Engineering",
      company: 'Buildo',
      twitter: "@buildoHQ"
    },
    title: "Building startups on Scala",
    abstract: "TBD",
    room: "Room B"
  }],
  time: '16.00'
}, {
  type: 'parallel-talks',
  talks: [{
    speaker: {
      displayName: "Alberto Paro",
      picture: require('image!alberto-paro'),
      bio: "CTO at Big Data Technologies and freelance consultant on Big Data and NoSQL solutions. He loves studying emerging solutions and applications mainly related Big Data processing, NoSQL, Natural Language Processing and neural networks.",
      company: 'Big Data Technologies',
      twitter: '@aparo77'
    },
    title: "Hands-on Scala.JS",
    abstract: "TBD",
    room: "Room A"
  }, {
    speaker: {
      displayName: "Alessandro Abbruzzetti",
      picture: require('image!alessandro-abbruzzetti'),
      bio: "45-years-old, married with 2 kids. Graduated in Computer Engineering at Sapienza University in Roma. His passion for programming started at 13 with the mythical Commodore 64. He works for Ericsson dealing with software development for all telecom operators",
      company: 'Ericsson',
      twitter: "-"
    },
    title: "Kernal64: A Commodore 64 emulator",
    abstract: "The presentation provides an introduction to the emulation world, in particular to the mythical Commodore 64 and its peripherals, like disk drive, printer, cartridges. To truly emulate the software written for this 8-bit home computer it is mandatory to be much accurate as possible and reproduce every single aspect of the real machine, starting from the chips that compose the hardware architecture. Beside the emulation topics the presentation faces some Scala performance issues that come up when you have to optimize low level operations. At the end I'll show you a demo where we'll see the emulator running a game and a demo-scene, one of the hardest software to emulate.",
    room: "Room B"
  }],
  time: '16.50'
}];

module.exports = slots;
