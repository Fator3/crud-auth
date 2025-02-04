<template>
  <tr
    @dblclick="emitDoubleClick(props.item, props.index)"
    :class="[
      'data-table-row',
      activityClass(props.item.meta.active),
      currentClass(props.item.meta.id)
    ]"
  >
    <td v-if="selectManyMode">
      <v-checkbox
        class="data-table-row__select"
        hide-details dense
        v-model="props.selected"
      ></v-checkbox>
    </td>
    <!-- action buttons -->
    <td class="cell-nowrap">
      <!-- edit record -->
      <crud-button
        v-if="editButton && editMode"
        small
        color="orange"
        @clicked="edit(props.item.meta.id, props.index)"
        icon="edit"
        :tooltip="$t('global.datatable.buttons.edit')"
      ></crud-button>
      <!-- custom buttons -->
      <crud-button
        v-for="(customButton) in customButtons"
        :key="customButton.name"
        :disabled="!props.item.meta.buttons[customButton.name]"
        small
        :color="customButton.color"
        @clicked="custom(customButton.name, props.item, props.index)"
        :icon="customButton.icon"
        :tooltip="customButton.text"
      ></crud-button>
      <!-- buttons for open modal with item elements -->
      <crud-button
        v-for="(button, key) in itemElements"
        :key="key"
        small
        :color="button.color"
        @clicked="editItemElements(key, props.item.meta.id)"
        :icon="button.icon"
        :tooltip="button.buttonText"
      ></crud-button>
      <!-- suspend/restore record (if soft deletes are enabled) -->
      <template v-if="['soft', 'both'].includes(deleteMode)">
        <!-- suspend button -->
        <crud-button
          v-if="props.item.meta.active == '1'"
          small
          color="red"
          @clicked="suspend(props.item.meta.id)"
          icon="undo"
          :tooltip="$t('global.datatable.buttons.suspend')"
        ></crud-button>
        <!-- restore button -->
        <crud-button
          v-else
          small
          color="green"
          @clicked="restore(props.item.meta.id)"
          icon="redo"
          :tooltip="$t('global.datatable.buttons.restore')"
        ></crud-button>
      </template>
      <!-- hard delete -->
      <crud-button
        v-if="['hard', 'both'].includes(deleteMode)"
        small
        color="black"
        @clicked="destroy(props.item.meta.id)"
        icon="delete"
        :tooltip="$t('global.datatable.buttons.delete')"
      ></crud-button>
    </td>
    <!-- table fields -->
    <template v-for="(field, key) in props.item">
      <td v-if="key !== 'meta'" :key="key">
        <!-- html -->
        <span v-if="columnTextModes[key] === 'html'" v-html="field"></span>
        <!-- cropped text -->
        <span v-else-if="columnTextModes[key] === 'cropped'" class="cell-nowrap">
          {{ field | cropped }}
        </span>
        <!-- text -->
        <span v-else-if="columnTextModes[key] === 'text'">
          {{ field }}
        </span>
        <!-- file -->
        <span v-else-if="columnTextModes[key] === 'file'">
          <file-details :fieldInfo="fileFieldToJSON(field)"></file-details>
        </span>
      </td>
    </template>
  </tr>
</template>

<script>
import CrudButton from './Button.vue'
import FileDetails from './FileDetails.vue'

export default {
  components: {
    CrudButton,
    FileDetails,
  },
  props: {
    props: {},
    editButton: {},
    customButtons: {},
    deleteMode: {},
    itemElements: {},
    columnTextModes: {},
    dynamicTextModes: {},
    editMode: {},
    selectManyMode: {
      type: Boolean,
      default: false,
    },
    currentItemId: {},
  },
  filters: {
    cropped (field) {
      let rField
      const maxLength = 40
      if (typeof field === 'string' || field instanceof String) {
        rField = field.length <= maxLength ? field : `${field.substring(0, maxLength - 3)}...`
      } else {
        rField = field
      }
      return rField
    },
  },
  methods: {
    fileFieldToJSON (field) {
      return JSON.parse(field)
    },
    activityClass (isActive) {
      let className = ''
      if (['soft', 'both', 'filter'].includes(this.deleteMode)) {
        className = `data-table-row--${parseInt(isActive) === 1 ? 'active' : 'inactive'}`
      }
      return className
    },
    currentClass (itemId) {
      const currentId = this.currentItemId
      return itemId === currentId ? 'current-row' : ''
    },
    emitDoubleClick (item, index) { this.$emit('doubleClick', item, index) },
    edit (id, index) { this.$emit('edit', id, index) },
    custom (name, item, index) { this.$emit('custom', name, item, index) },
    suspend (id) { this.$emit('suspend', id) },
    restore (id) { this.$emit('restore', id) },
    destroy (id) { this.$emit('destroy', id) },
    editItemElements (name, id) { this.$emit('editItemElements', name, id) },
  },
}
</script>

<style lang="scss" scoped>
.data-table-row {
  cursor: pointer;
  &--current {
    background-color: #dddddd;
  }
  &--inactive {
    color: rgb(244, 67, 54);
    box-shadow: 4px 0px 0px 0px rgb(244, 67, 54) inset;
  }
  &__select {
    margin-top: 0;
  }
}
</style>
