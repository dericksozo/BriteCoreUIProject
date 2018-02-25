const FieldTypesFilterable = {
  template: "#fieldtypes-filterable",
  name: "fieldtypes-filterable",

  props: {
    fieldTypes: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      fieldTypesFiltered: JSON.parse(JSON.stringify(this.fieldTypes)), // quick way to make a copy of an object.
      activeIndex: undefined,
      searchValue: undefined
    }
  },

  methods: {

    makeActive(index) {
      this.activeIndex = index;
    },

    filterFieldTypes: function (event) {

      let value = event.target.value.trim();

      if (value && value.length >= 1) { // filter the categories based on the text.
        this.fieldTypesFiltered = this.filter(value);
      } else { // Nothing so just set it back to the original categories.
        this.fieldTypesFiltered = JSON.parse(JSON.stringify(this.fieldTypes));
      }
    },

    filter: function (filterValue) {

      let fieldTypesCopy = JSON.parse(JSON.stringify(this.fieldTypes));

      Object.keys(fieldTypesCopy).forEach(function (fieldTypeIndex) {

        let i = fieldTypesCopy.length;

        while (i--) { // Using while and looping backwards because going to be modifying the array.
          let fieldType = fieldTypesCopy[i];

          // Checking if the search value is in the category key.
          if ( ! fieldType.name.toLowerCase().includes(filterValue.toLowerCase())) { // normalizing the value with toLowerCase
            fieldTypesCopy.splice(i, 1);
          }

        };

      });

      return fieldTypesCopy;

    }

  }

};

Vue.component('fieldtypes-filterable', FieldTypesFilterable);
