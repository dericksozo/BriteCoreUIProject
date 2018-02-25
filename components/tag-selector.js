const TagSelector = {

  template: "#tag-selector",
  name: "tag-selector",

  data() {
    return {
      tagsToDisplay: undefined
    };
  },

  props: {
    tagGroups: {
      type: Array,
      required: true
    }
  },

  methods: {
    showTags(index) {
      this.tagsToDisplay = this.tagGroups[index]["tags"];
    }
  }

};

Vue.component('tag-selector', TagSelector);
