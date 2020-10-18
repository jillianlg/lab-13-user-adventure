export default [
    {
        id: 'park',
        title: 'Dog Park',
        map: {
            top:'88%',
            left: '13%'
        },
        image: 'dog-park.jpg',
        description:`It's Saturday, and you know what that means! Your human finally turns off those boing shiny squares they've been staring at all week and take you to the best place on earth!! You arrive at the dog park, what do you do?`,

        choices: [{
            id: 'dig',
            description: 'Find the perfect spot to dig.',
            results:`After a very serious parameter sniff check, you locate the perfect spot to dig. You frantically begin clawing at the sweet soft earth send bits of dirt flying. Then suddenly you strike something hard and jackpot, you found a bone!!!`,
            baddog: 0,
            treats: 5
        }, {
            id: 'mud',
            description: 'Take off Running.',
            results:`Your excitement can't be contained! As soon as your human opens the door, you take off running. But in your haste, you fail to notice the giant mud puddle. Before you can stop, you are neck-deep in mud, and your human doesn't look nearly as happy as you are right now.`,
            baddog: 10,
            treats: 0
        }, {
            id: 'ball',
            description: 'Play Ball',
            results:`Best day ever!! Your human brought the ball. You run hard and go home tired. After a long nap, you get a bully stick for being such a good dog!`,
            baddog: 0,
            treats: 10
        }]
    },
    {
        id: 'groomer',
        title: 'Comb & Collar',
        map: {
            top:'13%',
            left: '60%'
        },
        image: 'dog-goomer.jpg',
        description:`Your human grabs your leash and you head to the car. Human, you forgot the ball for the Dog Park! Where are you going, you wonder?!?! Your human pulls up to a strange building and leads you inside. You notice the other dogs leaving have bows on and smell weird. When it dawns on you that you are at the groomers you?`,

        choices: [{
            id: 'spa',
            description: 'Get excited!',
            results:`A day at the spa for some primping, pampering, and undivided attention is just what you need. Plus, know that you are in for some extra treats with those irresistible puppy dog eyes.`,
            baddog: 0,
            treats: 7
        }, {
            id: 'sulk',
            description: 'Sulk and be difficult.',
            results:`This is the worst, but at least you get treats for putting up with this bull.`,
            baddog: 2,
            treats: 5
        }, {
            id: 'wet',
            description: 'Oh, hell, no!',
            results:`You ensure the groomer is as miserable as you are. You shake after bath and spray water everywhere, run around the shop avoiding the evil wind machine. You yelp and scream when they try to cut your paws off.`,
            baddog: 10,
            treats: 0
        }]
    },
    {
        id: 'vet',
        title: 'Vet Hospital',
        map: {
            top:'34%',
            left: '29%'
        },
        image: 'dog-vet.png',
        description:`Another car ride! Wonder where to this time?!? You pass the dog park and head on to the road that makes the wind go fast. You arrive at a big building, and your nose figures it out as your human opens the door. Oh No! Nothing good happens here. You desperately look at your human, hoping this was a mistake. When they sit, you know you are on your own to get out of this, so you?`,

        choices: [{
            id: 'hide',
            description: 'Hide',
            results:`If I can't see you, you can't see me, right?! Looking around, you try to find a place to hide. You manage to squeeze under a coffee table, and it takes 35 minutes, several treats, and finally removing the coffee table to you out.`,
            baddog: 7,
            treats: 5
        }, {
            id: 'bite',
            description: 'Self-defense',
            results:`It is only fair, right? If the Vet stabs you, then you get to bite them.`,
            baddog: 10,
            treats: 0
        }, {
            id: 'shake',
            description: 'Terror and fear.',
            results:`You shake so hard during the entire appointment that your human feels SO guilty. The rest of the day, you get the royal treatment.`,
            baddog: 0,
            treats: 10
        }]
    }
];

//  [
//     park,
//     groomer,
//     vet
// ];

// export default adventures;