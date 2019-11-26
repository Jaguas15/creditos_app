<template>
  <div class="mt-login">
    <div class="p-grid">
      <div class="p-col-6 p-offset-3">
        <div class="card card-w-title">
          <h1 style="text-align: center;">::IVBOX::</h1>
          <div class="p-grid p-offset-3">
            <div class="p-col-12 p-md-12">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user" />
                </span>
                <InputText v-model="userEmail" placeholder="Username" />
              </div>
            </div>
            <div class="p-col-12 p-md-12">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-key" />
                </span>
                <Password v-model="password" placeholder="Password" />
              </div>
            </div>
            <div class="p-col-12 p-md-12">
              <Button label="Entrar" @click="login" class="p-float-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userEmail: null,
      password: null
    };
  },
  methods: {
    login() {
      let email = this.userEmail;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>

mt-login {
  margin-top: 50px;
}
</style>

