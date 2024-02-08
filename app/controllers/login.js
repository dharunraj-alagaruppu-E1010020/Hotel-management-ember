import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login(e) {
      e.preventDefault();
      
      let loginUser = {
        phone_number: this.model.phone_number,
        password: this.model.password,
        role_id: this.model.role_id
      };

      console.log(loginUser);

      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const user_obj = data.user_obj;
        
      if(data.role === 'admin'){
        this.transitionToRoute('restaurant');
        }  else if(data.role === 'user'){
          console.log('user');
        this.transitionToRoute('/restaurants/index');
        }

        const conver_to_str_obj = JSON.stringify(user_obj);
        sessionStorage.setItem("user_obj", conver_to_str_obj);
        sessionStorage.setItem("role", data.role);
      })
      .catch(error => {
        console.error(error);
        alert('Login failed. Please check your credentials.');
      });
    }
  }
});
