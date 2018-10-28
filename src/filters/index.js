import Vue from 'vue';

export const numTostring = Vue.filter('numTostring', function (value) {
  console.log(value);
  value = value.substr(0, 2);
  return value
})
