<template>
  <v-container>
    <v-btn class="mt-10 ml-3" color="pink" absolute dark fab top right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

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
                    <v-text-field v-model="name" :rules="nameRules" label="Имя контакта" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      type="tel"
                      v-model="phone"
                      :rules="phoneRules"
                      label="Номер телефона"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field type="email" v-model="email" label="Email"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="addContact">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Необходимо указать имя контакта"],
    email: "",
    phone: "",
    phoneRules: [
      v => !!v || "Необходимо указать номер контакта",
    ],
  }),
  methods: {
    addContact() {
      let emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (this.valid) {
        let emitObj = {
          name: this.name,
          phone: this.phone,
        };
        if (emailRegExp.test(this.email)) {
          emitObj.email = this.email;
        }
        this.$emit("addcontact", emitObj);
        this.lastName = this.email = this.name = this.phone = "";
      }
    },
  },
};
</script>