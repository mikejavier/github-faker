<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="{name: 'Home'}" class="navbar-item header-logo-invertocat">
            <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </router-link>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="columns">
        <div class="column is-3">
          <figure class="image avatar">
            <img :src="userData.avatar_url">
          </figure>
          <div class="content">
            <h2 class="title">{{userData.name}}</h2>
            <h3 class="subtitle">{{userData.login}}</h3>
            <p>{{userData.bio}}</p>
            <hr>
            <p>
              <span class="icon">
                <i class="fa fa-users"></i>
              </span>
              {{userData.company}}
            </p>
            <p>
              <span class="icon">
                <i class="fa fa-map-marker"></i>
              </span>
              {{userData.location}}
            </p>
            <p>
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
              {{userData.email}}
            </p>
            <p>
              <span class="icon">
                <i class="fa fa-link"></i>
              </span>
              <a :href="userData.blog" target="_blank">{{userData.blog}}</a>
            </p>
          </div>
        </div>
        <div class="column is-9">
          <div class="tabs">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Repositories</a></li>
              <li><a>Stars</a></li>
              <li><a>Followers <span class="counter">{{userData.followers}}</span></a></li>
              <li><a>Following <span class="counter">{{userData.following}}</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      userData: {},
    };
  },
  created() {
    const token = localStorage.getItem('token');
    axios.get(`https://api.github.com/user?access_token=${token}`)
      .then(res => res.data)
      .then((data) => {
        this.userData = data;
      });
  },
};
</script>

<style scoped lang="scss">
.header-logo-invertocat {
  color: #fff !important;
}
.octicon {
  fill: currentColor;
}
main {
  margin-top: 25px;
}
.avatar {
  margin-bottom: 15px;
}
.counter {
  display: inline-block;
  padding: 2px 5px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: #586069;
  background-color: rgba(27,31,35,0.08);
  border-radius: 20px;
}
</style>
