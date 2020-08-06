<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Новый контакт</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Имя контакта"
                    :value="contactData.name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    type="tel"
                    v-model="phone"
                    :rules="phoneRules"
                    label="Номер телефона"
                    :value="contactData.phone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    type="email"
                    v-model="email"
                    label="Email"
                    :value="contactData.email"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="toggleDialog">Close</v-btn>
          <v-btn color="blue darken-1" text @click="editContact">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    contactData: {
      type: Object,
    }
  },
  data() {
    return {
      dialog: true,
      valid: true,
      name: this.contactData.name,
      nameRules: [(v) => !!v || "Необходимо указать имя контакта"],
      email: this.contactData.email,
      phone: this.contactData.phone,
      phoneRules: [
          v => !!v ||  "Необходимо указать номер контакта"
      ],
    };
  },
  methods: {
    toggleDialog() {
      this.$emit("toggledialog");
    },
    editContact() {
      if (this.valid) {
        let emitObj = {
          id : this.contactData.id,
          name: this.name,
          phone: this.phone,
          email: this.email
        };
        this.$emit("editcontact", emitObj);
        this.lastName = this.email = this.name = this.phone = "";
      }
    },
  },
};
</script>