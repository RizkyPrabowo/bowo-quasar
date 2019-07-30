<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import Projects from "../api/project/index";

export default {
  data () {
    return {
      columns: [
        {
          name: 'ID',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          sortable: true
        },
        
        {
          name: 'projectname',
          required: true,
          label: 'projectname',
          align: 'left',
          field: row => row.projectname,
          sortable: true
        },

        {
          name: 'capacity',
          required: true,
          label: 'capacity',
          align: 'left',
          field: row => row.capacity,
          sortable: true
        },

        {
          name: 'status',
          required: true,
          label: 'status',
          align: 'left',
          field: row => row.status,
          sortable: true
        },

        {
          name: 'paymentstatus',
          required: true,
          label: 'paymentstatus',
          align: 'left',
          field: row => row.paymentstatus,
          sortable: true
        },

        {
          name: 'createAt',
          required: true,
          label: 'createAt',
          align: 'left',
          field: row => row.createAt,
          sortable: true
        },        
      ],
      data: []
    }
  },

        beforeCreate(){
        let self = this

        Projects.getAllProject(window).then(function(datas){
          return datas
        }).then(function(res){
            console.log(res)
            self.data = res
        }).catch(function(err) {
            console.log(err)
        })
    },
}
</script>