export default [
  {
    id: 'park',
    title: 'To the Dog Park',
    map: {
      top:'89%';
      left: '44%'
    }
    image: 'dog-park.jpg',
    desciption:`It's Saturday, and you know what that means! Your human finally turns off those boing shiny squares they've been staring at all week and take you to the best place on earth!! You arrive at the dog park, what do you do?`,

    choices: [{
      id: 'dig',
      description: 'Find the perfcet spot to dig',
      results:`After a very serious parameter sniff check, you locate the perfect spot to dig. You frantically begin clawing at the sweet soft earth send bits of dirt flying. Then suddenly you strike something hard and jackpot, you found a bone!!!`,
      bd: 0,
      treats: 5
    }, {
      id: 'mud',
      description: 'Take off Running',
      results:`...get muddy...`,
      bd: 10,
      treats: 0
    }, {
      id: 'ball',
      description: 'Play Ball',
      results:`...run hard, go home tired and nap...`,
      bd: 0,
      treats: 5
    }]
  },
  {
    id: 'groomer',
    title: 'Comb & Collar',
    map: {
      top:'17%';
      left: '37%'
    }
    image: 'dog-goomer.jpg',
    desciption:``,

    choices: [{
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }, {
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }, {
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }]
  }
  {
    id: '',
    title: '',
    map: {
      top:'89%';
      left: '44%'
    }
    image: '',
    desciption:``,

    choices: [{
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }, {
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }, {
      id: '',
      description: '',
      results:``,
      bd: 0,
      treats: 0
    }]
  }
]