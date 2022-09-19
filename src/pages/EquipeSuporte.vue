<template>
  <div class="q-pa-md">
    <q-table
      title="Equipe Suporte"
      :rows="this.posts.data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="avatar" :props="props">
            <q-avatar
              :key="props.row.id"
              size="40px"
              class="overlapping"
            >
              <img :src="props.row.avatar">
            </q-avatar>
          </q-td>
          <q-td key="nome" :props="props">
            {{ props.row.nome }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="setor" :props="props">
            {{ props.row.setor }}
          </q-td>
          <q-td key="cargo" :props="props">
            {{ props.row.cargo }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'avatar', align: 'center', label: 'Avatar', field: 'avatar', sortable: true },
  { name: 'nome', align: 'center', label: 'Nome', field: 'nome', sortable: true },
  { name: 'email', align: 'center', label: 'E-Mail', field: 'email', sortable: true },
  { name: 'setor', align: 'center', label: 'Setor', field: 'setor', sortable: true },
  { name: 'cargo', align: 'center', label: 'Cargo', field: 'cargo', sortable: true }
]

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])

    onMounted(() => {
      getPosts()
    }
    )

    const getPosts = async () => {
      try {
        const { data } = await api.get('http://localhost:8000/api/equipe-suporte')
        posts.value = data
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
