<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half is-narrow">
      <section class="section has-text-centered">
        <h1 class="title">Welcome to Github Faker, please login</h1>
        <button class="button is-github" @click.prevent="loginGH">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>Login</span>
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hello',
  methods: {
    loginGH() {
      axios.get('https://logingh.now.sh/logingh')
        .then(res => res.data)
        .then((data) => {
          window.location.replace(data.url);
        });
    },
  },
  created() {
    const query = this.$route.query;
    if (!query.code) return false;
    return axios.post('https://logingh.now.sh/get_token', { code: query.code })
      .then(res => res.data)
      .then((data) => {
        localStorage.setItem('token', data.token);
        window.location.reload();
      })
      .catch(err => err.response);
  },
};
</script>
