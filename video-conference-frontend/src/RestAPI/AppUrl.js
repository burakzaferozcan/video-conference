class AppUrl {
  static baseURL = "http://127.0.0.1:8000";
  static apiURL = this.baseURL + "/api";

  static login = this.apiURL + "/client/login";
  static register = this.apiURL + "/client/register";
  static profile = this.apiURL + "/client/profile";
  static check = this.apiURL + "/client/check";
  static logout = this.apiURL + "/client/logout";
}

export default AppUrl;
