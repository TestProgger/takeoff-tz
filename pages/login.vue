<template>
  <v-app>
    <v-main column justify-center align-center>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" xs="12" sm="8" md="6" lg="6" xl="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title v-if="$route.query.require" >Необходимо авторизоваться</v-toolbar-title>
                <v-toolbar-title v-else >Авторизация</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="username"
                    :counter="64"
                    :rules="usernameRules"
                    label="Login"
                    prepend-icon="mdi-account"
                    type="text"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :counter="64"
                    :rules="passwordRules"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="resetForm">Очистить форму</v-btn>
                <v-btn color="primary" @click="loginUser">Авторизоваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "empty",

  data() {
    return {
      username: "",
      usernameRules: [
        (v) => !!v || "Login is required",
        (v) => (v && v.length <= 64) || "Login must be less than 64 characters",
      ],

      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length <= 64) || "Password must be less than 64 characters",
        (v) => (v && v.length >= 8) || "Password must be less more 8 characters",
      ],
      valid: false,
    };
  },
  methods: {
    loginUser() {
      if (this.valid) {
        const username = this.username;
        const password = this.password;
        this.$store.dispatch("login", { username, password });
        this.$router.push("/");
      }
    },
    resetForm() {
      this.username = this.password = "";
    },
  },
};
</script>
