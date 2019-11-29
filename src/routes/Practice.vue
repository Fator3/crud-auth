<template>
  <div style="margin:20px;">
    <h1 style="text-align:center">Práticas</h1>
    <crud
      :prefix="prefix"
      :path="path"
      :page-title="pageTitle"
      :fields-info="fieldsInfo"
      :details-title="detailsTitle"
      :delete-mode="deleteMode"
      :refresh-button="refreshButton"
      :export-button="exportButton"
      :field-filters="fieldFilters"
      :main-filter="mainFilter"
      :create-mode="createMode"
      :edit-mode="editMode"
      :edit-button="editButton"
      :select-many-mode="selectManyMode"
      :update-many-mode="updateManyMode"
      :remove-many-mode="removeManyMode"
    >
    </crud>
    <alert-box></alert-box>
  </div>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'
import AlertBox from '@/utils/app/components/AlertBox.vue'
const baseUrl = process.env.VUE_APP_API_ENDPOINT

export default {
  data () {
    return {
      prefix: 'practice',
      path: 'crud',
      pageTitle: 'demo.tasks',
      detailsTitle: '',
      deleteMode: 'soft',
      refreshButton: true,
      exportButton: true,
      fieldFilters: true,
      mainFilter: true,
      createMode: true,
      editMode: true,
      editButton: true,
      selectManyMode: true,
      updateManyMode: true,
      removeManyMode: true,
    }
  },
  created () {
    this.detailsTitle = this.$t('detailsTitle')
  },
  computed: {
    fieldsInfo () {
      return [
        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          name: 'name',
          multiedit: false,
        },
        {
          type: 'input',
          column: 'cid',
          text: this.$t('fields.cid'),
          name: 'cid',
          multiedit: false,
        },
        {
          type: 'select',
          column: 'specialty',
          text: this.$t('fields.specialty'),
          name: 'specialty',
          complexName: ['specialty.name'],
          url: baseUrl + 'specialty/crud',
          list: {
            value: 'id',
            text: 'name',
          },
        },
      ]
    },
  },
  components: {
    Crud,
    AlertBox,
  },
  i18n: {
    messages: {
      en: {
        detailsTitle: 'Practice',
        fields: {
          id: 'Id',
          name: 'Name',
          cid: 'Cid',
          specialty: 'Specialty',
        },
      },
    },
  },
}
</script>
