<template>
     <v-col
        cols="12"
        sm="8"
        md="4"
    >
        <v-card class="elevation-12">
            <v-toolbar
            color="primary"
            dark
            flat
            >
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                v-model="email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                />

                <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>
<script>
export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        login(){
            this.$http({
                url: '/login',
                method: 'POST',
                data: { email: this.email, password: this.password }
            })
            .then(response => {
                if(response.data.status == 200){
                    alert('Usuario logueado correctamente ')
                } else {
                    alert(response.data.message)
                }
            })
            .catch(e => console.log(e.message))
        }
    }
}
</script>