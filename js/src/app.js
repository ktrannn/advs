import {fuckingTest} from './components/test';

console.log(fuckingTest);
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log('asdlkjasdl');
console.log(materials.map(material => material.length));

let array = [1, 2, 3];
console.log(array.map((n) => n + 1));

console.log('fuck');





import testComponent from './components/test.vue';
import anotherComponent from './components/AnotherTest.vue';
const vueInstance = document.querySelector('#test-vue');

if ( vueInstance ) {
  new Vue({
    el: '#test-vue',
    components: {
      testComponent,
      anotherComponent
    },
    mounted() {
      console.log('vue mounted');
      console.log('nigger');
    },
  });
}
