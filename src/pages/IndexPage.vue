<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left' },
      { name: 'avatar', field: 'avatar', label: 'Avatar', sortable: true, align: 'left' },
      { name: 'nome', field: posts => posts.nome, label: 'Nome', sortable: true, align: 'left' },
      { name: 'email', field: 'email', label: 'E-mail', sortable: true, align: 'left' },
      { name: 'setor', field: 'setor', label: 'Setor', sortable: true, align: 'left' },
      { name: 'cargo', field: 'cargo', label: 'Cargo', sortable: true, align: 'left' }
    ]

    onMounted(() => {
      getPosts()
    }
    )

    const getPosts = async () => {
      try {
        const { data } = await api.get('http://localhost:8000/api/equipe-ti')
        posts.value = data
        /* const response = await api.get('http://127.0.0.1:8000/api/equipe-ti')
        posts.value = data
        console.log(response) */
      } catch (error) {
        console.error(error)
      }
    }
    return {
      posts,
      columns
    }
  }
})
</script>
