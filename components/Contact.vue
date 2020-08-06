<template>
  <v-col cols="12" xs="12" sm="6" md="4" lg="4">
    <v-card class="mx-auto" max-width="344">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>
        <span>
          {{contactData.name}}
        </span>
      </v-card-title>

      <v-card-text>
        <div class="subtitle-2 mb-2">
            <span> Телефон: {{ contactData.phone }}</span>
        </div>
        <div class="subtitle-2 mb-2">
            <span> Email: </span> 
            <span v-if="contactData.email"> {{ contactData.email }} </span> 
            <span v-else > Нет </span>
        </div>
      </v-card-text>

      <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn color="primary" @click.prevent="delContactCh" dark flat >
          <v-icon>mdi-trash-can-outline</v-icon>
          <span class="ml-3 hidden-md-and-down">Удалить</span>
        </v-btn>

        <v-btn color="primary" dark flat @click="editContact">
          <v-icon>mdi-pencil-outline</v-icon>
          <span class="ml-3 hidden-md-and-down">Редактировать</span>
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    contactData: {
      type: Object,
      required: true,
    },
  },
  methods: {
      delContactCh(){
          this.$emit('delcontact' , this.contactData.id)
      },
      editContact(){
          this.$emit('editcontact' , this.contactData)
      }
  }
};
</script>