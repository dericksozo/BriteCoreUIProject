/* Routes */
const NewQuestion = {
  template: "#create-new-question",

  computed: Vuex.mapState([
    'tagGroups',
    'fieldTypes'
  ]),

  components: {
    'tag-selector': TagSelector,
    'britecore-input': BriteCoreInput,
    'fieldtypes-filterable': FieldTypesFilterable,
    'fieldgroup': FieldGroup
  }
};

const Router = new VueRouter({
  routes: [{
    path: '/questions/new',
    component: NewQuestion
  }]
});

/* Vuex initial state. */
const state = {
  tagGroups: [{
    'name': 'Vinmaster',
    'tags': ['Car Make', 'Car Model', 'Car Year']
  },
  {
    'name': 'ISO',
    'tags': ['First Tag', 'Second Tag', 'Third Tag']
  },
  {
    'name': 'Tag 3',
    'tags': ['Hello', 'Another Tag', 'The Last Tag']
  }],

  fieldTypes: [{
    'name': 'Text',
    'definition': 'String of Text',
    'defaultDisplay': 'Free-form text input'
  },
  {
    'name': 'Date',
    'definition': 'Standard ISO Format Date',
    'defaultDisplay': 'Datepicker, with configurable format'
  },
  {
    'name': 'VIN',
    'definition': 'Vehicle Identification Number',
    'defaultDisplay': 'Free-form text input'
  }]
};

const Store = new Vuex.Store({
  state
});

const app = new Vue({

  el: "#App",

  router: Router,
  store: Store

}).$mount("#App");
