import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    // read: authenticated,
    update: authenticated,
    read: ({ req }) => {
      // If there is a user logged in,
      // let them retrieve all documents
      if (req.user) return true

      // If there is no user,
      // restrict the documents that are returned
      // to only those where `_status` is equal to `published`
      // or where `_status` does not exist
      return {
        or: [
          {
            _status: {
              equals: 'published',
            },
          },
          {
            _status: {
              exists: false,
            },
          },
        ],
      }
    },
  },
  labels: {
    singular: 'event',
    plural: 'Events',
  },
  admin: {
    defaultColumns: ['location'],
    group: 'Events',
    useAsTitle: 'location',
    description: 'Autocratic Despair Dialogues Events'
  },
  auth: false, // adds an email and password field on the admin end, we don't want that
  fields: [
    {
      name: 'eventname',
      type: 'text',
      defaultValue: 'Autocratic Despair Dialogues'
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        placeholder: 'Name of the Venue'
      }
    },
    {
      name: 'address',
      type: 'text',
      admin: {
        placeholder: 'StreetAddress, City State Zip'
      }
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'eventdate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'yyyy-MM-dd @ hh:mm aa',
          timeFormat: 'hhmm',
        },
        position: 'sidebar'
      },
    },
  ],
  timestamps: true,
  versions: {
    drafts: {
      autosave: {
        interval: 200, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}





