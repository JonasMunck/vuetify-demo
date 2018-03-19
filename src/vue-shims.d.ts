// src/vue-shims.d.ts

import Vue from 'vue'
import { AxiosInstance } from 'axios';

declare module "*.vue" {
  interface Vue {
    $http: AxiosInstance
  }
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}