<script lang="ts" setup>
import { ref } from 'vue'
import type { AGUIPropertiesPanelProps, Vector3 } from '@advjs/gui'

const items = ref<AGUIPropertiesPanelProps[]>([
  {
    icon: 'i-mdi-axis-arrow',
    title: 'Transform',
    properties: [
      {
        type: 'vector',
        name: 'Position',
        value: {
          x: 0,
          y: 0,
          z: 0,
        },
      },
      {
        type: 'vector',
        name: 'Rotation',
        value: {
          x: 0,
          y: 0,
          z: 0,
        },
      },
      {
        type: 'vector',
        name: 'Scale',
        value: {
          x: 0,
          y: 0,
          z: 0,
        },
      },
    ],
  },

  {
    icon: 'i-ri:compasses-2-fill',
    title: 'Form Example',
    properties: [
      {
        type: 'input',
        name: 'Input',
        value: 'test',
      },
      {
        type: 'number',
        name: 'InputNumber',
        value: 10,
      },
      {
        type: 'checkbox',
        name: 'Checkbox',
        value: true,
      },
      {
        type: 'select',
        name: 'Select',
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
        ],
        value: '',
      },
      {
        type: 'select',
        name: 'Select',
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
        ],
        value: 'option1',
      },
      {
        name: 'Slider',
        type: 'slider',
        max: 100,
        min: 0,
        step: 1,
        value: 10,
      },
      {
        name: 'Number Slider',
        type: 'number-slider',
        max: 100,
        min: 0,
        step: 1,
        value: 10,
      },
      {
        name: 'divider',
        type: 'divider',
      },
      {
        type: 'vector',
        name: 'Vector2',
        value: {
          x: 0,
          y: 0,
        },
      },
      {
        type: 'vector',
        name: 'Vector3',
        value: {
          x: 0,
          y: 0,
          z: 0,
        },
      },
      {
        type: 'vector',
        name: 'Vector4',
        value: {
          x: 0,
          y: 0,
          z: 0,
          w: 0,
        },
      },
      {
        type: 'color',
        name: 'Color Picker',
        value: '#0099ff',
      },
      {
        type: 'button',
        name: 'Button',
        label: 'Button Label',
        title: 'Alert Test',
        onClick() {
          // eslint-disable-next-line no-alert
          alert('Button clicked!')
        },
      },
      {
        type: 'file',
        name: 'Accept File',
        placeholder: 'Placeholder',
        onFileChange() {
          // eslint-disable-next-line no-alert
          alert('File changed!')
        },
      },
    ],
  },
])

const defaultOpenItems = items.value.map(item => item.title).concat('test')

const vector3 = ref<Vector3>({
  x: 0,
  y: 0,
  z: 0,
})
</script>

<template>
  <AGUIAccordion type="multiple" :default-value="defaultOpenItems">
    <AGUIPropertiesPanel v-for="item in items" :key="item.title" :item="item" />
    <AGUIAccordionItem
      :item="{
        icon: 'i-ri-cloud-line',
        title: 'test',
      }"
    >
      <AGUIForm>
        <AGUIFormItem label="Default">
          <AGUIInputVector v-model="vector3" />
        </AGUIFormItem>

        <AGUIFormItem label="Default">
          <AGUICheckbox />
        </AGUIFormItem>
        <AGUIFormItem label="Checked" description="Checked Checkbox">
          <AGUICheckbox checked />
        </AGUIFormItem>
        <AGUIFormItem label="Disabled">
          <AGUICheckbox disabled />
        </AGUIFormItem>
      </AGUIForm>
    </AGUIAccordionItem>
  </AGUIAccordion>
</template>
