import cryptoJS from "crypto-js";
import sign from "jwt-encode";
import { makeAutoObservable, observable } from "mobx";

class AuthStore {
  appState = null;

  constructor() {
    makeAutoObservable(this, {
      appState: observable,
    });
  }

  saveToken = (appState) => {
    try {
      localStorage.setItem(
        "appState",
        cryptoJS.AES.encrypt(sign(appState, "secret"), "webrtc").toString()
      );
      this.appState = appState;
    } catch (e) {
      console.log(e);
    }
  };
}

export default new AuthStore();
