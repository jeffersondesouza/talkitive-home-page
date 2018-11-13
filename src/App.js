import React, { Component } from 'react';

import { Router, Route, browserHistory } from 'react-router';

import './styles/App.css';
import axios from 'axios';

import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    );
  }
}

export default App;







/*
// axios.defaults.baseURL = `${API_URL}`;
const API_URL = 'https://api.dev.talkative.media/docs/#operation/'
const operation = 'login_email-and-password_create';

  const user = {
   name: "joao1",
   password: "12345678",
   email: "joao1@email.com",
 } */

 /*  
const user = {
  name: "joao1",
  password: "12345678",
  email: "joao2@email.com",
}

axios.post('https://api.dev.talkative.media/v1/signup/email-and-password', user)
   .then(res => console.log(res.data))
   .catch(function (error) {
     console.log({ error });
   }) */





















/*
Requisitos:
- Criar projeto no Git;
- Fazer a tela de login/cadastro que está no zeplin;
- Usar a api para enviar os dados de cadastrar/autenticação:
     - Doc da api: https://api.dev.talkative.media/docs/
     - Endpoints que tu vai usar:
          - Login: https://api.dev.talkative.media/docs/#operation/login_email-and-password_create
          - Cadastro: https://api.dev.talkative.media/docs/#operation/signup_email-and-password_create
     - Exemplo de login: https://api.dev.talkative.media/v1/login/email-and-password/
- Adaptar a tela pra mobile;
- Contabilizar quanto tempo tu levou para fazer tudo isso.
 
Quando tu pode me entregar?
 */

const data = {
  "account": {
    "id": 3788,
    "is_active": true,
    "date_joined": "2018-11-13T10:18:40Z",
    "profile": {
      "id": 3319,
      "account": 3788,
      "born_at": null,
      "phone": null,
      "gender": null,
      "language": "pt-BR",
      "country": null,
      "addr_cep": null,
      "addr_state": null,
      "addr_city": null,
      "addr_street": null,
      "addr_number": null,
      "addr_district": null,
      "addr_complement": null,
      "updated_at": "2018-11-13T10:18:40Z",
      "avatar": "https://s3.amazonaws.com/cdn.dev.talkative.media/static/admin2/img/ic_profile_white.png",
      "avatar_128x0": "https://s3.amazonaws.com/cdn.dev.talkative.media/static/admin2/img/ic_profile_white.png",
      "name": "joao1",
      "email": "joao2@email.com",
      "twofa": false
    },
    "settings": {
      "id": 2697,
      "newsletter": false,
      "email_new_post": false,
      "email_new_rumor": false,
      "email_new_task": false,
      "email_wololo": false,
      "email_limitation_open": false,
      "push_new_post": true,
      "push_new_task": true,
      "push_new_rumor": true,
      "push_wololo": true,
      "push_limitation_open": true,
      "created_at": "2018-11-13T10:18:40Z",
      "updated_at": "2018-11-13T10:18:40Z",
      "account": 3788
    },
    "organization_is_active_set": [{
      "id": 24,
      "name": "Talkative",
      "type": "open",
      "joined_at": "2018-11-13T13:18:40.269293Z",
      "created_at": "2017-09-04T21:48:33Z",
      "updated_at": "2018-10-05T11:27:36Z",
      "avatar": "https://s3.amazonaws.com/cdn.dev.talkative.media/profiles/a6e6463b-a454-4ab2-82b7-7a0ad4a51f11.png",
      "avatar_128x0": "https://s3.amazonaws.com/cdn.dev.talkative.media/profiles/eef4ba52-bb70-44a7-bf8c-816974632760.jpg",
      "custom_app": false,
      "can_realize_task": true,
      "points": 50,
      "status": "active",
      "invitation_url": "https://dev.tlkv.me/onboard?uuid=7f438f0f-20c2-42b3-b34c-d5bc9100573f",
      "invitation_count": 0,
      "invitation_second_count": 0,
      "invitation_performance": 0,
      "owner": false,
      "organizationsettings": {
        "id": 24,
        "organization": 24,
        "module_task": true,
        "module_task_type": "",
        "module_thunderclap": true,
        "module_publishing": true,
        "module_delation": true,
        "module_downloads": true,
        "module_suggestion": true,
        "module_rumor": true,
        "module_points": true,
        "module_alerts": true,
        "module_ranking": true,
        "module_pages": true,
        "module_donation": false,
        "module_contact": true,
        "limitation_sunday": false,
        "limitation_monday": false,
        "limitation_tuesday": false,
        "limitation_wednesday": false,
        "limitation_thursday": false,
        "limitation_friday": false,
        "limitation_saturday": false,
        "limitation_start": null,
        "limitation_end": null,
        "version": null,
        "invitation_domain": "",
        "created_at": "2017-09-04T21:48:33Z",
        "updated_at": "2018-10-05T11:27:36Z",
        "period_end": null,
        "app_android_url": null,
        "app_ios_url": null,
        "color_button": null,
        "color_bg": null,
        "splash_iphone4": null,
        "splash_iphone": null,
        "splash_iphonex": null,
        "splash_mdpi": null,
        "splash_hdpi": null,
        "splash_xhdpi": null,
        "splash_xxhdpi": null,
        "splash_xxxhdpi": null,
        "email_contact_type1": "Suporte",
        "email_contact_type2": "Ranking",
        "email_contact_type3": "Outros"
      }
    }],
    "externalaccount_set": [],
    "points": 0,
    "days_access": 0
  },
  "token": "talkative eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNzg4LCJvcmdhbml6YXRpb24iOm51bGwsImV4cCI6MTU0MjcxOTkyMCwidXNlcm5hbWUiOiJqb2FvMkBlbWFpbC5jb20iLCJlbWFpbCI6ImpvYW8yQGVtYWlsLmNvbSIsImRldmljZSI6bnVsbH0.08CIn6D-KyQj2Q8LBUx3YDpaA4JJNQU4yOXKfT5wP1Q"
}