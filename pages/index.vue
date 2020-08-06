<template>
  <v-app id="inspire">
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
        max-width = '200'
        v-model="searchString"
      ></v-text-field>
  

      <v-btn flat color="blue darken-3" right @click="logout">
        <v-icon> mdi-logout </v-icon> 
        <span> Выход </span>
      </v-btn>

    </v-app-bar>

    <v-main>
      
      <DialogWindow  
        :contactData="contactData" 
        :argDialog = "true"
        v-if="dialog" 
        v-on:toggledialog = "dialog = !dialog"
        v-on:editcontact = "editContact"
        ></DialogWindow>

      <v-layout column justify-center align-center>
        <AddContactButton v-on:addcontact="addContact"></AddContactButton>
        <v-container>
          <v-row v-show="contactsData.length">
            <Contact
              v-for="item in contactsData"
              :key="item.id"
              :contactData="item"
              v-on:delcontact="delContact"
              v-on:editcontact="dialogPopup"
            ></Contact>
          </v-row>
          <v-row v-show="!contactsData.length" align="center" justify="center">
            <NoContacts></NoContacts>
          </v-row>
        </v-container>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import Contact from "@/components/Contact";
import NoContacts from "@/components/NoContacts";
import AddContactButton from "@/components/AddContactButton";

import DialogWindow from '@/components/DialogWindow'

export default {
  middleware: ["AuthCheck"],
  layout: "default",
  data() {
    return {
      dialog : false,
      searchString: "",
      contactData: {},
      allContactsData: {},
    };
  },

  async fetch({ store }) {
    if (store.getters["contact/contacts"] === null) {
      await store.dispatch("contact/fetch");
    }
  },

  methods: {
    delContact(id) {
      this.$store.dispatch("contact/delContact", id);
    },
    addContact( data ){
      this.$store.dispatch( "contact/addContact" , data )
    },
    dialogPopup( data ){
        this.contactData = data;
        this.dialog = !this.dialog;
    },
    editContact( data ){
      this.$store.dispatch( "contact/editContact" , data )
    },
    subStringSearch( item ){
      return !!(item.name.toLowerCase().indexOf( this.searchString.toLowerCase() ) +1)
    },
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/login');
    }
  },
  computed: {
    contactsData() {
      if( this.searchString === '' ){
        return this.$store.getters["contact/contacts"];
      }else{
        return this.$store.getters["contact/contacts"].filter( this.subStringSearch )
      }
      
    },
  },
  components: {
    Contact,
    NoContacts,
    AddContactButton,
    DialogWindow
  },
};
</script>