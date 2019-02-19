import axios from 'axios'

// const apiUrl = 'http://localhost:3000/api/v1';
const apiUrl = 'http://localhost:3000'

const saveData = (result) => {
  const currentUser = JSON.parse(sessionStorage.getItem(['current_user']));
  const path = apiUrl + '/performance_data';
  return new Promise((resolve, reject) => {
    axios.post(path, {
      performance_data: { data: { message: result }},
      user_id: currentUser.id
    })
    .then(response => {
      resolve(response.data.message);
    });  
  });
};

const getData = () => {
  const currentUser = JSON.parse(sessionStorage.getItem(['current_user']));
  const path = apiUrl + '/performance_data';
  return new Promise((resolve, reject) => {
    axios.get(path, {
      params: {
        user_id: currentUser.id
      }
    })
    .then(response => {
      resolve(response);
    });
  });
};

export { getData, saveData }