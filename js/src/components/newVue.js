if ( vueInstance ) {
    new Vue({
      el: '#test-vue-two',
      components: {
        testComponent,
        anotherComponent
      },
      mounted() {
        console.log('vue mounted 2 ');
        console.log(' 2');
      },
    });
}