import Vue from 'vue';

// Lib imports
import axios from 'axios';

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3000'