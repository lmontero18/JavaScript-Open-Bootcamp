// Instalar axios -> llamadas a servicios externos
import axios, {isCancel, AxiosError} from 'axios';



axios.get('https://pokeapi.co/api/v2/pokemon/cyndaquil')//URL QUE QUEREMOS VER, EN ESTE CASO POKE API
  .then(function (response) {
    // handle success
    console.log("Success!");
    console.log(response.data);//Se accede a la informacion mediante el .data, si no, solo sale el estado de axios.
  })
  .catch(function (error) {
    // handle error
    console.log("Error");
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
