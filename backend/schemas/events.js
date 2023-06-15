import {typed} from 'sanity'

export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'text',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
  ],
}
