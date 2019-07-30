<template>
  <q-page class="flex flex-center">
      <p>{{employeesData}}</p>

      <div class ="row">
        
          <div class = "col-sm-6">
              <p>ini Firstname</p>
              <button class="primary" @click="getFirstNameOnly()">Firstname</button>
          <div>
              <p>{{firstNameDataOnly}}</p>
          </div>
        </div>

     <div class = "col-sm-6">
            <p>ini Lastname</p>
            <button class="primary" @click="getLastNameOnly()">Lastname</button>
          <div>
              <p>{{lastNameDataOnly}}</p>
          </div>
        </div>
        <button class="primary" @click="createNewEmployees()">Baru</button>

      </div>

  </q-page>
</template>

<style>
</style>

<script>

import Employees from "../api/employees/index";



export default {
  name: 'Employees',

  data(){
      return {
          employeesData:{},
          firstNameDataOnly:[],
          lastNameDataOnly:[],

          param:{
              "firstname":"Mahmud",
              "last_name":"Mamat",
              "email":"mm@gmail.com",
              "phone":"082122210912"
          }
      }
  },

  methods: {

      getFirstNameOnly(){
          const self = this;
          employees.getEmployees(window).then(function(datas){
              console.log('ini data nama depan',datas)
              for (let i = 0; i<datas.length;i++){
                self.firstNameDataOnly.push(datas[i].firstname)
              }
              return datas;
          }).catch(function(err){
              console.log(err)
          });

    },

      getLastNameOnly(){
          const self = this;
          employees.getEmployees(window, self.param).then(function(datas){
              console.log('ini data nama belakang',datas)
              for (let i = 0; i<datas.length;i++){
                  self.lastNameDataOnly.push(datas[i].last_name)
              }
              return datas;
            }).catch(function(err){
              console.log(err)
            });

        },


        createNewEmployees(){
            const self = this;
            Employees.submitNewEmployees(window, self.param).then(function(hasil){
            return hasil;

          }).catch(function (err){
              console.log(err)
          });

        }
    },


    beforeCreate(){
        let self = this

        Employees.getEmployees(window).then(function(employeesData){
          return employeesData
        }).then(function(res){
            console.log(res)
            self.employeesData = res
        }).catch(function(err) {
            console.log(err)
        })

        },
    }
</script>