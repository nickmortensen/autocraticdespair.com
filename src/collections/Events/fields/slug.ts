import { deepMerge, type Field } from 'payload';
// https://www.frontendobserver.com/blog/how-to-create-a-generic-automatically-generating-slug-field-for-payload-cms
type Slug = (options?: { trackingField?: string }, overrides?: Partial<Field>) => Field;

const slugField: Slug = ({ trackingField = 'eventdate' } = {}, overrides = {}) =>
  deepMerge(
    {
      label: 'Slug',
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
      admin: {
        position: 'sidebar',
        components: {
          Field: {
            path: 'slug.tsx',
            exportName: 'SlugInput',
            clientProps: {
              trackingField,
            },
          },
        },
      },
      validate: (value: string) => {
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

        if (slugRegex.test(value)) {
          return true;
        }

        return 'Invalid slug. Must be kebab-case (lowercase, words separated by hyphens)';
      },
    },
    overrides,
  );

export { slugField };
