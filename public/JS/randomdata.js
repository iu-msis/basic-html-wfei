var randomUser = new Vue({
  el:'#randomUserData',
  data:{
    users:{


    }
  },
  methods:{
    fetchUsers(){
      fetch('https://randomuser.me/api/')
      then(function(response){randomUser.users = response.json()});

      // then(response=>response.json())
      // then(json=>randomUser.users=json})
    }
  },
  created:function(){
this.fetchUsers

  };


  }
})
