export default {
  name: 'finance',
  type: 'document',
  title: 'Finance',
  fields: [
    {
      name: 'total',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'cost',
      title: 'Cost',
      type: 'number',
    },
  ],
}
