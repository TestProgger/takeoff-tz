<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
    <v-icon>mdi-account-circle</v-icon>

    <v-toolbar-title class="hide-sm-and-down ml-0 pl-4">
      <span class="hidden-sm-and-down">Контакты</span>
    </v-toolbar-title>

    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="mr-5 ml-10"
      v-model="searchString"
      @click="console.log('12121221')"
    ></v-text-field>

    <h1> {{ searchString }} </h1>

  </v-app-bar>
</template>

<script>
export default {
    data(){
        return {
            searchString: ''
        }
    },
    methods:{
        searchContact(){
            this.searchString =  this.searchString.split('').reverse().join('')
        }
    }

}
</script>