export const getData = async () => {
  const number = Math.random();

  if (number < 0.3) {
    return {
      status: 'ERROR',
      message: 'Call failed!'
    };
  } else {
    return [
      {
        name: 'Elliot',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Mickey Mouse'
      },
      {
        name: 'Dave',
        signup_date: new Date().getTime(),
        status: 'basic',
        favorite_disney_character: 'Minnie Mouse'
      },
      {
        name: 'John',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Goofy'
      },
      {
        name: 'Bernard',
        signup_date: new Date().getTime(),
        status: 'basic',
        favorite_disney_character: 'Donald Duck'
      },
      {
        name: 'Steve',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Cinderella'
      },
      {
        name: 'Jane',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Pluto'
      },
      {
        name: 'Sarah',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Wall E'
      },
      {
        name: 'Billy',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Mr. Incredible'
      },
      {
        name: 'Kristine',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Beauty'
      },
      {
        name: 'Tony',
        signup_date: new Date().getTime(),
        status: 'basic',
        favorite_disney_character: 'Beast'
      },
      {
        name: 'Dan',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Elsa'
      },
      {
        name: 'Nate',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Ariel'
      },
      {
        name: 'Jenny',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Moana'
      },
      {
        name: 'Samuel',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Jiminy Cricket'
      },
      {
        name: 'Teresa',
        signup_date: new Date().getTime(),
        status: 'basic',
        favorite_disney_character: 'Lilo'
      },
      {
        name: 'Edward',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Snow White'
      },
      {
        name: 'James',
        signup_date: new Date().getTime(),
        status: 'basic',
        favorite_disney_character: 'Peter Pan'
      },
      {
        name: 'Jake',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Pocahontas'
      },
      {
        name: 'Clark',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Pinocchio'
      },
      {
        name: 'Bruce',
        signup_date: new Date().getTime(),
        status: 'subscribed',
        favorite_disney_character: 'Mulan'
      }
    ];
  }
};