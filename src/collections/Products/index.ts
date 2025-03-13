import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Products: CollectionConfig = {
  slug: 'products',
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
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    defaultColumns: ['Product Name'],
    group: 'Products',
    useAsTitle: 'Product Name',
    description: 'Products for Sale'
  },
  auth: false, // adds an email and password field on the admin end, we don't want that
  fields: [
    {
      name: 'Product Name',
      type: 'text',
      defaultValue: 'Product Name'
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      }
    },
    // {
    //   name: 'subtitle',
    //   type: 'text',
    // },
    // {
    //   name: 'location',
    //   type: 'text',
    //   admin: {
    //     placeholder: 'Name of the Venue'
    //   }
    // },
    // {
    //   name: 'address',
    //   type: 'text',
    //   admin: {
    //     placeholder: 'StreetAddress, City State Zip',
    //     position: 'sidebar'
    //   }
    // },
    {
      name: 'description',
      type: 'richText',
    },
    // {
    //   name: 'eventdate',
    //   type: 'date',
    //   admin: {
    //     date: {
    //       pickerAppearance: 'dayAndTime',
    //       displayFormat: 'yyyy-MM-dd @ hh:mm aa',
    //       timeFormat: 'hhmm',
    //     },
    //     position: 'sidebar'
    //   },
    // },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar'
      }
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





