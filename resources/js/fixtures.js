
//ADAPTERS
App.AboutAdapter = DS.FixtureAdapter.extend({});
App.FeedbackAdapter = DS.FixtureAdapter.extend({});
App.BudgetAdapter = DS.FixtureAdapter.extend({});


//MODELS
App.About = DS.Model.extend({
    version: DS.attr(),
    type: DS.attr(),
    releaseDate: DS.attr(),
    name: DS.attr(),
    description: DS.attr()
});

App.Feedback = DS.Model.extend({
    type: DS.attr(),
    createDate: DS.attr(),
    userName: DS.attr(),
    email: DS.attr(),
    subject: DS.attr(),
    description: DS.attr()
});


App.Budget = DS.Model.extend({
    title: DS.attr(),
    score: DS.attr(),
    radiolabel1: DS.attr(),
    radiolabel2: DS.attr(),
    radiolabel3: DS.attr(),
    radiovalue1: DS.attr(),
    radiovalue2: DS.attr(),
    radiovalue3: DS.attr(),
    inputlabel1: DS.attr(),
    inputlabel2: DS.attr(),
    inputvalue1: DS.attr(),
    inputvalue2: DS.attr(),
    description: DS.attr()
});

//FIXTURES (must be defined after Routes)
App.About.FIXTURES = [
  {
    id: '1',
    version: "1.1",
    type: "Bug Fix",
    releaseDate: '27 September 2014',
    name: "Lot Of Stuff Released",
    description: "This is the main description for the release of 1.0"
  }, {
    id: '2',
    version: "1.2",
    type: "Bug Fix",
    releaseDate: '10 August 2014',
    name: "Lot Of Stuff Released 2.0",
    description: "Need to make this a list of help within a help? This is the main description for the release of 1."
  }
]

App.Feedback.FIXTURES = [
  {
    id: '1',
    type: "Bug",
    createDate: '2014-11-11',
    userName: "TroveDemo1",
    email: "email@trovedemo.com",
    subject: "Is it me or...",
    description: "Please fix my bugs"
  },
  {
    id: '2',
    type: "Comment",
    createDate: '2014-11-10',
    userName: "TroveDemo2",
    email: "anonymous@trovedemo.com",
    subject: "A simple comment subject",
    description: "Ths is a comment"
  },
  {
    id: '3',
    type: "Bug",
    createDate: '2014-10-24',
    userName: "TroveDemo3",
    email: "email@trovedemo.com",
    subject: "Is it me or...",
    description: "Please fix my bugs"
  },
  {
    id: '4',
    type: "Comment",
    createDate: '2014-10-21',
    userName: "TroveDemo4",
    email: "anonymous@trovedemo.com",
    subject: "A simple comment subject",
    description: "Ths is a comment"
  }
]


App.Budget.FIXTURES = [
  {
    id: '1',
    title: "Market Size",
    score: '5',
    radiolabel1: "Manual Assessment",
    radiolabel2: "TROVE Calculated",
    radiolabel3: "From Library",
    radiovalue1: "1",
    radiovalue2: "2",
    radiovalue3: "3",
    inputlabel1: "",
    inputlabe2: "",
    inputvalue1: "1,700,000",
    inputvalue2: "Market Size",
    description: "1.7 Million (RECS 2009 = 5 million central AC iN CA, Assumed 33% in SCE)"
  },
  {
    id: '2',
    title: "Energy Savings Potential",
    score: '4',
    radiolabel1: "Manual Assessment",
    radiolabel2: "TROVE Calculated",
    radiolabel3: "From Library",
    radiovalue1: "4",
    radiovalue2: "5",
    radiovalue3: "6",
    inputlabel1: "",
    inputlabe2: "",
    inputvalue1: "170 MWh",
    inputvalue2: "Potential per Unit * Market Size * Market Penetration",
    description: "1kW/unit*17000000units*10%penetration/1000=170MW\n 1000kWh/unit*1700000units*10%penetration/\n1000=170000MWH"
  },
  {
  id: '3',
  title: "Customer Satisfaction Impact",
  score: '4',
  radiolabel1: "Manual Assessment",
  radiolabel2: "TROVE Calculated",
  radiolabel3: "From Library",
  radiovalue1: "7",
  radiovalue2: "8",
  radiovalue3: "9",
  inputlabel1: "",
  inputlabe2: "",
  inputvalue1: "",
  inputvalue2: "",
  description: "A One-Stop shop solution will increase the customer adoption of EE residential incentives for replacing existing Pool Pumps with more energy efficient multi-speed or variable speed pool pumps"
}
]

