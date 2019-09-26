import axios from 'axios';
import qs from 'querystring';

const LoginService = (user, password) => {

  async function login(username, password) {

    if (username.trim().length <= 0 || password.trim().length <= 0) {
      console.log("Username or password is empty");
      return 0;
    }

    const url = 'https://sig.cefetmg.br/sigaa/logar.do?dispatch=logOn'

    const requestBody = {
      width: '1366',
      height: '768',
      urlRedirect: '',
      subsistemaRedirect: '',
      acao: '',
      acessibilidade: '',
      'user.login': username,
      'user.senha': password,
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '',
        'Cache-Control': 'max-age=0',
        'Connection': 'Keep-Alive'
      }
    }

    let getResponse = await axios.get('https://sig.cefetmg.br/sigaa/', config);
    console.log("GET", getResponse.data);
    let regex = new RegExp('([0-9A-Z]+)\\.inst([0-9]+)');
    let jsessionid = await regex.exec(getResponse.data);
    console.log(jsessionid);

    // config.headers.Cookie = 'JSESSIONID='+jsessionid;

    //let postResponse = await axios.post(url, qs.stringify(requestBody), config)
    //console.log(postResponse.data);

    //if(postResponse.data.search('Relogio.init') > 0) {
      return true;
    //}
    return false;
  }
  return login(user, password);
};

export default LoginService;
